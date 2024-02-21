import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>
            What's new in JavaScript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText} numberOfLines={4}>
            In December 2022, TypeScript 4.3 was made available. It is another
            updated JavaScript that is extremely capable. It has several new
            features and enhancements, such as support for the export * as ns
            syntax, better type inference for class properties, and improved
            type checking for generic functions
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://devtechnosys.com/insights/updates-on-javascript/#:~:text=TypeScript%3A,-Due%20to%20its&text=In%20December%202022%2C%20TypeScript%204.3,type%20checking%20for%20generic%20functions.',
              );
            }}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.linkedin.com/in/saliqarshid10/')
            }>
            <Text style={styles.socialLinks}>Connect with me</Text>
          </TouchableOpacity>
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
  },
  card: {
    margin: 15,
    borderRadius: 12,
    paddingBottom: 12,
  },
  elevatedCard: {
    backgroundColor: '#DAE0E2',
    elevation: 10,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowColor: 'black',
  },
  headerContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    fontFamily: 'Georgia',
    color: 'black',
  },
  cardImage: {
    height: 400,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 12,
  },
  bodyContainer: {},
  bodyText: {
    textAlign: 'justify',
    margin: 8,
    color: 'black',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 30,
  },
  socialLinks: {
    fontSize: 15,
    color: 'black',
    backgroundColor: 'blue',
    paddingHorizontal: 2,
    paddingVertical: 3,
    borderRadius: 6,
  },
});
