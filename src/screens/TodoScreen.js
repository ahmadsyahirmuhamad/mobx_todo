/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { createTodo } from './../actions/todo_actions'
import { NavigationActions } from 'react-navigation'
import CButton from './components/buttons/Button'
import InputText from './components/textInputs/InputText'


export default class TodoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Todo`,
    headerLeft:  <Button onPress={() => navigation.dispatch(NavigationActions.back())} title="Back" />
  });

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
    }
  }

  addTodo = () => {
    createTodo(this.state.title, this.state.description)
      .then((response) => {
        if (response) {
          this.props.navigation.navigate('TodoList', {})
        } else {
          alert('error')
        }
      }).catch((err) => {
        alert(err)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <InputText
          handleChangeText={(title) => this.setState({title})}
          value={this.state.title}
          placeholder="title"
          secureTextEntry={false}
          autoCapitalize="none"
        />

        <InputText
          handleChangeText={(description) => this.setState({description})}
          value={this.state.description}
          placeholder="description"
          secureTextEntry={false}
        />
        
        <CButton
          title="Create"
          color="blue"
          handleAction={() => this.addTodo()}
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
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
