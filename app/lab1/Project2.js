import React from "react";
import { View, Button, Alert, StyleSheet } from "react-native";

const Project2 = () => {
  const showAlert = () => {
    Alert.alert("Hello");
  };

  return (
    <View style={styles.container}>
      <Button title="Nhấn vào đây" onPress={showAlert} />
    </View>
  );
};

export default Project2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
