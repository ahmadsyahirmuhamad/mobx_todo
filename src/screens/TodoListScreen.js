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
  Dimensions,
  Button,
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { observer } from 'mobx-react/native'
import { fetchTodos } from './../actions/todo_actions'
import todoStore from './../stores/todo_store'
import CButton from './components/buttons/Button'
import TodoLists from './components/lists/TodoLists'

@observer
export default class TodoListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `TodoList`,
    headerLeft:  <Button onPress={() => navigation.navigate('DrawerOpen')} title="Open" />
  });

  constructor(props) {
    super(props)
    this.state = {
      error: false,
      items: []
    }
  }

  componentWillMount() {
    this.query()
  }

  // fetch todos and set it to state
  query() {
    fetchTodos()
      .then((response) => {
        if (response) {
          const todos = todoStore.todosCollection
          this.setState({ 
            items: todos,
            error: false
          })
        } else {
          this.setState({ error: true })
        }
      }).catch((error) => {
        alert(error)
      })
  }

  // navigate to new todo 
  _gotoNewTodo = () => {
    this.props.navigation.navigate('Todo', {action: 'CREATE'})
  }
  
  render() {    
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <CButton
            title="Create Todo"
            color="blue"
            handleAction={() => this._gotoNewTodo()}
          />
        </View>
        <View style={styles.listContainer}>
          <TodoLists {...this.state} {...this.props} />
        </View>
      </View>
    );
  }
}

const { width, height, deviceWidth, deviceHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: width * 1.0
  },
  btnContainer: {
    alignItems: 'flex-end',
    marginTop: 5,
    padding: 5,
  },
  listContainer: {
    alignItems: 'center',
  },
});
