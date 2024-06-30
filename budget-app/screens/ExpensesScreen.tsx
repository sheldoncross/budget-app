import { View, StyleSheet, SafeAreaView, Platform, StatusBar, Pressable } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import ExpenseItem  from '../components/ExpenseItem';

// Dummy data
const EXPENSES = [
    { id: 1, title: 'Grocery', amount: 200 },
    { id: 2, title: 'Rent', amount: 1000 },
    { id: 3, title: 'Insurance', amount: 100 },
    { id: 4, title: 'Utility', amount: 150 },
];

type Expense = { 
    id: number,
    title: string,
    amount: number
};


export default function ExpensesScreen() {
    const handleAddExpense = (id: number) => {
        console.log("Expense selected: ", EXPENSES[id-1].title);
    };

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
          <View style={styles.container}>
            <FlashList
                data={EXPENSES}
                renderItem={( {item}: {item: Expense} ) => (
                    <ExpenseItem 
                        id={item.id} 
                        title={item.title} 
                        amount={item.amount}
                        onViewDetails={handleAddExpense} 
                    />
                )}
              estimatedItemSize={100}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </SafeAreaView>
      );
};

const styles = StyleSheet.create({
    AndroidSafeArea: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});