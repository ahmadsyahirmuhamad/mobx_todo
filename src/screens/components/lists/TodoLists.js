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
import { deleteTodo } from './../../../actions/todo_actions'

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
                renderItem={({item, index}) => this._renderItem(item, index)}
            />
        </View>
        )
    }

    // unique key for row's
    _keyExtractor = (item, index) => item.node.id;
    
    // render each row
    _renderItem = (item, index) => {
        return(
            <View style={styles.listView}>
                <View style={styles.containerList} >
                    <View style={styles.listRowDetail} >
                        <Text>{item.node.title} Index{index}</Text>
                    </View>
                    <View style={styles.listRowAction} >
                        <TouchableOpacity onPress={() => this._deleteTodo(item, index)}>
                            <Text>DELETE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._updateTodo(item)}>
                            <Text>UPDATE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._gotoSubTodo(item)}>
                            <Text>LIST</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    // render todo detail page
    _gotoSubTodo = (item) => {
        this.props.navigation.navigate('SubTodoList',
            {
                todo_id: item.node.id
            }
        )
    }
    _updateTodo = (item) => {
        this.props.navigation.navigate('Todo', {
            action: 'UPDATE',
            id: item.node.id,
            title: item.node.title,
            description: item.node.description
        })
    }
    // delete todo
    _deleteTodo = async (item, index) => {
        const response = await deleteTodo(item.node.id)
        if (response) {
            // // todo find ways to remove item by index
            this.props.navigation.navigate('TodoList', {}) // temp solution
        }
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
    listRowDetail: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'pink',
        padding: 30,
        margin: 5
    },
    listRowAction: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'yellow',
        padding: 30,
        margin: 5
    },
    containerList: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
  