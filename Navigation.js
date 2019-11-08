import React from 'react';
import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  getActiveChildNavigationOptions,
} from 'react-navigation-stack';
import Login from './src/Login';
import Register from './src/Register';
import Homepage from './src/Homepage';
import Setting from './menu/Setting';
import Account from './menu/Setting/Account';
import Newtrack from './src/Newtrack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from 'react-navigation-tabs';

const bottomTabNavigator = createBottomTabNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: {
      title: 'Homepage',
      //tabBarIcon: () => <FontAwesome5 name="book-medical" size={24} color="#CDCCCE" />
    },
  },
  Newtrack: {
    screen: Newtrack,
    navigationOptions: {
      title: 'Nuovo percorso',
      // tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
    },
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      title: 'Impostazioni',
      // tabBarIcon: () => <FontAwesome5 name="heartbeat" size={24} color="#CDCCCE" />
    },
  },
});

bottomTabNavigator.navigationOptions = ({navigation}) => {
  const {routeName} = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  return {
    headerTitle,
  };
};
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Login,
    },
    Homepage: bottomTabNavigator,
    Account: Account,
  },
  {
    initialRouteName: 'Home',

    defaultNavigationOptions: {
      headerTintColor: '#ccc',
      headerStyle: {
        borderBottomWidth: 4,
        borderBottomColor: '#80ba27',
        backgroundColor: '#364054',
      },
      headerTitleStyle: {
        textAlign: 'center',
        flex: 1,
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
