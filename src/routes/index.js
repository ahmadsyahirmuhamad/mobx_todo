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
import TodoListScreen from './../screens/TodoListScreen';


const UnauthorizedNav = StackNavigator({
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
});

const ProfileNav = DrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Setting: { screen: SettingScreen },
});

const TodoNav = StackNavigator({
  Todo: { screen: TodoScreen },
  TodoList: { screen: TodoListScreen },
});

const AuthorizedNav = TabNavigator({
  Home: { screen: ProfileNav },
  Todo: { screen: TodoNav },
});

export const createRootNavigator = (signedIn = false) => {
  const RootNav = StackNavigator(
    {
      Authorized: { screen: AuthorizedNav },
      Unauthorized: { screen: UnauthorizedNav },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: signedIn ? 'Authorized' : 'Unauthorized',
    },
  );

  return <RootNav />;
};


