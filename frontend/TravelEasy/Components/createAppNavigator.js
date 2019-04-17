import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
    render() {
        return (
            <View >
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
});

export default createAppContainer(AppNavigator);