import React from "react";
import { View, StyleSheet, Text, Pressable, Button } from "react-native";

function GoalItem(props) {
  const deleteItemHandler = () => {
    console.log("before");
    props.onDeleteItem();
    console.log("clicked");
  };

  console.log("props", props);
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }} // (Android) this make the an effect to the button when you press it
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => (pressed ? styles.pressedItem : "")} // (IOS) this make the an effect to the button when you press it
      >
        <Text style={styles.goalText}>{props.itemData}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    // flex: 1,
    // flexDirection: "row",
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    // alignItems: "center",
  },
  goalText: {
    // flex: 1,
    padding: 8,
    color: "white",
    textAlign: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
