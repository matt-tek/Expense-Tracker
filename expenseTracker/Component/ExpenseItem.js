import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

export default function ExpenseItem({ item }) {
  return (
    <View>
        <Text style={styles.item}>{item.text}</Text>
    </View>
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