import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("Vinh");
  const [age, setAge] = useState<number>(21);
  const [person, setPerson] = useState({ name: 'Vinh', age: 21 });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          {name}
        </Text>
        <Text>
          {person.age}
        </Text>
      </View>
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'red'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20
  },
});
