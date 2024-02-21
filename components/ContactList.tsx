import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
    {
      uid: 5,
      name: 'Saliq Arshid',
      status: 'Developing Sling TV',
      imageUrl:
        'https://media.licdn.com/dms/image/D5603AQG3bcmukKlKiQ/profile-displayphoto-shrink_800_800/0/1673106424678?e=1713398400&v=beta&t=eCpy83geouBcGX1lVr2X_9rNc4mSQobr7ELnzg5G-AQ',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map(item => (
          <View key={item.uid} style={styles.userCard}>
            <Image source={{uri: item.imageUrl}} style={styles.userImage} />
            <View style={styles.textContainer}>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userStatus}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    padding: 16,
  },
  userCard: {
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A4B0BD',
    marginBottom: 5,
  },
  userImage: {
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 50, // /2
    marginBottom: 4,
    marginRight: 5,
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowColor: 'black',
    elevation: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  userStatus: {
    fontSize: 15,
  },
  textContainer: {
    flex: 3,
  },
});
