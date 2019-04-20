import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";


import HomePage from '../Pages/HomePage'

class Test extends React.Component {
    render() {
        return (
            <View >
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: HomePage,
    Test: Test

});

export default createAppContainer(AppNavigator);