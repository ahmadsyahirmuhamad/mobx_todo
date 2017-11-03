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
import { createTodo, updateTodo } from './../actions/todo_actions'
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
      id: '',
      title: '',
      description: '',
    }
  }

  componentWillMount() {
    const { params } = this.props.navigation.state
    this.setState({
      id: params.id,
      title: params.title,
      description: params.description
    })
  }

  createTodo = () => {
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

  updateTodo = () => {
    updateTodo(this.state.id, this.state.title, this.state.description)
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

  renderButton() {
    const { params } = this.props.navigation.state
    if (params.action === 'UPDATE') {
      return <CButton
        title="Update"
        color="blue"
        handleAction={() => this.updateTodo()}
      />
    } else {
      return <CButton
        title="Create"
        color="blue"
        handleAction={() => this.createTodo()}
      />
    }
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
        { this.renderButton() }
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
