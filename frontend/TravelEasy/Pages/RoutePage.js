/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View, ScrollView, Image, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { Alert, AppRegistry, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowUp, faArrowDown, faChevronLeft, faMapMarkerAlt, faEllipsisH, faShareSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import SvgUri from 'react-native-svg-uri';


// import { Button } from 'react-native';

import { Form, Grid, Col, Row, Card, CardItem, Container, Header, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class Route extends React.Component {
    constructor(props) {
        super(props);
        this.updateComments = this.updateComments.bind(this);
        this.state = {
            tags: ['Campus', 'Seattle', 'University', "Historic"],
            stops: [
                {
                    title: "Suzzallo Library",
                    price: "Free",
                    time: "30mins ~ 1hrs",
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
                },
                {
                    title: "Suzzallo Library",
                    price: "Free",
                    time: "30mins ~ 1hrs",
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
                },
                {
                    title: "Suzzallo Library",
                    price: "Free",
                    time: "30mins ~ 1hrs",
                    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
                }
            ],
            comments: [

            ]
        };
    }

    updateComments(newComment) {
        // this.setState({
        //   someVar: someValue
        // })

        this.setState(prevState => ({
            comments: [newComment, ...prevState.comments]
        }))
    }

    render() {
        return (
            <ScrollView>
                <RouteHeader></RouteHeader>
                <View style={{ backgroundColor: '#F3F7FF' }}>
                    <RouteIntro tags={this.state.tags}></RouteIntro>
                    <RouteDetail stops={this.state.stops}></RouteDetail>
                </View>
                <PostComment update={this.updateComments}></PostComment>
                {console.log(this.state.comments)}
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
                    <View style={styles.topLeftBottom}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <FontAwesomeIcon icon={faChevronLeft} style={{ color: 'black', marginRight: 5 }} />
                            <Text style={{
                                width: 77,
                                height: 23,
                                fontSize: 14,
                                fontWeight: "500",
                                fontStyle: "normal",
                                color: "#000000"
                            }}>EXPLORE</Text>
                        </View>
                    </View>
                    <View style={styles.topRightBottom}>
                        <FontAwesomeIcon icon={faEllipsisH} style={{ color: 'black' }} />
                    </View>
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
                                {/* <SvgUri width="21" height="21" source={require('../imgs/like.svg')} /> */}
                                <SvgUri width="21" height="21" source={require('../imgs/share.svg')} />
                                <Text style={{
                                    fontSize: 10,
                                    fontWeight: "900",
                                    fontStyle: "normal",
                                    color: "#ffffff",
                                    marginTop: 1
                                }} >SHARE</Text>
                            </View>
                            <View style={{ flexDirection: 'column', alignItems: 'center', marginLeft: 20 }}>
                                {/* <FontAwesomeIcon icon={faHeart} style={styles.coverIcon}></FontAwesomeIcon> */}
                                <SvgUri width="21" height="21" source={require('../imgs/heart.svg')} />
                                <Text style={{
                                    fontSize: 10,
                                    fontWeight: "900",
                                    fontStyle: "normal",
                                    color: "#ffffff",
                                    marginTop: 1
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
                        {this.props.tags.map((tag, i) => {
                            return (
                                <View style={styles.tag} key={i}>
                                    <Text style={styles.tagText} key={i}>{tag}</Text>
                                </View>)
                        })}

                    </View>
                </View>
            </View>
        );
    }
}

class RouteDetail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.stops);
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                {this.props.stops.map((stop, i) => {
                    return (
                        <StopCard stop={stop} key={i}></StopCard>
                    )
                })}
            </View>
        );
    }
}

class StopCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            icons: {
                right: require("../imgs/arrow-right.svg"),
                down: require("../imgs/arrow-down.svg")
            }
        }
        this._onPress = this._onPress.bind(this);
    }

    _renderDetail() {
        return (
            <View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={styles.descriptionText}>{this.props.stop.price}</Text>

                    <Image source={require('../imgs/time.png')} style={styles.iconImg} />
                    <Text style={styles.descriptionText}>{this.props.stop.time}</Text>
                </View>
                <Text style={[styles.descriptionText, { marginBottom: 10 }]}>{this.props.stop.desc}</Text>
            </View>
        )
    }

    _onPress() {
        this.setState((prevState) => ({
            isSelected: !prevState.isSelected
        }));
    }

    render() {
        let iconSource;
        if (this.state.isSelected) {
            iconSource = require("../imgs/arrow-down.svg");
        } else {
            iconSource = require("../imgs/arrow-right.svg");
        }
        return (
            <View style={{ width: '100%' }}>
                <View style={styles.card}>
                    <TouchableWithoutFeedback onPress={this._onPress}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-end'
                        }}>
                            <Text style={{
                                fontSize: 14,
                                fontWeight: "500",
                                fontStyle: "normal",
                                color: "#666666",
                                flex: 1
                            }}>{this.props.stop.title}</Text>
                            <SvgUri width="21" height="21" source={iconSource} />
                        </View>
                    </TouchableWithoutFeedback>
                    {this.state.isSelected && this._renderDetail()}
                </View>
            </View>
        );
    }
}

class RouteComments extends React.Component {
    render() {
        return (
            <View>

            </View>
        );
    }
}

class PostComment extends React.Component {

    // _onSubmitEdit() {
    //     // whatever you want to do on submit
    // }
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        if (this.state.text.length != 0) {
            this.textInput.clear();
            let updateComments = this.props.update;
            updateComments(this.state.text);
        }
    }

    render() {

        // let updateComments = this.props.update;
        // console.log(updateComments);

        return (
            <View style={{ marginTop: 10 }}>
                <Text style={{
                    marginLeft: 15,
                    fontSize: 14,
                    fontWeight: "500",
                    fontStyle: "normal",
                    color: "#666666"
                }}>Add A Comment</Text>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type here"
                        editable={true}
                        multiline={true}
                        maxLength={200}
                        onChangeText={(text) => this.setState({ text })}
                        ref={input => { this.textInput = input }}
                    />
                    <TouchableHighlight style={styles.commentSubmit} onPress={() => this._onPress()}>
                        <Text style={styles.commentSubmitText}>Submit</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        // paddingTop: 200
    },
    cover: {
        position: 'relative'
    },
    topLeftBottom: {
        position: 'absolute',
        top: 34,
        left: 15
    },
    topRightBottom: {
        position: 'absolute',
        top: 36,
        right: 15
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
        marginLeft: 15,
        marginRight: 10,
        marginTop: 10
    },
    description: {
        margin: 10,
        marginLeft: 15,
        marginRight: 15
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
    },
    card: {
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 2,
        shadowOpacity: 1,
        borderStyle: "solid",
        borderWidth: 0.3,
        borderColor: "#666666",
        padding: 10,
        marginBottom: 10
    },
    textInput: {
        height: 70,
        width: window.width - 30,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 0.3,
        borderColor: "#666666",
        padding: 10
    },
    commentSubmit: {
        width: 93,
        height: 27,
        backgroundColor: '#666666',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    commentSubmitText: {
        color: 'white',
        fontSize: 12,
        fontWeight: "400",
        fontStyle: "normal"
    }

})