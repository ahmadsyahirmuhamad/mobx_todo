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
} from 'react-native';
import { observer } from 'mobx-react/native'
import { userLogin } from './../actions/user_actions'
import userStore from './../stores/user_store'

import Button from './components/buttons/Button'
import InputText from './components/textInputs/InputText'

@observer
export default class LoginScreen extends Component<{}> {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  login() {
    userLogin(this.state.email, this.state.password)
    .then((response) => {
      alert(response)
    }).catch((error) => {
      alert(error)
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <InputText
          handleChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder="email"
          secureTextEntry={false}
          autoCapitalize="none"
        />

        <InputText
          handleChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder="password"
          secureTextEntry={true}
        />
        
        <Button
          title="Login"
          color="blue"
          handleAction={() => this.login(this.state)}
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
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
