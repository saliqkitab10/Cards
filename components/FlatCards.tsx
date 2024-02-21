import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <>
      <View>
        <Text style={styles.headingText}>Flat Cards</Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card One</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card Two</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Card Three</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Card Three</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Card Three</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Card Three</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 10,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
});
