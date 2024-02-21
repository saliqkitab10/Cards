import {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, [count]);
  return (
    <View>
      <Text>I've rendered {count} times!</Text>
      <Button title="press me" onPress={() => setCount(count + 1)} />
    </View>
  );
}

export default Timer;
