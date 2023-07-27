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
      <Text style={styles.goalText}>{props.itemData}</Text>
      <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
        <View style={styles.deleteBtn}>
          <Button title={"X"} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    flex: 1,
    flexDirection: "row",
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    alignItems: "center",
  },
  goalText: {
    flex: 1,
    color: "white",
    textAlign: "center",
  },
  deleteBtn: {
    width: "100%",
  },
});

export default GoalItem;
