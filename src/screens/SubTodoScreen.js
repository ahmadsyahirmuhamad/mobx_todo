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
import { createSubTodo, updateSubTodo } from './../actions/sub_todo_actions'
import { NavigationActions } from 'react-navigation'
import CButton from './components/buttons/Button'
import InputText from './components/textInputs/InputText'


export default class SubTodoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `SubTodo`,
    headerLeft:  <Button onPress={() => navigation.dispatch(NavigationActions.back())} title="Back" />
  });

  constructor(props) {
    super(props)
    this.state = {
      todo_id: '',
      id: '',
      title: '',
      description: '',
    }
  }

  componentWillMount() {
    const { params } = this.props.navigation.state
    this.setState({ 
      todo_id: params.todo_id,
      id: params.id,
      title: params.title,
    })
  }

  createSubTodo = () => {
    createSubTodo(this.state.todo_id, this.state.title)
      .then((response) => {
        if (response) {
          this.props.navigation.navigate('SubTodoList', {
            todo_id: this.state.todo_id,
          })
        } else {
          alert('error')
        }
      }).catch((err) => {
        alert(err)
      })
  }

  updateSubTodo = () => {
    updateSubTodo(this.state.id, this.state.title)
      .then((response) => {
        if (response) {
          this.props.navigation.navigate('SubTodoList', {
            todo_id: this.state.todo_id,
          })
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
        handleAction={() => this.updateSubTodo()}
      />
    } else {
      return <CButton
        title="Create"
        color="blue"
        handleAction={() => this.createSubTodo()}
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
