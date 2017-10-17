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
import { observer } from 'mobx-react/native'
import { fetchTodos } from './../actions/todo_actions'
import todoStore from './../stores/todo_store'
import TodoListRow from './components/lists/TodoListRow'

@observer
export default class TodoListScreen extends Component<{}> {
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
          this.setState({ items: response, error: false })
        } else {
          this.setState({ error: true })
        }
      }).catch((error) => {
        alert(error)
      })
  }

  // render screen
  renderScreen() {
    return this.state.items.length > 0 ? this.renderList() : this.renderNoMessage()
  }

  // render no message if data is empty
  renderNoMessage() {
    return (
      <Text style={styles.text}>
        No Todo's Yet
      </Text>        
    )
  }

  // render list screen
  renderList() {
    return (
      <View>
        <FlatList
          data={this.state.items}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => this._renderItem(item)}
        />
      </View>
    )
  }
  
  // unique key for row's
  _keyExtractor = (item, index) => item.node.id;
  
  // render each row
  _renderItem = (item) => {
    return(
      <TodoListRow
        item={item}
        navigateTo={() => this._gotoTodo(item)}
      />
    )
  }

  // render todo detail page
  _gotoTodo = (item) => {
    this.props.navigation.navigate('SubTodoList', {id: item.node.id, title: item.node.title})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const { width, height, deviceWidth, deviceHeight } = Dimensions.get('window');
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
