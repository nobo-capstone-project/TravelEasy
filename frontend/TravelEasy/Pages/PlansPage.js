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

import { Item, Grid, Col, Row, Card, CardItem, Container, Header, Input, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';




export default class Plans extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Text> List of Saved Trips (click on japan 5-28) -> Guide itinerary:ToDO list</Text>
                <Text> List of Saved Trips (click on japan 5-28) -> ToDO list</Text>
                <Text> List of Saved Trips (click on japan 5-28) -> ToDO list</Text>
                <Text> List of Saved Trips (click on japan 5-28) -> ToDO list</Text>
                <Text> List of Saved Trips (click on japan 5-28) -> ToDO list</Text>
                <Text> List of Saved Trips (click on japan 5-28) -> ToDO list</Text>
                <Text> List of Saved Trips (click on japan 5-28) -> ToDO list</Text>
                <Text> List of Saved Trips (click on japan 5-28) -> Guide itinerary:ToDO list</Text><Text> List of Saved Trips (click on japan 5-28) -> Guide itinerary:ToDO list</Text><Text> List of Saved Trips (click on japan 5-28) -> Guide itinerary:ToDO list</Text><Text> List of Saved Trips (click on japan 5-28) -> Guide itinerary:ToDO list</Text>
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