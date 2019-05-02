/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View, ScrollView, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { Alert, AppRegistry, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
// import { Text, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp, faArrowDown, faMapMarkerAlt, faShareSquare, faHeart } from '@fortawesome/free-solid-svg-icons';



import { Grid, Col, Row, Card, CardItem, Container, Header, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';
import { whileStatement } from '@babel/types';

// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const styles = StyleSheet.create({
    container: {
        // paddingTop: 200
    },
    cover: {
        position: 'relative'
    },
    coverHeader: {
        position: 'absolute',
        top: 143,
        left: 15
    },
    coverTextH1: {
        fontSize: 20,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#ffffff"
    },
    coverTextH2: {
        fontSize: 15,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#ffffff"
    },
    coverVote: {
        position: 'absolute',
        top: 205,
        left: 15,
        flex: 1,
        flexDirection: 'row'
    },
    cover_img: {
        flex: 1,
        height: 245,
        width: "100%",
        resizeMode: "cover"
    },
    coverIcon: {
        width: 21,
        height: 21,
        color: 'white',
        marginBottom: 2
    },
    userImg: {
        height: 70,
        width: 70,
        borderRadius: 70 / 2
    },
    button: {
        width: 93,
        height: 27,
        backgroundColor: '#F7B633',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 10,
        fontWeight: "500",
        // fontFamily: "Roboto"
    },
    bioText: {
        // fontFamily: "Roboto",
        fontSize: 12,
        fontWeight: "500",
        fontStyle: "normal",
        color: "#757575"
    },
    introView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5
    },
    description: {
        margin: 10
    },
    descriptionText: {
        // fontFamily: "Roboto",
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        color: "#6d6d6d"
    },
    iconImg: {
        width: 16,
        height: 16,
        opacity: 0.5,
        marginLeft: 20,
        marginRight: 5
    },
    tag: {
        marginRight: 10,
        paddingLeft: 5,
        paddingRight: 5,
        height: 22,
        borderRadius: 2,
        backgroundColor: "#5893d4",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tagText: {
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        color: "#ffffff"
    }
})

export default class Route extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['Campus', 'Seattle', 'University', "Historic"]
        };
    }

    render() {
        return (
            <ScrollView>
                <RouteHeader></RouteHeader>
                <View style={{ backgroundColor: '#F3F7FF' }}>
                    <RouteIntro tags={this.state.tags}></RouteIntro>
                </View>
            </ScrollView>
        );
    }
}

class RouteHeader extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.cover}>
                    <Image source={require('../imgs/cover.jpg')} style={styles.cover_img} />
                    <View style={styles.coverHeader}>
                        <Text style={styles.coverTextH1}>
                            University of Washington 1-Day Tour
                        </Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <FontAwesomeIcon style={{ color: 'white', marginRight: 5 }} icon={faMapMarkerAlt} />
                            <Text style={styles.coverTextH2}>
                                University of Washington
                            </Text>
                        </View>
                    </View>
                    <View style={styles.coverVote}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faArrowUp} style={{ color: 'white', marginRight: 5 }} />
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "900",
                                fontStyle: "normal",
                                color: "#ffffff"
                            }}>23,880</Text>
                            <FontAwesomeIcon icon={faArrowDown} style={{ color: 'white', marginLeft: 5 }} />
                        </View>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'center'
                            // alignItems: 'flex-end'
                        }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                <FontAwesomeIcon icon={faShareSquare} style={styles.coverIcon}></FontAwesomeIcon>
                                <Text style={{
                                    fontSize: 10,
                                    fontWeight: "900",
                                    fontStyle: "normal",
                                    color: "#ffffff"
                                }} >SHARE</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                                <FontAwesomeIcon icon={faHeart} style={styles.coverIcon}></FontAwesomeIcon>
                                <Text style={{
                                    fontSize: 10,
                                    fontWeight: "900",
                                    fontStyle: "normal",
                                    color: "#ffffff"
                                }} >LIKE</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </View >
        );
    }
}

class RouteIntro extends React.Component {
    constructor(props) {
        super(props);
    }

    _follow() {
        Alert.alert('You tapped the button!')
    }
    render() {
        console.log(this.props.tags);
        return (
            <View>
                <View style={styles.introView}>
                    <View>
                        <Image source={require('../imgs/user.png')} style={styles.userImg} />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', marginLeft: 5 }}>
                        <Text style={styles.bioText}>yourseattletourguide</Text>
                        <Text style={styles.bioText}>1 yr ago</Text>
                        <Text style={styles.bioText}>Diamond Guide</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={this._onPressButton}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>+ FOLLOW</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris
                </Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        <Text style={styles.descriptionText}>$$</Text>
                        <Image source={require('../imgs/time.png')} style={styles.iconImg} />
                        <Text style={styles.descriptionText}>1 ~ 3 hrs</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10 }}>
                        {this.props.tags.map((tag) => {
                            return (
                                <View style={styles.tag}>
                                    <Text style={styles.tagText} key={tag}>{tag}</Text>
                                </View>)
                        })}

                    </View>
                </View>
            </View>
        );
    }
}

class RouteDetail extends React.Component {
    render() {
        <View>

        </View>
    }
}

class RouteComment extends React.Component {
    render() {
        <View>

        </View>
    }
}
