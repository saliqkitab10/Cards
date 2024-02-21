import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <>
      <View>
        <Text style={styles.headingText}>ElevatedCards</Text>
      </View>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text> Tap </Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
          <Text> me </Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
          <Text> to </Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
          <Text> see </Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
          <Text> more </Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
          <Text> ... </Text>
        </View>

        <View style={[styles.card, styles.elevatedCard]}>
          <Text> 😍😍😍... </Text>
        </View>
      </ScrollView>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    margin: 5,
    borderRadius: 10,
  },
  elevatedCard: {
    backgroundColor: 'orange',
    elevation: 10,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    shadowColor: 'yellow',
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
});
