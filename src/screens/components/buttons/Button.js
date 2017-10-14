/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class Button extends Component<{}> {
    constructor(props) {
        super(props)

    }

    render() {
        const { title, color, handleAction } = this.props
        return (
            <TouchableOpacity
                style={[styles.buttonStyle, { backgroundColor: color }]}
                onPress={handleAction} >
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </TouchableOpacity>
        )
    }
}

const { width, height, deviceWidth, deviceHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    buttonStyle: {
        padding: 10,
        borderRadius: 4,
        width: width * 0.6,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 20
    }
});
  