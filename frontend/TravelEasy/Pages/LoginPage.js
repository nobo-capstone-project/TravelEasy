/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { AlertIOS, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import SvgUri from 'react-native-svg-uri';

import AsyncStorage from '@react-native-community/async-storage';

import { withNavigation } from 'react-navigation';
// import { Text, View } from 'react-native';

// import { Item, Grid, Col, Row, Card, CardItem, Container, Header, Input, Content, Tab, Tabs, FooterTab, Footer, Button, Icon, } from 'native-base';

// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this._onPress = this._onPress.bind(this);
	}

	_errorType(status) {
		if (status == 415) {
			return 'Username or Pasword in wrong format';
		} else if (status == 500) {
			return 'Server Error'
		} else if (status == 403) {
			return 'Username and Password Not Match';
		} else {
			return 'error';
		}
	};

	_onPress() {
		if (this.state.username.length != 0 & this.state.password.length != 0) {
			fetch("https://gateway-full-ldw2m5nesa-uc.a.run.app/user/auth/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					username: this.state.username,
					password: this.state.password
				})

			})

				.then(res => {
					if (!res.ok) {
						AlertIOS.alert('Error', this._errorType(res.status), [{
							text: 'Cancel',
							onPress: () => console.log('fail')
						}]);
					}

					console.log(res);
					console.log(res.headers.get("Authorization"));

					_storeData = async () => {
						try {
							await AsyncStorage.setItem('bearerKey', res.headers.get("Authorization"));
						} catch (error) {
							console.log(error);
						}
					};
					return res.json();
				})
				.then(data => {
					// set key value
					storeData = async () => {
						try {
							await AsyncStorage.setItem('user', data.username);
							await AsyncStorage.setItem('email', data.email);
						} catch (e) {
							// saving error
						}
					};

					// get key
					AsyncStorage.getItem('email')
						.then((value) => {
							const data = value;
							console.log(data);
						})
						.catch(error => {
							console.log('error');
						});

					this.props.navigation.navigate('Home');
				})

				.catch(error => {
					console.log(error);
				});
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.header}>TERN</Text>
				<View>
					<SvgUri width="150" height="150" source={require('../imgs/logo_yellownobackground.svg')} />
				</View>
				<View style={styles.textView}>
					<FontAwesomeIcon icon={faUser} style={{ color: '#828282' }} />
					<TextInput
						style={styles.textInput}
						placeholder="Username"
						editable={true}
						maxLength={200}
						onChangeText={(username) => this.setState({
							username: username
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
						fontWeight: "600",
						fontStyle: "normal",
						letterSpacing: 1,
						color: "white",
						fontFamily: 'Futura',

					}}>Login</Text>
				</TouchableHighlight>
				<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
					<Text style={styles.bottomText}>Don't have account? </Text>
					<TouchableHighlight onPress={() => this.props.navigation.navigate('SignUp')}>
						<Text style={styles.signupText}>Sign Up</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

export default withNavigation(LoginPage);

const styles = StyleSheet.create({
	container: {
		// paddingTop: 200
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',

	},
	header: {
		marginTop: 150,
		fontSize: 56,
		fontWeight: "800",
		fontStyle: "normal",
		// lineHeight: 50.6,
		letterSpacing: 10.8,
		color: "#f7b633",
		fontFamily: 'Futura'
	},
	textView: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: '#f7b633',
		borderBottomWidth: 0.5,
		borderStyle: "solid",
		paddingBottom: 0
		// paddingBottom: 0
	},
	textInput: {
		paddingLeft: 10,
		height: 46,
		width: '60%',
		fontSize: 14,
		fontWeight: "normal",
		fontStyle: "normal",
		letterSpacing: 0,
		fontFamily: 'Futura',

	},
	button: {
		marginTop: 60,
		width: '50%',
		height: 46,
		borderRadius: 50,
		backgroundColor: "#F67779",
		shadowColor: "rgba(109, 109, 109, 0.24)",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	bottomText: {
		fontSize: 14,
		fontWeight: "500",
		fontStyle: "normal",
		letterSpacing: 0,
		color: "#828282",
		fontFamily: 'Futura',
	},
	signupText: {
		fontSize: 14,
		fontWeight: "600",
		fontStyle: "normal",
		letterSpacing: 0,
		color: "#F15A5C",
		fontFamily: 'Futura',
	}


});