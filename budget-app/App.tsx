import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpensesScreen from './screens/ExpensesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Expenses" component={ExpensesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};
