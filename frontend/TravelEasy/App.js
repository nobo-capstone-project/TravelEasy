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

export default class App extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        {/* <View><Text>Hello</Text></View> */}
        {/* <View></View> */}
        <Text> Travel</Text>

        <Header hasTabs />

        <Tabs style={styles.tabs}>
          <Tab heading="All">
            {/* <Tab1 /> */}
          </Tab>
          <Tab heading="Trending">
            {/* <Tab2 /> */}
          </Tab>

        </Tabs>

        <Card>

          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
        </Card>

        <Content style={styles.guideContainer} ref={c => (this.component = c)}>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text><Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
          <Text style={{ margin: 20 }}>test</Text>
        </Content>




        <Footer style={styles.footer}>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>Explore</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Favorites</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Trips</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Add</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>User</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container >
    );
  }
}

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
