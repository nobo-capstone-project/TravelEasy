/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, Platform, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';




const Dimensions = require('Dimensions');

const window = Dimensions.get('window');
// import { Text, View } from 'react-native';

import BottomNav from "../Components/BottomNav";

// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import { Item, Grid, Col, Row, Card, CardItem, Container, Header, Input, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, Right, } from 'native-base';
import { Reducer } from 'react-native-router-flux';
import { logger } from 'react-native-logger';
// import { console } from 'console';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

// import { skyline } from './imgs/singaSky.jpg';


export default class HomePage extends React.Component {

    render() {

        // console.log('hello');


        return (
            <Container style={styles.homeSearch}>
                <Header searchBar rounded style={styles.homeSearch}>
                    <Item style={styles.searchBox}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        {/* <Icon name="ios-people" /> */}
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

                {/* <Header hasTabs /> */}

                {/* <View style={styles.tabHeader}> */}

                <Tabs tabStyle={{ backgroundColor: 'green' }} >

                    <Tab style={styles.tab} heading="All">
                        {/* <Tab1 /> */}

                        <Text style={styles.centerText}>Categories:</Text>


                        <View style={{ height: 120 }} >
                            <ScrollView horizontal style={styles.categContainer}  >
                                <TouchableHighlight style={styles.categView}>
                                    <Text>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>

                                <TouchableHighlight style={styles.categView} >
                                    <Text>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.categView}>
                                    <Text>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.categView}>
                                    <Text>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.categView}>
                                    <Text>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>
                            </ScrollView>
                        </View>



                        {/* <ScrollView>
                        
                </ScrollView> */}



                        <Text>Guide Feed: </Text>
                        <Content style={styles.guideContainer} ref={c => (this.component = c)}>
                            <View style={styles.dayGuide} >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ width: 230 }}>UW 1 Day Tour</Text>
                                    <Button success style={{ width: 130 }}>
                                        <Text>Add to Planned Trips</Text>
                                    </Button>
                                </View>

                                <ScrollView horizontal style={styles.categContainer}  >
                                    <TouchableHighlight style={styles.categView}>
                                        <Text>Picture of Location</Text>
                                        {/* <Image source={require('../imgs/singaSky.jpg')} style={styles.iconImg} /> */}
                                        {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.categView}>
                                        <Text>Picture of Location</Text>
                                        {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.categView}>
                                        <Text>Picture of Location</Text>
                                        {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.categView}>
                                        <Text>Picture of Location</Text>
                                        {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.categView}>
                                        <Text>Picture of Location</Text>
                                        {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                    </TouchableHighlight>


                                </ScrollView>

                                <View>

                                </View>
                            </View>
                            {/* <View style={styles.dayGuide} ></View>
                            <View style={styles.dayGuide} ></View>
                            <View style={styles.dayGuide} ></View>
                            <View style={styles.dayGuide} ></View> */}

                        </Content>

                    </Tab>
                    <Tab style={styles.tab} heading="Nearby">
                        {/* <Tab2 /> */}
                    </Tab>
                    <Tab style={styles.tab} heading="Following">
                        {/* <Tab2 /> */}


                    </Tab>
                </Tabs>

            </Container >
        );
    }
}
const styles = StyleSheet.create({


    dayGuide: {
        backgroundColor: '#FFFFFF',
        height: 180,
        marginBottom: 10,
        width: "100%"
    },
    centerText: {
        textAlign: 'center'
    },
    categContainer: {
        backgroundColor: 'red',
        backgroundColor: 'black',
        height: 50,
        margin: 0,
        padding: 0,
        // flex: 1,
        // flexDirection: 'row'
        width: "100%"

    },
    categView: {
        height: 100,
        width: "32%",
        backgroundColor: 'white',
        margin: 3

        // flex: .33,
        // // flexDirection: 'row',
        // marginRight: 7,
        // height: 75,
        // backgroundColor: 'red'
    },

    tab: {
        backgroundColor: '#F6F8FC'
    },
    homeSearch: {
        backgroundColor: '#F6B633'
    },
    searchBox: {
        backgroundColor: '#F1E3A7'
    },

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
        height: 10,
        margin: 0,
        padding: 0

    },
    categoryButton: {
        backgroundColor: 'red'
    },
    tabHeader: {
        height: '515%',
        backgroundColor: 'red'
    }
})