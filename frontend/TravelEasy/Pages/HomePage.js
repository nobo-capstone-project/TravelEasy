/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ImageBackground, Image, Platform, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp, faArrowDown, faChevronLeft, faMapMarkerAlt, faEllipsisH, faShareSquare, faHeart } from '@fortawesome/free-solid-svg-icons';


const Dimensions = require('Dimensions');

const window = Dimensions.get('window');
import {withNavigation} from 'react-navigation';

import BottomNav from "../Components/BottomNav";

// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import { Item, Grid, Col, Row, Card, CardItem, Container, Header, Input, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, Right, } from 'native-base';
import { Reducer } from 'react-native-router-flux';
import { logger } from 'react-native-logger';
import { faBold } from '@fortawesome/free-solid-svg-icons';
// import { console } from 'console';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

// import { skyline } from './imgs/singaSky.jpg';


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this._navigateTo = this._navigateTo.bind(this);
    }

    _navigateTo() {
        this.props.navigation.navigate('Route');
    }

    render() {
        // console.log('hello');
        console.log(this.props.navigation);

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

                <Tabs tabStyle={{ backgroundColor: '#FAD05A' }} locked={true}>

                    <Tab style={styles.tab} heading="All">

                        {/* --------------------------------------------------------------------*/}
                        {/* --------------------- CATEGORIES SECTION -----------------------*/}
                        {/* --------------------------------------------------------------------*/}
                        <Text style={styles.trendingText}>Trending Today</Text>
                        <View style={{ height: 90 }} >
                            <ScrollView horizontal style={styles.categContainer}  >
                                <TouchableHighlight style={styles.categView}>
                                    <Text style={styles.categName}>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>

                                <TouchableHighlight style={styles.categView} >
                                    <Text style={styles.categName}>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.categView}>
                                    <Text style={styles.categName}>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.categView}>
                                    <Text style={styles.categName}>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.categView}>
                                    <Text style={styles.categName}>Click here</Text>
                                    {/* <Image
                            style={styles.button}
                            source={require('./myButton.png')}
                        /> */}
                                </TouchableHighlight>
                            </ScrollView>
                        </View>

                        {/* --------------------------------------------------------------------*/}
                        {/* --------------------- GUIDE SECTION -----------------------*/}
                        {/* --------------------------------------------------------------------*/}

                        {/* <Text style={styles.centerText}>Popular Guides At The Moment: </Text> */}
                        <Content style={styles.guideContainer} ref={c => (this.component = c)}>
                            <View style={styles.dayGuide} >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.guideTitle} onPress={this._navigateTo}>Singapore Madness</Text>
                                    <Button success style={styles.addPlanButton}>
                                        <Text style={styles.addPlanText}>Add to Plans</Text>
                                    </Button>
                                </View>

                                <View><Text style={styles.salesPitch}>Sales Pitch</Text>
                                    <Text> "Singapore is cocktail of the best clubs, the best foods, and the best views in the world. Read more.." </Text></View>

                                {/* ------------------------------------------------ */}
                                {/* pictures of the stops in this day guide */}
                                {/* ------------------------------------------------ */}
                                <ScrollView horizontal style={styles.stopContainer}  >
                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Breakfast {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Hiking at Temple {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Lunch {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Singapore {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>
                                </ScrollView>

                                <View style={styles.guideActionsCont}>
                                    <View style={[styles.upvAndDownv, styles.guideAction]}>
                                        <FontAwesomeIcon icon={faArrowUp} style={{ color: 'black', marginRight: 5 }} />
                                        <Text style={{
                                            fontSize: 13,
                                            // fontWeight: "900",
                                            fontStyle: "normal",
                                            color: "black"
                                        }}>23,880</Text>
                                        <FontAwesomeIcon icon={faArrowDown} style={{ color: 'black', marginLeft: 5 }} />
                                    </View>

                                    <Button style={styles.guideAction}>
                                        <Text>Comment</Text>
                                    </Button>
                                    <Button style={styles.guideAction}>
                                        <Text>Read More</Text>
                                    </Button>
                                </View>
                            </View>

                            <View style={styles.dayGuide} >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.guideTitle}>Singapore Madness</Text>
                                    <Button success style={styles.addPlanButton}>
                                        <Text style={styles.addPlanText}>Add to Plans</Text>
                                    </Button>
                                </View>

                                <View><Text style={styles.salesPitch}>Sales Pitch</Text>
                                    <Text> "Singapore is cocktail of the best clubs, the best foods, and the best views in the world. Read more.." </Text></View>

                                {/* ------------------------------------------------ */}
                                {/* pictures of the stops in this day guide */}
                                {/* ------------------------------------------------ */}
                                <ScrollView horizontal style={styles.stopContainer}  >
                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Singapore {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Singapore {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Singapore {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Singapore {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>
                                </ScrollView>

                                <View style={styles.guideActionsCont}>
                                    <View style={[styles.upvAndDownv, styles.guideAction]}>
                                        <FontAwesomeIcon icon={faArrowUp} style={{ color: 'black', marginRight: 5 }} />
                                        <Text style={{
                                            fontSize: 13,
                                            // fontWeight: "900",
                                            fontStyle: "normal",
                                            color: "black"
                                        }}>23,880</Text>
                                        <FontAwesomeIcon icon={faArrowDown} style={{ color: 'black', marginLeft: 5 }} />
                                    </View>

                                    <Button style={styles.guideAction}>
                                        <Text>Comment</Text>
                                    </Button>
                                    <Button style={styles.guideAction}>
                                        <Text>Read More</Text>
                                    </Button>
                                </View>
                            </View>
                            <View style={styles.dayGuide} >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.guideTitle}>Singapore Madness</Text>
                                    <Button success style={styles.addPlanButton}>
                                        <Text style={styles.addPlanText}>Add to Plans</Text>
                                    </Button>
                                </View>

                                <View><Text style={styles.salesPitch}>Sales Pitch</Text>
                                    <Text> "Singapore is cocktail of the best clubs, the best foods, and the best views in the world. Read more.." </Text></View>

                                {/* ------------------------------------------------ */}
                                {/* pictures of the stops in this day guide */}
                                {/* ------------------------------------------------ */}
                                <ScrollView horizontal style={styles.stopContainer}  >
                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Singapore {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Singapore {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>

                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Singapore {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight style={styles.stopViews}>
                                        <View>
                                            <ImageBackground source={require('../imgs/singaSky.jpg')} style={{ width: '100%', height: '100%' }}>
                                                <Text style={styles.nameOfStop}>Singapore {this.state}</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableHighlight>
                                </ScrollView>

                                <View style={styles.guideActionsCont}>
                                    <View style={[styles.upvAndDownv, styles.guideAction]}>
                                        <FontAwesomeIcon icon={faArrowUp} style={{ color: 'black', marginRight: 5 }} />
                                        <Text style={{
                                            fontSize: 13,
                                            // fontWeight: "900",
                                            fontStyle: "normal",
                                            color: "black"
                                        }}>23,880</Text>
                                        <FontAwesomeIcon icon={faArrowDown} style={{ color: 'black', marginLeft: 5 }} />
                                    </View>

                                    <Button style={styles.guideAction}>
                                        <Text>Comment</Text>
                                    </Button>
                                    <Button style={styles.guideAction}>
                                        <Text>Read More</Text>
                                    </Button>
                                </View>
                            </View>



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

export default withNavigation(HomePage);

const styles = StyleSheet.create({
    // stopImg: {
    //     width: 30,
    //     height: 30
    // },
    // voteArrows: {
    //     height: 50
    // },
    guideAction: {
        width: '33%',
        height: 30,
        backgroundColor: '#f2f2f2'
    },
    guideActionsCont: {
        flexDirection: 'row'
    },
    upvAndDownv: {
        flexDirection: 'row'
    },
    salesPitch: {
        fontWeight: 'bold'
    },
    nameOfStop: {
        backgroundColor: 'rgba(229, 230, 232,.3)'
    },
    stopViews: {
        height: 70,
        width: "36%",
        backgroundColor: 'white',
        margin: 3,
        // padding: 3
    },
    guideContainer: {
        marginTop: 20,
        backgroundColor: '#F6F8FC',
        height: 100,
        shadowColor: '#000000',
    },
    dayGuide: {
        marginTop: 2,
        padding: 5,
        backgroundColor: '#FFFFFF',
        // height: 180,
        marginBottom: 10,
        width: "100%"
    },
    addPlanButton: {
        width: 120,
        height: 30,
        borderRadius: 15,
        marginRight: 0,
        backgroundColor: '#FAD05A',
        marginTop: 10,
    },
    addPlanText: {
        // marginLeft: 5
        textAlign: 'center',
        width: '100%'
    },
    guideTitle: {
        fontWeight: "bold",
        fontSize: 18,
        marginRight: "20%",
        marginTop: 10
    },

    trendingText: {
        textAlign: 'left',
        fontSize: 12,
        fontWeight: '500',
        paddingTop: 6,
        paddingBottom: 6,
        backgroundColor: "#FFF",
        marginTop: 6,
        paddingLeft: 16,
        color: '#666666'
    },
    categContainer: {
        backgroundColor: 'red',
        backgroundColor: 'white',
        
        height: 70,
        // margin: 10,
        paddingBottom: 100,
        width: "100%",
        shadowColor: '#000000',
        shadowOpacity: 1

    },
    categView: {
        height: 80,
        width: 136,
        height: 92,
        backgroundColor: '#FAD05A',
        marginBottom: 10,
        // marginTop: 10,
        marginLeft: 10,
        paddingBottom: 10

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
        backgroundColor: '#FAD05A'
    },
    searchBox: {
        backgroundColor: '#FFFFFF'
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
    },
    categName: {
        color: "white",
        fontWeight: "bold",
        paddingTop: 65,
        paddingLeft: 10
    }
})