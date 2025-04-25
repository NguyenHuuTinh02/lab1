import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Project1 from './lab1/Project1';
import Project2 from './lab1/Project2';
import Project3 from './lab1/Project3';
import Project4 from './lab1/Project4';
import Project5 from './lab1/Project5';
import Project6 from './lab1/Project6';
import Project7 from './lab1/Project7';
import Project8 from './lab1/Project8';
import Calculator from './lab1/lab1_bai2';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trang Chủ"
        component={HomeScreen}
        options={{
          title: 'Chọn Project',
          headerStyle: { backgroundColor: '#4DABF7' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      />
      <Stack.Screen name="Project1" component={Project1} />
      <Stack.Screen name="Project2" component={Project2} />
      <Stack.Screen name="Project3" component={Project3} />
      <Stack.Screen name="Project4" component={Project4} />
      <Stack.Screen name="Project5" component={Project5} />
      <Stack.Screen name="Project6" component={Project6} />
      <Stack.Screen name="Project7" component={Project7} />
      <Stack.Screen name="Project8" component={Project8} />
      <Stack.Screen name="Calculator" component={Calculator} options={{ title: 'Calculator' }} />
    </Stack.Navigator>
  );
}