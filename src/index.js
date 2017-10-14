/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createRootNavigator } from './routes/index.js';

export default class App extends Component<{}> {
  render() {
    return createRootNavigator(false);
  }
}