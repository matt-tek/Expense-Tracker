import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { openDatabase } from 'expo-sqlite';
import ExpenseItem from './Component/ExpenseItem';
import Header from './Component/Header';
import AddExpense from './Component/AddExpense';
import AddPrice from './Component/AddPrice';
import Footer from './Component/Footer';

const db = openDatabase('./db/database.db')

export default function App() {
  const [str, setStr] = useState("");
  const [expense, setExpense] = useState([]);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    db.transaction(ex => {
      ex.executeSql(
        'CREATE TABLE IF NOT EXISTS expenses ( \
	      expense_id integer PRIMARY KEY, \
	      expense_name text NOT NULL, \
	      price integer DEFAULT 0 );'
      )
    })
  }, []);
  const addData = () => {
    if (!expense) {
      Alert("Plese enter an expense")
      return false;
    }
    db.transaction(ex => {
      ex.executeSql('INSERT INTO expenses (expense_name, price) VALUES(?);',
        [str, price],
        (sqlEx, res) => {
          console.log(`${str} and ${price} category added successfully`);
          getData();
          setStr();
        },
        error => {
          console.log("error on adding category " + error.message);
        },
      );
    })
  };
  const getData = () => {
    db.transaction(ex => {
      ex.executeSql('SELECT * FROM expenses',
        [],
        (sqlEx, res) => {
          console.log(`get data success`);
          let len = res.rows.length;
          if (len > 0) {
            let data = [];
            for (let i = 0; i <= len; i++) {
              let item = res.rows.item(i);
              data.push({key: item.id, text: item.expense_name});
            }
          }
          setExpense(data);
        },
        error => {
          console.log("error on getting category " + error.message);
        },
      );
    })
  };
  const expenseHandler = (val) => {
    const conv = parseFloat(val, 10);
    setPrice(oldPrice => {
      return oldPrice += conv;
    });
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddExpense  str={str} setStr={setStr} addData={addData}/>
        <AddPrice submitHandler={expenseHandler} />
        <View style={styles.list}>
          <FlatList
            data={expense}
            renderItem={({ item }) => (
              <ExpenseItem item={item}/>
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
