import React from "react";
import { View, Text, StyleSheet } from "react-native";

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Hello, there</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {},
});

export default App;
