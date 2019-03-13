import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Sohad'
    };

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.name}
          onChange={this.handleNameChange}
          style={styles.input}
        />
      </View>
    );
  }
}

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
