import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGame = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color={Colors.secondary} onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color={Colors.primary} onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  button: {
    width: 90,
  },
});
export default StartGame;
