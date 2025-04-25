import React from "react";
import { View, Alert, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

const Project3 = () => {
  const handlePress = () => {
    Alert.alert("Bạn đã nhấn nút!");
  };

  return (
    <View style={styles.container}>
      <CustomButton
        text="Nhấn vào tôi"
        onPress={handlePress}
        buttonStyle={{ backgroundColor: "tomato" }}
      />
      <CustomButton
        text="Nút xanh"
        onPress={() => Alert.alert("Hello Nguyen Huu Tinh ")}
        buttonStyle={{ backgroundColor: "green" }}
      />
    </View>
  );
};

export default Project3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
