/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header,} from 'native-base';
// import { Text, View } from 'react-native';

// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');


export default class ProfilePage extends React.Component {
	render() {
		return (
			<ScrollView>
				{/* <RouteHeader></RouteHeader> */}
				<View style={{backgroundColor: '#F3F7FF', width: window.width, height: window.height}}>
					{/* <RouteIntro tags={this.state.tags}></RouteIntro>
                    <RouteDetail stops={this.state.stops}></RouteDetail> */}
					<Header style={{backgroundColor: '#FAD05A'}}>
						<Text style={{marginTop: 14, fontSize: 16, fontWeight: '500'}}>
							Hi, username
						</Text>
					</Header>
					<View style={styles.profile}>

						<View style={{width: window.width, height: 20, backgroundColor: 'transparent'}}/>

						<View style={{flexDirection: 'row'}}>
							<Image source={require('../imgs/user.png')} style={styles.userImg}/>
							<View style={{flexDirection: 'column', alignItems: 'center'}}>
								<View style={{flexDirection: 'row'}}>

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
							</View>

							{/* <Button>Profile</Button> */}
							{/* <View></View> */}
							{/* </View> */}
						</View>
						<View style={{width: window.width, height: 10, backgroundColor: 'transparent'}}/>
						<View>
							<Text style={styles.username}>
								username
							</Text>
							<Text style={styles.userinfo}>
								userinformation, credit, mileage etc.
							</Text>
							<Text style={styles.userintro}>
								userintroduction say something about yourself
							</Text>
						</View>

					</View>
					<View>
						<Text style={{marginLeft: 24, marginTop: 8, fontWeight: '500', fontSize: 12, color: '#828282'}}>Hot
							Posts</Text>
						{/* <Image source={require('../imgs/arrow-right.svg')} /> */}

					</View>
					<View style={{alignItems: 'center', marginTop: 100}}>
						<Image source={require('../imgs/nopost.png')}/>
						<Text style={{marginTop: 20, fontWeight: '600', color: '#828282'}}>
							Share some of your trips please.
						</Text>
					</View>

				</View>
				{/* <PostComment update={this.updateComments}></PostComment> */}
				{/* {console.log(this.state.comments)} */}
			</ScrollView>


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