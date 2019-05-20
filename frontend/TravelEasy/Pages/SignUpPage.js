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
    convertDateToIso() {
        var dobString = this.state.dob;
        var dobString = '02/21/1997';
        var utcDob = new Date(dobString).toISOString()
        this.setState({ dob: utcDob }, () => { console.log(this.state.dob) });
        console.log("utc format" + utcDob);
        // console.log("whatt 32");
        console.log(this.state.dob);
    }

    signUpUser(signUpObj) {
        // let testJson = JSON.stringify({
        //     "username": "COOKIEMONSTER1223211112111",
        //     "password": "123456561111",
        //     "email": "COOKIEMONSTER1221322111@gmail.com",
        //     "firstname": "cookie",
        //     "lastname": "monster",
        //     "dob": "2019-04-26T14:34:00.913032-07:00",
        //     "gender": "M",
        //     "locationCity": "LA",
        //     "locationState": "WA",
        //     "locationCountry": "US",
        //     "picture": "123"
        // })

        // console.log("THIS IS THE TEST JSON" + testJson);
        // console.log("THIS IS STRINGIFIGED STATE" + JSON.stringify(this.state));
        // console.log("THIS IS THE STATE: " + this.state);


        this.convertDateToIso();

        console.log(this.state.dob);


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

                // try {
                //     AsyncStorage.setItem("authKey", res.headers.get("Authorization"));
                // }
                // catch (err) {
                //     console.log(err);
                //     console.log("User name and Email is prob not unique");
                // }
            }
            )



        //     Console.log("whats not working?");

        //     const test = AsyncStorage.getItem('authKey');

        //     test.then(function (result) {
        //         console.log(result);
        //     });
        // })

    };


    //1997-02-21T08:00:00.000Z

    constructor(props) {
        super(props);

        this.state = {
            username: 'COOKIEMONSTER11', password: '1234565', email: 'COOKIEMONSTER1@gmail.com', firstname: 'Rob',
            lastname: 'Kim', dob: '2019-04-26T14:34:00.913032-07:00', gender: 'M', locationCity: 'Seattle', locationState: 'WA', locationCountry: 'US',
            picture: '123'
        };

        // this.signUpUser = this.signUpUser.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
        this.convertDateToIso = this.convertDateToIso.bind(this);
    }


    componentDidMount() {
        // signUpUser();
        console.log("WHOA");
        // logger.log("WHOA");
        // console.log(this.state.dob);

        // console.log("dob should have been updated " + this.state.dob);
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
                {/* 
                <TouchableHighlight>
                    <View>
                        <Image source={require('../imgs/singaSky.jpg')} style={styles.stopImg} />
                    </View>
                </TouchableHighlight> */}


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
                        <Input placeholder="First Name" onChangeText={(data) => this.setState({ firstname: data })} />
                    </Item>
                    <Item>
                        <Input placeholder="Last Name" onChangeText={(data) => this.setState({ lastname: data })} />
                    </Item>
                    <Item>
                        <Input placeholder="DOB" onChangeText={(data) => this.setState({ dob: data })} />
                    </Item>
                    <Item>
                        <Input placeholder="Username" onChangeText={(data) => this.setState({ username: data })} />
                    </Item>
                    <Item>
                        <Input placeholder="Email" onChangeText={(data) => this.setState({ email: data })} />
                    </Item>
                    <Item>
                        <Input placeholder="Password" onChangeText={(data) => this.setState({ password: data })} />
                    </Item>
                    <Item last>
                        <Input placeholder="Confirm Password" onChangeText={(data) => this.setState({ password: data })} />
                    </Item>
                    <Item last>
                        <Input placeholder="Gender(M or F)" onChangeText={(data) => this.setState({ gender: data })} />
                    </Item>
                    <Item last>
                        <Input placeholder="Location City" onChangeText={(data) => this.setState({ locationCity: data })} />
                    </Item>

                    <Item last>
                        <Input placeholder="Location State" onChangeText={(data) => this.setState({ locationState: data })} />
                    </Item>

                    <Item last>
                        <Input placeholder="Location Country" onChangeText={(data) => this.setState({ locationCountry: data })} />
                    </Item>

                    <Item last>
                        <Input placeholder="Picture" onChangeText={(data) => this.setState({ locationCountry: data })} />
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
    }
})