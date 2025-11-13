import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName] = useState<string>("");

  const [todoList, setTodoList] = useState([
    {id: 1, title: 'learn react'},
    {id: 2, title: 'learn react native'},
    {id: 3, title: 'build an app'},
    {id: 4, title: 'deploy the app'},
    {id: 5, title: 'profit!'},
    {id: 6, title: 'learn more'},
    {id: 7, title: 'repeat'},
    {id: 8, title: 'enjoy'},
    {id: 9, title: 'have fun'},
    {id: 10, title: 'stay healthy'},
  ])

  return (
    <View style={styles.container}>
        <TextInput
          value={name}
          onChangeText={e => setName(e)}
          autoCapitalize='none'
          autoCorrect={false}
          // keyboardType='numeric' 
          // multiline
          style={styles.textInput} />

        <Button 
        title='Submit' 
        onPress={() => alert('tap me!!!!!!!!!!!!')}
        />

        <ScrollView style={{borderColor: 'black', borderWidth: 1, marginTop: 20, padding: 10}}>
          {todoList.map(todo => (
            <Text style={styles.todo} key = {todo.id}>{todo.title}</Text>
          ))}
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: 'red'
  },
  todo:{
    fontSize: 30,
    backgroundColor: 'lightgrey',
    marginTop: 10,
    padding: 15,
    textAlign: 'center',
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
    paddingHorizontal: 20,
    marginTop: 50,
  },
});
