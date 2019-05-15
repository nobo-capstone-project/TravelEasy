/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View, TouchableHighlight, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
// import { Text, View } from 'react-native';

import BottomNav from "../Components/BottomNav";

// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

import { Item, Grid, Col, Row, Card, CardItem, Container, Header, Input, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';

import { Form } from 'native-base';

import { AsyncStorage } from 'react-native';

// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';




// session storage vs local storage

function signUpUser() {
    // evt.preventDefault();
    console.log("what1");
    fetch("https://gateway-ldw2m5nesa-uc.a.run.app/user/create/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": "COOKIEMONSTER12232111",
            "password": "123456561111",
            "email": "COOKIEMONSTER122132@gmail.com",
            "firstname": "cookie",
            "lastname": "monster",
            "dob": "2019-04-26T14:34:00.913032-07:00",
            "gender": "M",
            "locationCity": "LA",
            "locationState": "WA",
            "locationCountry": "US",
            "picture": "123"
        })
    })
        .then(res => {
            console.log("what2");
            // if (!res.ok) {
            //     throw Error(res.statusText + " " + res.status);
            // }
            console.log(res);
            console.log(res.headers.get("Authorization"));
            AsyncStorage.setItem("authKey", res.headers.get("Authorization"));

            const test = AsyncStorage.getItem('authKey');

            test.then(function (result) {
                console.log(result);
            });


            return res.json();

            console.log("what2.5");
        })
        .then(data => {
            console.log(data);
            localStorage.setItem("userid", data.id);
            localStorage.setItem("username", data.userName);
            this.props.history.push({ pathname: "/getPet" });

        })

        .catch(function (error) {
            alert(error);
            console.log("what3");
        });
}

export default class SignUpPage extends React.Component {


    componentDidMount() {
        signUpUser();
        console.log("WHOA");
        // logger.log("WHOA");
    }

    render() {
        console.log("hello");

        function printHello() {
            console.log("hello");
            // logger.log("hello");
        }
        return (
            <Container style={styles.container}>


                {/* <View><Text>Hello</Text></View> */}
                {/* <View></View> */}

                <Header>

                    <Text>TravelEasy</Text>

                </Header>

                <Text>Sign Up</Text>


                <Form>
                    <Item>
                        <Input placeholder="First Name" onChange={signUpUser} />
                    </Item>
                    <Item>
                        <Input placeholder="Last Name" onChange={printHello} />
                    </Item>
                    <Item>
                        <Input placeholder="Username" onChange={printHello} />
                    </Item>
                    <Item>
                        <Input placeholder="Password" />
                    </Item>
                    <Item last>
                        <Input placeholder="Confirm Password" />
                    </Item>

                </Form>

                <Button title="Solid Button"><Text>HELLO</Text></Button>

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

})