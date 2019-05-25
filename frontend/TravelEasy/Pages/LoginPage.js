/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
// import { Text, View } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import SvgUri from 'react-native-svg-uri';

// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import { Item, Grid, Col, Row, Card, CardItem, Container, Header, Input, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';

import { Form } from 'native-base';

// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';




export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        if (this.state.email.length != 0 & this.state.password.length != 0) {

        }
    }

    render() {
        return (
            // <Container style={styles.container}>


            //     {/* <View><Text>Hello</Text></View> */}
            //     {/* <View></View> */}

            //     <Header>

            //         <Text>TravelEasy</Text>

            //     </Header>

            //     <Text>Login</Text>




            //     <Form>
            //         <Item>
            //             <Input placeholder="Username" />
            //         </Item>
            //         <Item last>
            //             <Input placeholder="Password" />
            //         </Item>
            //     </Form>

            //     <Button title="Solid Button"><Text>HELLO</Text></Button>

            // </Container >
            <View style={styles.container}>
                <Text style={styles.header}>TERN</Text>
                <View>
                    <SvgUri width="150" height="150" source={require('../imgs/logo_yellownobackground.svg')} />
                </View>
                <View style={styles.textView}>
                    <FontAwesomeIcon icon={faUser} style={{ color: '#828282' }} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        editable={true}
                        maxLength={200}
                        onChangeText={(email) => this.setState({
                            email: email
                        })}
                    />
                </View>


                <View style={styles.textView}>
                    <FontAwesomeIcon icon={faKey} style={{ color: '#828282' }} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Passward"
                        editable={true}
                        password={true}
                        secureTextEntry={true}
                        maxLength={20}
                        onChangeText={(password) => this.setState({
                            password: password
                        })}
                    />
                </View>

                <TouchableHighlight style={styles.button} onPress={() => this._onPress()}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: "500",
                        fontStyle: "normal",
                        letterSpacing: 0,
                        color: "#333333"
                    }}>Login</Text>
                </TouchableHighlight>
                <Text style={styles.bottomText}>Don't have account? Sign Up</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        // paddingTop: 200
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    header: {
        marginTop: 150,
        fontSize: 56,
        fontWeight: "bold",
        fontStyle: "normal",
        // lineHeight: 50.6,
        letterSpacing: 10.8,
        color: "#f7b633"
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#f7b633',
        borderBottomWidth: 0.5,
        borderStyle: "solid"
    },
    textInput: {
        paddingLeft: 10,
        height: 50,
        width: '60%',
        fontSize: 14,
        fontWeight: "normal",
        fontStyle: "normal",
        letterSpacing: 0,
    },
    button: {
        marginTop: 50,
        width: '65%',
        height: 50,
        borderRadius: 50,
        backgroundColor: "#fecd00",
        shadowColor: "rgba(109, 109, 109, 0.24)",
        shadowOffset: {
            width: 0,
            height: 8
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomText: {
        marginTop: 25,
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        letterSpacing: 0,
        color: "#828282"
    }


})