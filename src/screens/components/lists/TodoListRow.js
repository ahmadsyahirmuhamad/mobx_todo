/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class TodoListRow extends Component<{}> {
    constructor(props) {
        super(props)
    }

    render() {
        const { item, navigateTo } = this.props
        return (
            <View style={styles.listView}>
                <TouchableOpacity onPress={() => navigateTo()}>
                    <View style={styles.listRow} >
                        <Text>{item.node.title}</Text>
                        <Text>Click Me!</Text>
                        <Text>{item.node.description}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const { width, height, deviceWidth, deviceHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    listView: {
        width: width * 0.9,
        backgroundColor: 'yellow',
        padding: 10,
        margin: 5
    },
    listRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
  