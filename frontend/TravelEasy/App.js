/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
// import { Text, View } from 'react-native';

import { Card, CardItem, Container, Header, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


import { NativeRouter, Switch, Route } from 'react-router-native';

import { Router, Scene } from 'react-native-router-flux';

// IMPORT COMPONENTS: 
import BottomNav from './Components/BottomNav';
import HomePage from './Pages/HomePage';
import AddGuidePage from './Pages/AddGuidePage';

import LoginPage from './Pages/LoginPage';


import RoutePage from './Pages/RoutePage';



import AppNav from './Components/createAppNavigator';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{title}</Text>
  );
}

export default class App extends React.Component {
  render() {

    // return (
    //   <Container>
    //     {/* <AddGuidePage></AddGuidePage> */}
    //     {/* <HomePage /> */}
    //     {/* <AppNav></AppNav> */}


    //     {/* <Login></Login> */}
    //     <RoutePage></RoutePage>

    return (
      <Router>
        <Scene key="root">
          <Scene
            key="tabbar"
            tabs
            tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          >
            <Scene key="home" title="home" icon={TabIcon}>
              <Scene
                key="HomePage"
                component={HomePage}
                title="HomePage"
                initial
              />
            </Scene>

            <Scene key="addGuide" title="addGuide" icon={TabIcon}>
              <Scene
                key="AddGuidePage"
                component={AddGuidePage}
                title="AddGuide"

              />
            </Scene>

            <Scene key="login" title="login" icon={TabIcon}>
              <Scene
                key="LoginPage"
                component={LoginPage}
                title="LoginGuide"

              />
            </Scene>
          </Scene>



          {/* <Scene
            key="LoginPage"
            component={LoginPage}
            title="LoginPage"
            initial
          /> */}

        </Scene>
      </Router>


      // <Container>
      //   {/* <AddGuidePage></AddGuidePage> */}
      //   <HomePage />
      //   {/* <AppNav></AppNav> */}

      //   {/* <Login></Login> */}
      // </Container>

    );
  }
}



const styles = StyleSheet.create({
  container: {
    // paddingTop: 200
  },
  footer: {
    position: 'absolute',
    bottom: 0
  },
  guideContainer: {
    backgroundColor: 'blue',
    height: 100,
    // width: 100,
    // position: 'absolute',
    // top: 100,
    // left: 0
  },
  tabs: {
    // marginTop: 0,
    backgroundColor: 'red',
    height: 50

  }
})
// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
