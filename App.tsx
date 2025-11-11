import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("");

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          value={name}
          onChangeText={e => setName(e)}
          autoCapitalize='none'
          autoCorrect={false}
          // keyboardType='numeric' 
          // multiline
          style={styles.textInput} />

        <Button title='Submit' />

        <Text style={styles.text}>
          {name}
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
  textInput: {
    borderWidth: 1,
    borderColor: 'violet',
    padding: 10,
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
