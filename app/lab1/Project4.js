import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Component con nhận props từ cha
const DisplayValue = ({ label, value }) => {
  return (
    <View style={styles.displayBox}>
      <Text style={styles.label}>{label}: </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const Project4 = () => {
  // State: giá trị có thể thay đổi
  const [count, setCount] = useState(0);

  // Props: giá trị truyền xuống cho component con
  const initialName = "React Native";

  return (
    <View style={styles.container}>
      {/* Props: name là giá trị truyền xuống cho component con */}
      <DisplayValue label="Tên dự án (Props)" value={initialName} />

      {/* State: count là giá trị có thể thay đổi */}
      <DisplayValue label="Số lần nhấn (State)" value={count} />

      {/* Nút tăng giá trị state */}
      <Button title="Tăng giá trị" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Project4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  displayBox: {
    flexDirection: "row",
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  value: {
    fontSize: 18,
  },
});
