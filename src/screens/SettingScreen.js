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

export default class SettingScreen extends Component<{}> {
  static navigationOptions = ({ navigation }) => ({
    title: `Setting`,
    headerLeft:  <Button onPress={() => navigation.navigate('DrawerOpen')} title="Open" />
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
            SettingScreen
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
