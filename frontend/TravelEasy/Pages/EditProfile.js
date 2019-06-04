import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import SvgUri from 'react-native-svg-uri';
import { StyleSheet, Text, View, TouchableWithoutFeedback, } from 'react-native';
import { Button, Container, DatePicker, Form, Header, Input, Item, TextInput } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

export default class EditProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			userIntro: 'I like to travel in cities.',
		}
		this._onPress = this._onPress.bind(this);
	}

	componentDidMount() {
		AsyncStorage.getItem('username')
			.then((value) => {
				console.log(value);
				this.setState({ "username": value });
			})
			.catch(error => {
				console.log('error');
			});
		AsyncStorage.getItem('email')
			.then((value) => {
				console.log(value);
				this.setState({ "email": value });
			})
			.catch(error => {
				console.log('error');
			});
	}

	_onPress() {
		if (this.state.username.length != 0 & this.state.email.length != 0) {

			AsyncStorage.setItem('username', this.state.username);
			AsyncStorage.setItem('email', this.state.email);

			AsyncStorage.getItem('username')
				.then((value) => {
					console.log(value);
				})
				.catch(error => {
					console.log('error');
				});
			this.props.navigation.state.params.refresh(this.state.userIntro);
			console.log(this.state.userIntro);
			this.props.navigation.navigate('Profile', { userBio: this.state.userIntro });
		}
	}

	render() {
		console.log(this.props.navigation.state.params);
		return (
			<Container style={styles.container}>

				<Form>
					<TouchableWithoutFeedback>
						<Form style={{ flexDirection: 'row', marginTop: 60, marginLeft: 10 }}>
							<FontAwesomeIcon icon={faChevronLeft} style={{ color: '#F67779' }} />
							<Text style={{
								width: 77,
								height: 23,
								fontSize: 14,
								fontWeight: "500",
								fontStyle: "normal",
								color: "#F67779",
								marginLeft: 4,

							}} onPress={() => this.props.navigation.navigate('Profile')}>
								Back
					</Text>
						</Form>
					</TouchableWithoutFeedback>
				</Form>
				<Form>
					<Text style={styles.createText}>
						Edit Profile
					</Text>
					<Text style={styles.titleText}>Username:</Text>
					<Item style={styles.textView}>
						<Input
							style={styles.textInput}
							editable={true}
							maxLength={200}
							placeholder={this.state.username}
							onChangeText={(data) => this.setState({ username: data })} />
					</Item>
					<Text style={styles.titleText}>Email:</Text>
					<Item style={styles.textView}>
						<Input
							style={styles.textInput}
							editable={true}
							maxLength={200}
							placeholder={this.state.email}
							onChangeText={(data) => this.setState({ email: data })} />
					</Item>
					<Text style={styles.titleText}>Bio:</Text>
					<Item style={styles.textView}>
						<Input
							style={styles.textInput}
							editable={true}
							maxLength={500}
							placeholder={this.state.userIntro}
							onChangeText={(data) => this.setState({ userIntro: data })} />
					</Item>


				</Form>

				<Button
					style={styles.button}
					onPress={this._onPress}
				>
					<Text style={styles.btnText}>
						Submit
					</Text>

				</Button>
			</Container >
		)
	}
}

const styles = StyleSheet.create({
	container: {
		// paddingTop: 200
		margin: 0,
		padding: 0,
		backgroundColor: 'white',

		// fontWeight: 'bold'
	},

	textView: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: '#f7b633',
		borderBottomWidth: 0.5,
		borderStyle: "solid",
		marginLeft: 50,
		marginRight: 50,
		marginBottom: 20
	},


	createText: {
		fontSize: 36,
		marginTop: '24%',
		marginLeft: 50,
		color: '#FAD05A',
		fontWeight: '700',
		marginBottom: '10%',
		fontFamily: 'Futura',

	},

	textInput: {
		paddingLeft: 10,
		height: 46,
		width: '60%',
		fontSize: 14,
		fontWeight: "500",
		fontStyle: "normal",
		letterSpacing: 0,
		color: '#6D6D6D',
		fontFamily: 'Futura',
	},

	button: {
		marginTop: 50,
		width: '50%',
		height: 50,
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
		alignItems: 'center',
		marginLeft: '25%',
		// marginRight: 'auto',
		alignItems: 'center',
	},

	btnText: {
		fontSize: 18,
		fontWeight: "600",
		fontStyle: "normal",
		letterSpacing: 1,
		color: "white",
		fontFamily: 'Futura',

	},
	titleText: {
		marginLeft: 50,
		fontSize: 16,
		fontWeight: "600",
		fontStyle: "normal",
		letterSpacing: 0,
		color: '#666666',
		fontFamily: 'Futura',
	}
});