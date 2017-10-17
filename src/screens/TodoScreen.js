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
import { NavigationActions } from 'react-navigation'


export default class TodoScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `Todo`,
    headerLeft:  <Button onPress={() => navigation.dispatch(NavigationActions.back())} title="Back" />
  });

  constructor(props) {
    super(props)
    this.state = {
      id: '',
      title: ''
    }
  }

  componentWillMount() {
    this.query()
  }

  query() {
    const { id, title } = this.props.navigation.state.params
    // fetch subtodolist based on id
    // store to setstate
    this.setState({ id, title })
  }

  // render flatlist of subtodo

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
            TodoScreen
            { this.state.title }
        </Text>
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
