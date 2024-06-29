import { FlashList } from '@shopify/flash-list';
import { useState } from 'react';
import { Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ListItem } from '@rneui/base';

export default function App() {
  type Expense = { 
    id: Number,
    title: String,
    amount: Number
  };

  // Dummy data
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Grocery', amount: 200 },
    { id: 2, title: 'Rent', amount: 1000 },
    { id: 3, title: 'Insurance', amount: 100 },
    { id: 4, title: 'Utility', amount: 150 },
  ]);

  const handleAddExpense = (id: Number) => {
    console.log("Expense selected: ", id);
  };

  const renderExpenses = ({item}: {item: Expense}) => (
    <Pressable onPress={() => handleAddExpense(item.id)}>
        <ListItem bottomDivider >
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.amount.toString()}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
    </Pressable>
  );
  
  
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View style={styles.container}>
        <FlashList
          data={expenses}
          renderItem={renderExpenses}
          estimatedItemSize={100}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

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
