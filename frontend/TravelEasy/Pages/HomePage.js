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

import BottomNav from "../Components/BottomNav";

// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import { Item, Grid, Col, Row, Card, CardItem, Container, Header, Input, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';




export default class App extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

                {/* <View><Text>Hello</Text></View> */}
                {/* <View></View> */}

                <Text>TravelEasy</Text>

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
                        <Col><CardItem><Text>hello</Text></CardItem></Col><Col><CardItem><Text>hello</Text></CardItem></Col><Col><CardItem><Text>hello</Text></CardItem></Col>
                    </Row>
                </Grid>


                <Content style={styles.guideContainer} ref={c => (this.component = c)}>
                    <Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text><Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text>
                    <Text style={{ margin: 20 }}>test</Text>
                </Content>




                <BottomNav></BottomNav>

            </Container >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // paddingTop: 200
        margin: 0,
        padding: 0
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