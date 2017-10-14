/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  ActivityIndicator
} from 'react-native';
import { createRootNavigator } from './routes/index.js';
import storage from './services/Storage'
import userStore from './stores/user_store'
import { getUser } from './actions/user_actions'

export default class App extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  
  componentWillMount() {
    storage.getItem('token')
      .then(async (token) => {
        userStore.token = token
        userStore.isLoggedIn = true
        await getUser()
        this.setState({ isLoading: false })
      }).catch((err) => {
        console.log('error')
      })
  }


  renderScreen() {
    return createRootNavigator(userStore.isLoggedIn);
  }

  renderActivityIndicator() {
    return (
      <ActivityIndicator
        animating={true}
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        color="black"
        size="large"
      />
    )
  }

  render() {
    return this.state.isLoading ? this.renderActivityIndicator() : this.renderScreen()
  }
}