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
import TodoListRow from './components/lists/TodoListRow'
import subTodoStore from './../stores/sub_todo_store'


export default class SubTodoListScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `SubTodoList`,
    headerLeft:  <Button onPress={() => navigation.dispatch(NavigationActions.back())} title="Back" />
  });

  constructor(props) {
    super(props)
    this.state = {
        id: '',
        title: '',
        items: [],
        error: false,
    }
  }

  componentWillMount() {
    this.query()
  }

  // fetch sub todos and set it to state
  query() {
    const { id, title } = this.props.navigation.state.params
    this.setState({ id, title })
    fetchSubTodos(id)
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
        No Sub Todo's Yet
      </Text>        
    )
  }

  // render list screen
  renderList() {
    return (
        <View>
            <Text style={styles.text}> {this.state.title} </Text>        
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
    this.props.navigation.navigate('Todo', {id: item.node.id, title: item.node.title})
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
