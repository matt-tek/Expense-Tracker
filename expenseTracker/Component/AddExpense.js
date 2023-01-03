import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddExpense({ str, setStr, addData }) {
  return (
    <View>
      <TextInput 
        style={styles.input} 
        placeholder='new expense...'
        onChangeText={setStr} 
        value={str} />
      <Button color='coral' onPress={addData} title='add expense'/>
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