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
// import { Text, View } from 'react-native';




import { Grid, Col, Row, Card, CardItem, Container, Header, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const styles = StyleSheet.create({
    container: {
        // paddingTop: 200
    },
    cover_img: {
        flex: 1,
        height: 245,
        width: "100%",
        resizeMode: "cover"

    }
})

export default class Route extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <ScrollView>
                <RouteHeader></RouteHeader>
            </ScrollView>
        );
    }
}

class RouteHeader extends React.Component {
    render() {
        return (
            <View>
                <Image source={require('../imgs/cover.jpg')} style={styles.cover_img} />
            </View>
        );
    }
}

class RouteIntro extends React.Component {
    render() {
        <View>

        </View>
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
