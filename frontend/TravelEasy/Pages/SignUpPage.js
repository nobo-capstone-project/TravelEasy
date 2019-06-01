/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import { Button, Container, DatePicker, Form, Header, Input, Item, TextInput } from 'native-base';
// import { Text, View } from 'react-native';

// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
// session storage vs local storage

export default class SignUpPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: 'User3',
			password: 'User3',
			email: 'user3@gmail.com',
			firstname: 'Rob',
			lastname: 'Kim',
			dob: '2019-04-26T14:34:00.913032-07:00',
			gender: 'M',
			locationCity: 'Seattle',
			locationState: 'WA',
			locationCountry: 'US',
			picture: '123'
		};

		// this.signUpUser = this.signUpUser.bind(this);
		this.signUpUser = this.signUpUser.bind(this);
		// this.convertDateToIso = this.convertDateToIso.bind(this);
		this.dobIsoConvert = this.dobIsoConvert.bind(this);
	}


	dobIsoConvert(dateStr) {
		var utcDob = new Date(dateStr).toISOString();
		this.setState({ dob: utcDob }, () => {
			console.log(this.state.dob)
		});
	}

	signUpUser() {


		this.dobIsoConvert(this.state.dob);

		console.log(this.state);


		fetch("https://gateway-full-ldw2m5nesa-uc.a.run.app/user/create/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},

			body: JSON.stringify(this.state)

		})
			.catch(err => {
				console.log(err)
			})


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
				{/* <Header style={{backgroundColor: '#FAD05A'}}>
					<Text style={{marginTop: 14, fontSize: 16, fontWeight: '500', color: '#424242'}}>Sign Up</Text>
				</Header> */}

				{/* <Text>Sign Up</Text> */}
				{/* <DatePicker
					defaultDate={new Date(2018, 4, 4)}
					minimumDate={new Date(2018, 1, 1)}
					maximumDate={new Date(2018, 12, 31)}
					locale={"en"}
					timeZoneOffsetInMinutes={undefined}
					modalTransparent={false}
					animationType={"fade"}
					androidMode={"default"}
					placeHolderText="Select date"
					textStyle={{color: "green"}}
					placeHolderTextStyle={{color: "#d3d3d3"}}
					onDateChange={this.setDate}
					disabled={false}
				/> */}

				{/* <Form>

					<Text style={styles.createText}>
						Create {"\n"}
						Account
						</Text>

					
					<TextInput style={styles.signUpFields} placeholder="First Name"
						onChangeText={(data) => this.setState({ firstname: data })} />


				</Form> */}

				<Form>
					<Text style={styles.createText}>
						Create {"\n"}
						Account
					</Text>
					<Item style={styles.textView} >
						<Input 
							style={styles.textInput}
							editable={true}
							maxLength={20}
							placeholder="First Name"
							onChangeText={(data) => this.setState({firstname: data})}/>
					</Item>
					<Item style={styles.textView}>
						<Input 
							style={styles.textInput} 
							editable={true}
							maxLength={200}
							placeholder="Last Name"
							onChangeText={(data) => this.setState({ lastname: data })} />
					</Item>
					<Item style={styles.textView}>
						<Input 
							style={styles.textInput}
							editable={true}
							maxLength={200}
							placeholder="Username"
							onChangeText={(data) => this.setState({ username: data })} />
					</Item>
					<Item style={styles.textView}>
						<Input 
							style={styles.textInput}
							editable={true}
							maxLength={200}
							placeholder="Email"
							onChangeText={(data) => this.setState({ email: data })} />
					</Item>
					<Item style={styles.textView}>
						<Input 
							style={styles.textInput}
							editable={true}
							maxLength={200}
							placeholder="Password"
							onChangeText={(data) => this.setState({ password: data })} />
					</Item>
					
					
				</Form>

				<Button 
					style={styles.button} 
					onPress={this.signUpUser} 
					title="Solid Button"
				>
					<Text style={styles.btnText}>
						Sign Up!
					</Text>
					
				</Button>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		// paddingTop: 200
		margin: 0,
		padding: 0,
		backgroundColor: '#F6F8FC'
	},

	textView: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: '#f7b633',
		borderBottomWidth: 0.5,
		borderStyle: "solid",
		marginLeft: 50,
		marginRight: 50
	},


	createText: {
		fontSize: 36,
		marginTop: '40%',
		marginLeft: 50,
		color: '#FAD05A',
		fontWeight: '600',
		marginBottom: '10%'

	},

	textInput: {
		paddingLeft: 10,
		height: 50,
		width: '60%',
		fontSize: 14,
		fontWeight: "600",
		fontStyle: "normal",
		letterSpacing: 0,
		color: '#828282'
	},

	button: {
		marginTop: 50,
		width: '50%',
		height: 50,
		borderRadius: 50,
		backgroundColor: "#fecd00",
		shadowColor: "rgba(109, 109, 109, 0.24)",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowRadius: 6,
		shadowOpacity: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: '25%',
		// marginRight: 'auto',
		alignItems: 'center',
	},

	btnText: {
		fontSize: 18,
		fontWeight: "500",
		fontStyle: "normal",
		letterSpacing: 0,
		color: "white",
	},
});