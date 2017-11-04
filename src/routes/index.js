import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

// Unauthorized screens
import LoginScreen from './../screens/LoginScreen';
import RegisterScreen from './../screens/RegisterScreen';

// Authorized screens
import HomeScreen from './../screens/HomeScreen';
import ProfileScreen from './../screens/ProfileScreen';
import SettingScreen from './../screens/SettingScreen';
import TodoScreen from './../screens/TodoScreen';
import SubTodoScreen from './../screens/SubTodoScreen';
import TodoListScreen from './../screens/TodoListScreen';
import SubTodoListScreen from './../screens/SubTodoListScreen';


const UnauthorizedNav = StackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
},
{
  headerMode: 'none',
});

const DrawerNav = DrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Setting: { screen: SettingScreen },
});

const TodoNav = StackNavigator({
  TodoList: { screen: TodoListScreen },
  SubTodoList: { screen: SubTodoListScreen },
  Todo: { screen: TodoScreen },
  SubTodo: { screen: SubTodoScreen },
},
{
  headerMode: 'none',
});

const AuthorizedNav = TabNavigator({
  Home: { screen: DrawerNav },
  Todo: { screen: TodoNav },
});

export const createRootNavigator = (signedIn = false) => {
  const RootNav = StackNavigator(
    {
      Authorized: { screen: AuthorizedNav },
      Unauthorized: { screen: UnauthorizedNav },
    },
    {
      mode: 'modal',
      initialRouteName: signedIn ? 'Authorized' : 'Unauthorized',
    },
  );

  return <RootNav />;
};


