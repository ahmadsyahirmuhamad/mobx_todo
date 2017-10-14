/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Dimensions
} from 'react-native';

export default class InputText extends Component<{}> {
    constructor(props) {
        super(props)
    }

    handleChangeText(value) {
        this.props.handleChangeText(value)
    }

    render() {
        const { value, placeholder, secureTextEntry, autoCapitalize } = this.props
        return (
            <TextInput
                style={styles.textInputStyle}
                onChangeText={(value) => this.handleChangeText(value)}
                value={value}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
            />
        )
    }
}

const { width, height, deviceWidth, deviceHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    textInputStyle: {
        borderColor: 'gray',
        borderWidth: 1,
        width: width * 0.6,
        padding: 10,
        margin: 5,
        borderRadius: 4,
    },
});
  