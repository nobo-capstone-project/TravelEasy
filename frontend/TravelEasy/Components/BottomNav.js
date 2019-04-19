/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
// import { Text, View } from 'react-native';







import { Grid, Col, Row, Card, CardItem, Container, Header, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';



export default class BottomNav extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {

        return (
            <Footer >
                <FooterTab>
                    <Button vertical >
                        <Icon name="apps" />
                        <Text>Explore</Text>


                    </Button>
                    <Button vertical>
                        <Icon name="camera" />
                        <Text>Favorites</Text>
                    </Button>
                    <Button vertical active>
                        <Icon active name="navigate" />
                        <Text>Trips</Text>
                    </Button>
                    <Button vertical onPress={() => this.props.navigation.push('Home')}>
                        <Icon name="person" />
                        <Text>Add</Text>
                    </Button>
                    <Button vertical>
                        <Icon name="person" />
                        <Text>User</Text>
                    </Button>
                </FooterTab>
            </Footer>




        );
    }
}




// export default () => (

//     <Footer >
//         <FooterTab>
//             <Button vertical >
//                 <Icon name="apps" />
//                 <Text>Explore</Text>


//             </Button>
//             <Button vertical>
//                 <Icon name="camera" />
//                 <Text>Favorites</Text>
//             </Button>
//             <Button vertical active>
//                 <Icon active name="navigate" />
//                 <Text>Trips</Text>
//             </Button>
//             <Button vertical onPress={() => navigate('Profile')}>
//                 <Icon name="person" />
//                 <Text>Add</Text>
//             </Button>
//             <Button vertical>
//                 <Icon name="person" />
//                 <Text>User</Text>
//             </Button>
//         </FooterTab>
//     </Footer>

// );


