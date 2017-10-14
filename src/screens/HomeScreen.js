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
import userStore from './../stores/user_store'

export default class HomeScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `Home`,
    headerLeft:  <Button onPress={() => navigation.navigate('DrawerOpen')} title="Open" />
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
            HomeScreen
            {userStore.token}
            {userStore.first_name}
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
