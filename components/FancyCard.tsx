import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  const images = [
    'https://lh3.googleusercontent.com/p/AF1QipPkeFcLTfDI1EYPpzPeyH5GlftJjq8s0KfLKZ1Q=s1360-w1360-h1020',
  ];
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image style={styles.cardImage} source={{uri: images[0]}}></Image>
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Clock Tower</Text>
          <Text style={styles.cardSubTitle}>Lal Chowk , Srinagar</Text>
          <Text style={styles.cardDescription}>
            The clock tower, also known as Ghanta Ghar, holds a special place in
            the hearts of the community. What once began as an advertising
            spectacle by the Baja Company many decades ago has now evolved into
            a historical landmark that stands testament to the passage of time.
          </Text>
          <Text style={styles.cardFooter}>15 min away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 5,
  },

  cardImage: {
    height: 400,
    margin: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderRadius: 15,
    marginBottom: 10,
    elevation: 25,
  },
  card: {
    padding: 10,
    backgroundColor: '#DAE0E2',
    margin: 15,
    borderRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  cardElevated: {
    elevation: 20,
    shadowColor: '#2B2B52',
    shadowOffset: {
      width: 10,
      height: 10,
    },
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  cardTitle: {
    color: '#333945',
    fontSize: 30,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  cardSubTitle: {
    color: '#333945',
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  cardDescription: {
    color: '#333945',
    marginBottom: 5,
    textAlign: 'justify',
    fontSize: 13,
    flexShrink: 3,
  },
  cardFooter: {
    color: '#333945',
  },
});
