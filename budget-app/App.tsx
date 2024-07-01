import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExpensesScreen from './screens/ExpensesScreen';
import AccountsScreen from './screens/AccountsScreen';
import BillsScreen from './screens/BillsScreen';
import GoalsSreen from './screens/GoalsSreen';
import TransactionScreen from './screens/TransactionScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Expenses" component={ExpensesScreen} />
        <Tab.Screen name="Bills" component={BillsScreen} />
        <Tab.Screen name="Goals" component={GoalsSreen} />
        <Tab.Screen name="Transactions" component={TransactionScreen} />
        <Tab.Screen name="Accounts" component={AccountsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
};
