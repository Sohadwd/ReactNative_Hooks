import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

// with using hooks `useState`

const App = () => {
  const [name, setName] = useState('Sohad');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChange={handleNameChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    width: 220,
    textAlign: 'center',
    borderRadius: 7,
    borderColor: '#005068'
  }
});

export default App;
