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
// import { Text, View } from 'react-native';

import BottomNav from "../Components/BottomNav";

// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import { DatePicker, Item, Grid, Col, Row, Card, CardItem, Container, Header, Input, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';

import { Form } from 'native-base';

import { AsyncStorage } from 'react-native';
import { conditionalExpression } from '@babel/types';

// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
// session storage vs local storage

export default class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'COOKIEMONSTER11', password: '1234565', email: 'COOKIEMONSTER1@gmail.com', firstname: 'Rob',
            lastname: 'Kim', dob: '2019-04-26T14:34:00.913032-07:00', gender: 'M', locationCity: 'Seattle', locationState: 'WA', locationCountry: 'US',
            picture: '123'
        };

        // this.signUpUser = this.signUpUser.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
        // this.convertDateToIso = this.convertDateToIso.bind(this);
        this.dobIsoConvert = this.dobIsoConvert.bind(this);
    }



    dobIsoConvert(dateStr) {
        var utcDob = new Date(dateStr).toISOString()
        this.setState({ dob: utcDob }, () => { console.log(this.state.dob) });
    }

    signUpUser() {



        this.dobIsoConvert(this.state.dob);

        console.log(this.state);


        fetch("https://gateway-ldw2m5nesa-uc.a.run.app/user/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({
            //     "username": "COOKIEMONSTER1223211112",
            //     "password": "123456561111",
            //     "email": "COOKIEMONSTER1221321@gmail.com",
            //     "firstname": "cookie",
            //     "lastname": "monster",
            //     "dob": "2019-04-26T14:34:00.913032-07:00",
            //     "gender": "M",
            //     "locationCity": "LA",
            //     "locationState": "WA",
            //     "locationCountry": "US",
            //     "picture": "123"
            // })
            body: JSON.stringify(this.state)

        })
            .catch(err => { console.log(err) })


            .then(res => {
                console.log("if you get nsvalue error, then..");
                console.log("User name and Email is prob not unique");

                console.log("what2");
                // if (!res.ok) {
                //     throw Error(res.statusText + " " + res.status);
                // }
                console.log(res);
                console.log(res.headers.get("Authorization"));

                // AsyncStorage.setItem('bearerKey', res.headers.get("Authorization"));


                _storeData = async () => {
                    try {
                        await AsyncStorage.setItem('bearerKey', res.headers.get("Authorization"));
                    } catch (error) {
                        console.log(error);
                        // Error saving data
                    }
                };

                _retrieveData = async () => {
                    try {
                        const value = await AsyncStorage.getItem('bearerKey');
                        if (value !== null) {
                            // We have data!!
                            console.log(value);
                        }
                    } catch (error) {
                        // Error retrieving data
                    }
                };

                console.log(_storeData);
                console.log(_retrieveData);

                const bearerProm = AsyncStorage.getItem('bearerKey');

                bearerProm.then(function (value) {
                    console.log(value);
                });


                console.log(value);
                // AsyncStorage.setItem('', 'I like to save it.');
            }
            )
    };

    componentDidMount() {
        console.log("WHOA");
    }

    render() {
        console.log(this.state);

        function printHello() {
            console.log("hello");
            // logger.log("hello");
        }
        return (
            <Container style={styles.container}>
                <Header>
                    <Text>TravelEasy</Text>
                </Header>

                <Text>Sign Up</Text>
                <DatePicker
                    defaultDate={new Date(2018, 4, 4)}
                    minimumDate={new Date(2018, 1, 1)}
                    maximumDate={new Date(2018, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                />

                <Form>
                    <Item>
                        <Input style={styles.signUpFields} placeholder="First Name" onChangeText={(data) => this.setState({ firstname: data })} />
                    </Item>
                    <Item>
                        <Input style={styles.signUpFields} placeholder="Last Name" onChangeText={(data) => this.setState({ lastname: data })} />
                    </Item>
                    <Item>
                        <Input style={styles.signUpFields} placeholder="DOB" onChangeText={(data) => this.setState({ dob: data })} />
                    </Item>
                    <Item>
                        <Input style={styles.signUpFields} placeholder="Username" onChangeText={(data) => this.setState({ username: data })} />
                    </Item>
                    <Item>
                        <Input style={styles.signUpFields} placeholder="Email" onChangeText={(data) => this.setState({ email: data })} />
                    </Item>
                    <Item>
                        <Input style={styles.signUpFields} placeholder="Password" onChangeText={(data) => this.setState({ password: data })} />
                    </Item>
                    <Item last>
                        <Input style={styles.signUpFields} placeholder="Confirm Password" onChangeText={(data) => this.setState({ password: data })} />
                    </Item>
                    <Item last>
                        <Input style={styles.signUpFields} placeholder="Gender(M or F)" onChangeText={(data) => this.setState({ gender: data })} />
                    </Item>
                    <Item last>
                        <Input style={styles.signUpFields} placeholder="Location City" onChangeText={(data) => this.setState({ locationCity: data })} />
                    </Item>

                    <Item last>
                        <Input style={styles.signUpFields} placeholder="Location State" onChangeText={(data) => this.setState({ locationState: data })} />
                    </Item>

                    <Item last>
                        <Input style={styles.signUpFields} placeholder="Location Country" onChangeText={(data) => this.setState({ locationCountry: data })} />
                    </Item>

                    <Item last>
                        <Input style={styles.signUpFields} placeholder="Picture" onChangeText={(data) => this.setState({ locationCountry: data })} />
                    </Item>

                </Form>

                <Button onPress={this.signUpUser} title="Solid Button"><Text>HELLO</Text></Button>
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
    signUpFields: {
        height: 25,
    }
})