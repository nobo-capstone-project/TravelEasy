/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { StyleSheet, TextInput } from 'react-native';
// import { Text, View } from 'react-native';
import { Button } from 'react-native';

import { CheckBox } from 'react-native-elements';


import { Grid, Col, Row, Card, CardItem, Container, Header, Content, Tab, Tabs, FooterTab, Footer, Icon, } from 'native-base';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';



////////////////////////////////////////////////////////////////////////////////////////////////////////
// Upon pressing the add guide button, it will add stop to database, and saves stopIDs for the guide: 
////////////////////////////////////////////////////////////////////////////////////////////////////////


export default class AddGuidePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            creatorID: 'COOKIEMONSTER11', password: '1234565', email: 'COOKIEMONSTER1@gmail.com', firstname: 'Rob',
            lastname: 'Kim', dob: '2019-04-26T14:34:00.913032-07:00', gender: 'M', locationCity: 'Seattle', locationState: 'WA', locationCountry: 'US',
            picture: '123'
        };

        // this.convertDateToIso = this.convertDateToIso.bind(this);
        this.dobIsoConvert = this.dobIsoConvert.bind(this);
    }



    dobIsoConvert(dateStr) {
        var utcDob = new Date(dateStr).toISOString()
        this.setState({ dob: utcDob }, () => { console.log(this.state.dob) });
    }

    render() {
        return (
            <Container style={styles.container}>
                {/* <View><Text>Hello</Text></View> */}
                {/* <View></View> */}

                <Text>ADD GUIDE PAGE</Text>

                {/* <Header hasTabs /> */}
                <Header>

                    <Tabs style={styles.tabs}>
                        <Tab heading="All">
                            {/* <Tab1 /> */}
                        </Tab>
                        <Tab heading="Trending">
                            {/* <Tab2 /> */}
                        </Tab>

                    </Tabs>

                </Header>

                <Grid>
                    <Row>
                        <Col><CardItem><Text>ADD GUIDE PAGES</Text></CardItem></Col><Col><CardItem><Text>hello</Text></CardItem></Col><Col><CardItem><Text>hello</Text></CardItem></Col>
                    </Row>
                    <Text>Guide Name</Text>
                    <TextInput
                        style={{ height: 25, borderColor: 'gray', borderWidth: 1, padding: 5, }}
                    />

                    <Text>Project Description </Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, }}
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text> Add Stops: </Text>

                    <Text>Stop Name</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, }}
                    />

                    <Text>Stop Address</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, }}
                    />

                    <Text>Stop Type</Text>
                    <CheckBox
                        title='Food (lunch, dinner)'
                    // checked={this.state.checked}
                    />
                    <CheckBox
                        title='Deserts (lunch, dinner)'
                    // checked={this.state.checked}
                    />
                    <CheckBox
                        title='Nature / Hiking'
                    // checked={this.state.checked}
                    />

                    <CheckBox
                        title='Urban Exploration'
                    // checked={this.state.checked}
                    />

                    <CheckBox
                        title='Shopping'
                    // checked={this.state.checked}
                    />

                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                    />

                    <Text>Stop Duration</Text>

                    <TextInput
                        multiline={true}
                        numberOfLines={4}
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, }}
                    />

                    <Button
                        // onPress={onPressLearnMore}
                        title="ADD STOP"
                        color="red"
                        accessibilityLabel="Learn more about this purple button"
                    />

                    <Button
                        // onPress={onPressLearnMore}
                        title="Submit guide"
                        color="red"
                        accessibilityLabel="Learn more about this purple button"
                    />

                    {/* // onChangeText={(text) => this.setState({ text })}
                    // value={this.state.text} */}

                </Grid>

                {/* <Card>

          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
          <CardItem><Text>hsdfas</Text></CardItem>
        </Card> */}

                <Content style={styles.guideContainer} ref={c => (this.component = c)}>
                    <Text style={{ margin: 20 }}>test</Text>

                </Content>




                {/* <Footer style={styles.footer}>
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
                </Footer> */}

            </Container >
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
