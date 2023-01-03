import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert } from 'react-native';

export default function AddExpense({ submitHandler }) {
  const [price, setPrice] = useState(0);
  const [text, setText] = useState('');
  const changeHandler = (val) => {
    setText(val);
    let i = 0;
    i = val.match(/\d+/);
    i = parseFloat(i, 10);
    if (i !== i) {
      i = 0;
    }
    setPrice(i);
  };

  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new expense...'
        onChangeText={changeHandler} 
        value={text} />
      <Button color='coral' onPress={() => submitHandler(text, price)} title='add expense'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});