import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ExpenseItem from './Component/ExpenseItem';
import Header from './Component/Header';
import Prout from './Component/AddExpense';
import Footer from './Component/Footer';

export default function App() {
  const [expense, setExpense] = useState([
    { text: 'coffee 2€', value: 2 ,key: '1' },
    { text: 'shopping 120€', value: 120, key: '2' },
    { text: 'gaming 59€', value: 59, key: '3' }
  ]);
  const [price, setPrice] = useState(2 + 120 + 59);

  const submitHandler = (text, val) => {
    setExpense(prevExpense => {
      return [
        { text: text, value: val ,key: Math.random().toString() },
        ...prevExpense
      ];
    });
    setPrice(oldPrice => {
      return oldPrice += val;
    });
  };
  const pressHandler = (key, value) => {
    setExpense(prevExpense => {
      return prevExpense.filter(e => e.key != key);
    });
    setPrice(total => {
      return total - value;
    })
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Prout submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={expense}
            renderItem={({ item }) => (
              <ExpenseItem item={item} pressHandler={pressHandler} />
            )}/>
        </View>
      </View>
      <Footer text={price} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
  text: {
    textAlign: 'center',
    padding: 20,
    textAlign: 'center',
  }
});
