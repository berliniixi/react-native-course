import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const enableModal = () => {
    setModalVisible(true);
  };

  const disenableModal = () => {
    setModalVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    disenableModal();
  };

  const deleteGoalHandler = (itemID) => {
    console.log("itemID", itemID);
    setCourseGoal((currentCourseGoal) =>
      currentCourseGoal.filter((item) => item.id !== itemID)
    );
    console.log("DELETE");
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#a065ec" onPress={enableModal} />

        <GoalInput
          onAddGoal={addGoalHandler}
          onVisibleModal={modalVisible}
          onCancel={disenableModal}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
              // console.log(item.text);
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "flex-start",
    paddingTop: 80,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
    paddingTop: 20,
  },
});
