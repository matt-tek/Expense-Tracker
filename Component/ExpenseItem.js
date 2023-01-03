import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ExpenseItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key, item.value)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    item: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: "dashed",
      borderRadius: 1,
      borderRadius: 10,
    }
  });