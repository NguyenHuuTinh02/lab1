import { StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const projects = [
    { title: 'Project 1', color: '#FF6B6B', screen: 'Project1' },
    { title: 'Project 2', color: '#FFA94D', screen: 'Project2' },
    { title: 'Project 3', color: '#FFD43B', screen: 'Project3' },
    { title: 'Project 4', color: '#69DB7C', screen: 'Project4' },
    { title: 'Project 5', color: '#38D9A9', screen: 'Project5' },
    { title: 'Project 6', color: '#4DABF7', screen: 'Project6' },
    { title: 'Project 7', color: '#9775FA', screen: 'Project7' },
    { title: 'Project 8', color: '#F783AC', screen: 'Project8' },
    { title: 'Calculator', color: '#FF8787', screen: 'Calculator', isDouble: true },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {projects.map((project, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            { backgroundColor: project.color },
            project.isDouble && { width: '100%', minHeight: 120 },
          ]}
          onPress={() => navigation.navigate(project.screen)}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>{project.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  button: {
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    minHeight: 80,
    width: '48%',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});