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
  FlatList,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class TodoLists extends Component {
    constructor(props) {
        super(props)
    }

    // render screen
    renderScreen() {
        return this.props.items.length > 0 ? this.renderList() : this.renderNoMessage()
    }

    // render no message if data is empty
    renderNoMessage() {
        return (
        <Text style={styles.text}>
            No Todo's Yet
        </Text>        
        )
    }

    // render list screen
    renderList() {
        return (
        <View>
            <FlatList
                data={this.props.items}
                keyExtractor={this._keyExtractor}
                renderItem={({item}) => this._renderItem(item)}
            />
        </View>
        )
    }

    // unique key for row's
    _keyExtractor = (item, index) => item.node.id;
    
    // render each row
    _renderItem = (item) => {
        return(
            <View style={styles.listView}>
                <TouchableOpacity onPress={() => this._gotoTodo(item)}>
                    <View style={styles.listRow} >
                        <Text>{item.node.title}</Text>
                        <Text>Click Me!</Text>
                        <Text>{item.node.description}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    // render todo detail page
    _gotoTodo = (item) => {
        this.props.navigation.navigate('SubTodoList',
            {
                id: item.node.id,
                title: item.node.title,
            }
        )
    }

    render() {
        return (
            <View style={styles.listView}>
                {this.renderScreen()}
            </View>
        )
    }
}

const { width, height, deviceWidth, deviceHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
    listView: {
        width: width * 0.9,
    },
    listRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
        padding: 10,
        margin: 5
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
  