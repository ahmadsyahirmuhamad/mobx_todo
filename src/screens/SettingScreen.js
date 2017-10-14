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
import ButtonElement from './components/buttons/Button'

import { userLogout } from './../actions/user_actions'

export default class SettingScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `Setting`,
    headerLeft:  <Button onPress={() => navigation.navigate('DrawerOpen')} title="Open" />
  });

  logout() {
    userLogout()
      .then((response) => {
        alert('safely logout')
      }).catch((err) => {
        alert('error')
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <ButtonElement
          title="Logout"
          color="red"
          handleAction={() => this.logout()}
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
});
