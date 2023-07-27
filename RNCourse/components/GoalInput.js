import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";

function GoalInput({ onAddGoal }) {
  const [enteredGoalText, setEnteredText] = useState("");

  const goalInputHandler = (enteredInput) => {
    setEnteredText(enteredInput);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter goal..."
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
