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
import SubTodoLists from './components/lists/SubTodoLists'


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

  render() {
    return (
      <View style={styles.container}>
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
  listContainer: {
    alignItems: 'center',
  },
});

