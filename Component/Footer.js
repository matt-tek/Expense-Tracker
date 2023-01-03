import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer({ text }) {
  return (
    <View style={styles.footer}>
        <Text style={styles.title}>Total spent = {text}€</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 40,
    paddingTop: 8,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});