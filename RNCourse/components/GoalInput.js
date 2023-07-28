import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput({ onAddGoal, onVisibleModal, onCancel }) {
  const [enteredGoalText, setEnteredText] = useState("");

  const goalInputHandler = (enteredInput) => {
    setEnteredText(enteredInput);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredText("");
  };

  return (
    <Modal visible={onVisibleModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter goal..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.btn}>
            <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    paddingTop: "20%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  image: {
    // backgroundColor: "black",
    borderRadius: 20,
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  btn: {
    marginRight: "8%",
    marginLeft: "7%",
    width: "40%",
    marginHorizontal: 40,
  },
  textInput: {
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#e4d0ff",
    borderColor: "#e4d0ff",
    color: "black",
  },
});

export default GoalInput;
