import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// Dữ liệu mẫu
const DATA = [
  { id: '1', name: 'Johan Renard' },
  { id: '2', name: 'Brandt Van Mijl' },
  { id: '3', name: 'Kasper Kivela' },
  { id: '4', name: 'Harley Martin' },
  { id: '5', name: 'Aapo Niemelä' },
  { id: '6', name: 'Carol Williams' },
  { id: '7', name: 'زا ثسيس' },
  { id: '8', name: 'محمد ابن سيناء' },
  { id: '9', name: 'Mauritz Musch' },
  { id: '10', name: 'Andrea Austin' },
  { id: '11', name: 'Marat Kutlay' },
  { id: '12', name: 'Nanneke Ermers' },
  { id: '13', name: 'Jayden Anderson' },
  { id: '14', name: 'Nadji Van Riet' },
  { id: '15', name: 'Heather Hudson' },
  { id: '16', name: 'Maria Wright' },
  { id: '17', name: 'Edemilsa Nogueira' },
];

// Mỗi item hiển thị
const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const Project8 = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Project8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 4,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
  },
});