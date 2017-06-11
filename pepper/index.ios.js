/**
 * Ask Pepper 🌶
 * https://github.com/justinpotts/askpepper
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight,
  Alert
} from 'react-native';

export default class pepper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>
          Hi, I'm Pepper! Tell me about what you're looking for.
        </Text>
        <TextInput
           style={styles.input}
           placeholder={"Type something..."}
           autoCorrect={true}
           multiline={true}
           returnKeyType="done"
           blurOnSubmit={true}
           value={this.state.query}
           onChangeText={query => this.setState({query})}
         />

         <TouchableHighlight
         onPress={() => this._submitForm()}
         underlayColor='#FFFFFF'
         >
          <View style={styles.button}>
            <Text style={styles.buttonText}>search</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  _submitForm() {
    const { query } = this.state
    fetch("https://askpepper-api.url", {method: "GET"})
        .then((response) => response.json())
        .then((responseData) => {
            // Do something with responseData
        })
        .done();
  };
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  prompt: {
    marginTop:50,
    marginLeft:30,
    marginRight:30,
    fontSize:24,
    color:'#555555',
    fontWeight:'bold',
  },
  button: {
    bottom:0,
    paddingTop:12,
    paddingBottom:12,
    marginBottom:40,
    marginLeft:35,
    marginRight:35,
    backgroundColor:'#FF7A7E',
    overflow:'hidden',
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center',
    height:50,
  },
  buttonText: {
    fontSize:18,
    fontWeight:'bold',
    color:'#FFFFFF'
  },
  input: {
    marginTop:15,
    marginBottom:15,
    marginLeft:30,
    marginRight:30,
    height: 470,
    fontSize:20,
    color:'#888888'
  }
});

AppRegistry.registerComponent('pepper', () => pepper);
