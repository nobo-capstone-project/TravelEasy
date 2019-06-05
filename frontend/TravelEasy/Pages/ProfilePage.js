/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Header, Item } from 'native-base';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class ProfilePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			userIntro: 'I like to travel in cities.',
		}
		this.refreshFunction = this.refreshFunction.bind(this);
	}


	componentDidMount() {
		AsyncStorage.getItem('username')
			.then((value) => {
				console.log(value);
				this.setState({ "username": value });
			})
			.catch(() => {
				console.log('error');
			});
		AsyncStorage.getItem('email')
			.then((value) => {
				console.log(value);
				this.setState({ "email": value });
			})
			.catch(() => {
				console.log('error');
			});
		// const { navigation } = this.props;
		// let bio = navigation.getParam('userBio', '');
		// if (bio.length != 0) {
		// 	this.setState({ "userIntro": bio });
		// }
		console.log('dhkvbdkvbhdfbvdhfk');
	}

	refreshFunction(value) {
		AsyncStorage.getItem('username')
			.then((value) => {
				console.log(value);
				this.setState({ "username": value });
			})
			.catch(error => {
				console.log(error);
			});
		console.log('eee');
		if (value.length != 0) {
			this.setState({ "userIntro": value });
		}
	}


	render() {
		return (
			<ScrollView>
				{/* <RouteHeader></RouteHeader> */}
				<View style={{ backgroundColor: '#F3F7FF', width: window.width, height: window.height }}>
					{/* <RouteIntro tags={this.state.tags}></RouteIntro>
                    <RouteDetail stops={this.state.stops}></RouteDetail> */}
					<Header style={{ backgroundColor: '#FAD05A' }}>
						<View style={{
							flexDirection: 'row',
							justifyContent: 'center', 
							position: 'relative',
							width: window.width
						}}>
							<Text style={{ marginTop: 14, fontSize: 16, fontWeight: '500' }}>
								Hi, {this.state.username}
							</Text>
							<TouchableHighlight
								onPress={() => this.props.navigation.navigate('Login')}
								style={{ 
									backgroundColor: 'transparent',
									position: 'absolute',
									right: 20

								}}>
								<Text style={{
									fontWeight: "500",
									fontStyle: "normal",
									color: "#F67779",
									paddingBottom: 0,
									lineHeight: 14,
									marginTop: 17,

								}}>
									Log out
								</Text>

							</TouchableHighlight>
						</View>
					</Header>
					<View style={styles.profile}>

						<View style={{ width: window.width, height: 20, backgroundColor: 'transparent' }} />

						<View style={{ flexDirection: 'row' }}>
							<Image source={require('../imgs/self.png')} style={styles.userImg} />
							<View style={{ flexDirection: 'column', alignItems: 'center' }}>
								<View style={{ flexDirection: 'row' }}>

									<View style={{
										flexDirection: 'column',
										marginLeft: 30,
										marginRight: 6,
										alignItems: 'center',
										width: 66,
										marginTop: 10
									}}>
										<Text style={styles.numbers}>
											0
										</Text>
										<Text style={styles.categories}>
											posts
										</Text>
									</View>
									<View style={{
										flexDirection: 'column',
										marginLeft: 6,
										marginRight: 6,
										alignItems: 'center',
										width: 66,
										marginTop: 10
									}}>
										<Text style={styles.numbers}>
											0
										</Text>
										<Text style={styles.categories}>
											followers
										</Text>
									</View>
									< View style={{
										flexDirection: 'column',
										marginLeft: 6,
										marginRight: 6,
										alignItems: 'center',
										width: 66,
										marginTop: 10
									}}>
										<Text style={styles.numbers}>
											0
										</Text>
										<Text style={styles.categories}>
											followings
										</Text>
									</View>
								</View>
								<TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('EditProfile', { refresh: this.refreshFunction })}>
									<View style={{
										borderColor: "#F7B633",
										borderWidth: 1,
										borderRadius: 10,
										marginTop: 14,
										paddingLeft: 60,
										paddingRight: 60,
										paddingTop: 4,
										paddingBottom: 4,
										marginLeft: 50,
										marginBottom: 0
									}}>
										<Text>Edit Profile</Text>
									</View>
								</TouchableWithoutFeedback>
							</View>

							{/* <Button>Profile</Button> */}
							{/* <View></View> */}
							{/* </View> */}
						</View>
						<View style={{ width: window.width, height: 10, backgroundColor: 'transparent' }} />
						<View>
							<Text style={styles.username}>
								{this.state.username}
							</Text>
							<Text style={styles.userinfo}>
								{this.state.userInfo}
							</Text>
							<Text style={styles.userintro}>
								{this.state.userIntro}
							</Text>
						</View>

					</View>
					<View>
						<Text style={{ marginLeft: 24, marginTop: 8, fontWeight: '500', fontSize: 12, color: '#828282' }}>Hot
							Posts</Text>
						{/* <Image source={require('../imgs/arrow-right.svg')} /> */}

					</View>
					<View style={{ alignItems: 'center', marginTop: 100 }}>
						<Image source={require('../imgs/nopost.png')} />
						<Text style={{ marginTop: 20, fontWeight: '600', color: '#828282' }}>
							Share some of your trips please.
						</Text>
					</View>

				</View>
				{/* <PostComment update={this.updateComments}></PostComment> */}
				{/* {console.log(this.state.comments)} */}
			</ScrollView >


		);
	}
}
const styles = StyleSheet.create({
	container: {
		// paddingTop: 200
		margin: 0,
		padding: 0
	},

	profile: {
		backgroundColor: '#fff',
		width: window.width,
		height: 188,
		borderBottomColor: '#BDBDBD',
		borderBottomWidth: 0.3,
		paddingLeft: 20,
		paddingRight: 20,
	},
	userImg: {

		height: 86,
		width: 86,
		borderRadius: 86 / 2,
		// borderColor: '#868686',
		// borderWidth: 1,
		// important: 'true',
	},
	username: {
		fontSize: 16,
		fontWeight: "400",
		marginLeft: 4,

	},

	userinfo: {
		fontSize: 12,
		fontWeight: "200",
		marginLeft: 4,
		color: '#828282',
		lineHeight: 20,
	},


	userintro: {
		fontSize: 12,
		fontWeight: "100",
		marginLeft: 4,
		lineHeight: 20,

	},

	userMoreinfo: {
		flex: 1
	},

	numbers: {
		alignItems: 'center',
		fontSize: 20,
		fontWeight: '500',
	},

	categories: {
		fontSize: 12,
		fontWeight: "100",
		color: '#828282'
	}
});