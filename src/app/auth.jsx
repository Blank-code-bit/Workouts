import { Redirect, Stack } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useAuth } from "../providers/AuthContext";

const AuthScreen = () => {
  const [localUsername, setLocalUsername] = useState("");
  const { setUsername, username } = useAuth();

  const onSignIn = () => {
    setUsername(localUsername);
  };

  if (username) {
    return <Redirect href={"/"} />;
  }

  return (
    <View style={styles.page}>
      <Stack.Screen options={{ title: "Sign In" }} />

      <Text style={styles.label}>Username</Text>
      <TextInput
        value={localUsername}
        onChangeText={setLocalUsername}
        placeholder="Username"
        style={styles.input}
      />
      <Button title="Sign in" onPress={onSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    gap: 10,
    backgroundColor: "white",
  },
  label: {
    fontWeight: "600",
    fontSize: 20,
    color: "dimgray",
  },
  input: {
    borderWidth: 1,
    borderColor: "gainsboro",
    padding: 10,
    borderRadius: 5,
  },
});

export default AuthScreen;
