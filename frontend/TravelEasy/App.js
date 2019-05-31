/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';

// import { Text, View } from 'react-native';

import { Card, CardItem, Container, Header, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


// import { NativeRouter, Switch, Route } from 'react-router-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import SvgUri from 'react-native-svg-uri';

import { logger } from 'react-native-logger'

// IMPORT COMPONENTS: 
import BottomNav from './Components/BottomNav';
import HomePage from './Pages/HomePage';
import AddGuidePage from './Pages/AddGuidePage';
import LoginPage from './Pages/LoginPage';
import RoutePage from './Pages/RoutePage';
import ProfilePage from './Pages/ProfilePage';
import SignUpPage from './Pages/SignUpPage';
import Favorites from './Pages/FavoritesPage';
import Plans from './Pages/PlansPage';
import GuideItinerary from './Pages/GuideIninerary';


// import AppNav from './Components/createAppNavigator';


// if no bearerkey, then go to login page 
// login -> router -> home
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: 'HomePage',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <SvgUri width="28" height="28" fill={tintColor} source={require('./imgs/explore.svg')} />
        )
      },
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarLabel: 'Favorites',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <SvgUri width="25" height="25" fill={tintColor} source={require('./imgs/favorites.svg')} />
        )
      },
    },
    Plans: {
      screen: Plans,
      navigationOptions: {
        tabBarLabel: 'Plans',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <SvgUri width="25" height="25" fill={tintColor} source={require('./imgs/plans.svg')} />
        )
      },
    },
    Itinerary: {
      screen: GuideItinerary,
      navigationOptions: {
        tabBarLabel: 'Itinerary(after "Japan 5-28" trip is clicked',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <SvgUri width="25" height="25" fill={tintColor} source={require('./imgs/plans.svg')} />
        )
      },
    },
    AddGuide: {
      screen: AddGuidePage,
      navigationOptions: {
        tabBarLabel: 'Create',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <SvgUri width="25" height="25" fill={tintColor} source={require('./imgs/new.svg')} />
        )
      },
    },
    Profile: {
      screen: ProfilePage,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor, activeTintColor }) => (
          <SvgUri width="25" height="25" fill={tintColor} source={require('./imgs/profile.svg')} />
        )
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#F7B633',
      inactiveTintColor: '#022C43',
      
    }
  }
);

const AppNavigator = createStackNavigator({
  Login: LoginPage,
  SignUp: SignUpPage,
  BottomBar: TabNavigator,
  Route: RoutePage
},
{
  initialRouteName: 'BottomBar',
  headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

