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
