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
  FlatList,
  TouchableOpacity,
  Dimensions,
  Button,
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { fetchSubTodos } from './../actions/sub_todo_actions'
import subTodoStore from './../stores/sub_todo_store'
import CButton from './components/buttons/Button'
import SubTodoLists from './components/lists/SubTodoLists'


export default class SubTodoListScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `SubTodoList`,
    headerLeft:  <Button onPress={() => navigation.dispatch(NavigationActions.back())} title="Back" />
  });

  constructor(props) {
    super(props)
    this.state = {
        todo_id: '',
        items: [],
        error: false,
    }
  }

  componentWillMount() {
    this.query()
  }

  // fetch sub todos and set it to state
  query() {
    const { todo_id } = this.props.navigation.state.params
    this.setState({ todo_id })
    fetchSubTodos(todo_id)
      .then((response) => {
        if (response) {
          this.setState({ items: response, error: false })
        } else {
          this.setState({ error: true })
        }
      }).catch((error) => {
        alert(error)
      })
  }
  
  // navigate to new todo 
  _gotoNewSubTodo = () => {
    this.props.navigation.navigate('SubTodo', {
      action: 'CREATE',
      todo_id: this.state.todo_id
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.btnContainer}>
          <CButton
            title="Create SubTodo"
            color="blue"
            handleAction={() => this._gotoNewSubTodo()}
          />
        </View>
        <View style={styles.listContainer}>
          <SubTodoLists {...this.state} {...this.props}/>
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

