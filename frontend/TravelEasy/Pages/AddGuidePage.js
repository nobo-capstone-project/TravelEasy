/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import { Text, View } from 'react-native';
import {Button, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

import {Header,} from 'native-base';
import ImagePicker from 'react-native-image-picker';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


////////////////////////////////////////////////////////////////////////////////////////////////////////
// Upon pressing the add guide button, it will add stop to database, and saves an array of stopIDs for the guide: 
// user id will be gathered from leo's login page's async '
// Requires 3 stops
// additional stops can be made by pressing "add stop"

// adding a stop should return a stopID 

// when pressing "add guide", it will add all of the stops and the guide to the database

// 1. adding a stop will aded a stop object to the "stops" array
// 2. fill out guide info, fill out stops info
// 3. Next, we create stop info and it will return stopID
// 4. With this stopID, we store it in the guide's stops field
// 5. then, we post the guide 
////////////////////////////////////////////////////////////////////////////////////////////////////////


export default class AddGuidePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// Guide info
			creatorID: '1',
			description: '',
			stopID: [],
			category: ['leisure', 'culture'],
			picture: ['none atm'],
			vote: 0,


			// checkbox state
			categNature: false,
			categShopping: false,
			categUrbanExplore: false,
			categFood: false,
			categTourism: false,
			// Stops info
			stopsArray: []
			// each stop will include
			// this is to post each stop
		};

		// this.dobIsoConvert = this.dobIsoConvert.bind(this);

		// this.uploadPhoto = this.uploadPhoto.bind(this);


		this.handleChoosePhoto = this.handleChoosePhoto.bind(this);
	}

	handleChoosePhoto = () => {
		console.log("its being called");
		const options = {};
		ImagePicker.launchImageLibrary(options, response => {
			console.log("response", response.uri);

			this.uploadImage(response.uri);
		})
	};

	uploadImage(imagePath) {

	}

	render() {
		return (
			<View style={styles.container}>
				{/* <Header hasTabs /> */}
				<Header>
					<Text style={styles.guideTitle}>Add a Guide</Text>
				</Header>

				<Text>Guide Name</Text>
				<TextInput
					style={styles.guideFields}
				/>

				<Text>Sales Pitch </Text>
				<TextInput

					style={styles.guideFields}
				/>

				<Text style={styles.guideType}>Guide Type</Text>

				<CheckBox
					onPress={() => this.setState({
						categFood: !this.state.categFood
					})}
					// checked={this.state.}
					checked={this.state.categFood}
					containerStyle={styles.guideTypeCheckbox}
					title='Food (lunch, dinner)'

				/>


				<CheckBox onPress={() => this.setState({
					categNature: !this.state.categNature
				})}
					// checked={this.state.}
					      checked={this.state.categNature}
					      containerStyle={styles.guideTypeCheckbox}
					      title='Nature / Hiking'
					// checked={this.state.checked}
				/>

				<CheckBox onPress={() => this.setState({
					categUrbanExplore: !this.state.categUrbanExplore
				})}
					// checked={this.state.}
					      checked={this.state.categUrbanExplore} containerStyle={styles.guideTypeCheckbox}
					      title='Urban Exploration'
					// checked={this.state.checked}
				/>


				<CheckBox onPress={() => this.setState({
					categShopping: !this.state.categShopping
				})}
					// checked={this.state.}
					      checked={this.state.categShopping} containerStyle={styles.guideTypeCheckbox}
					      title='Shopping'
					// checked={this.state.checked}
				/>

				<CheckBox onPress={() => this.setState({
					categTourism: !this.state.categTourism
				})}
					// checked={this.state.}
					      checked={this.state.categTourism} containerStyle={styles.guideTypeCheckbox}
					      title='Tourist Activities'
					// checked={this.state.checked}
				/>

				<Button title="Choose Photo" onPress={this.handleChoosePhoto}/>

				<Text style={styles.currStopsTitle}>Current Stops Added </Text>

				<ScrollView style={styles.stopsListCont}>
					<View style={styles.listItem}>
						<View style={styles.stopName}><Text>Din Tai Fung</Text></View>
						<View style={styles.stopTimes}><Text>2pm - 3pm</Text></View>

					</View>
					<View style={styles.listItem}>
						<View style={styles.stopName}><Text>Din Tai Fung</Text></View>
						<View style={styles.stopTimes}><Text>2pm - 3pm</Text></View>
					</View>
					<View style={styles.listItem}>
						<View style={styles.stopName}><Text>Din Tai Fung</Text></View>
						<View style={styles.stopTimes}><Text>2pm - 3pm</Text></View>
					</View>


				</ScrollView>


				<View style={styles.stopsCont}>
					<Text style={styles.stopsTitle}> Add Stops to the Guide </Text>


					<View style={styles.stopRow}>
						<View style={styles.stopInputCont}>
							<Text>Stop Name</Text>

							<TextInput
								style={styles.guideFields}
							/>
						</View>

						<View style={styles.stopInputCont}>
							<Text>Stop Address</Text>

							<TextInput
								style={styles.guideFields}
							/>
						</View>
					</View>


					<View style={styles.stopRow}>
						<View style={styles.stopInputCont}>
							<Text>Start Time</Text>

							<TextInput
								multiline={true}
								numberOfLines={4}
								style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5,}}
							/>

						</View>
						<View style={styles.stopInputCont}>
							<Text>End Time</Text>

							<TextInput
								multiline={true}
								numberOfLines={4}
								style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5,}}
							/>

						</View>
					</View>


					{/* pressing on button will add an "stop" object to the stops array
                            1. converts data into object, adds object to the stops array
                            2. clears the fields
                            3. refreshes the "current stop list"

                    
                    
                        */}
					<Button
						// onPress={onPressLearnMore}
						title="ADD STOP"
						color="red"
						accessibilityLabel="Learn more about this purple button"
					/>

					{/* <Button
                            onPress={}
                            title="ADD Photos"
                            color="red"
                            accessibilityLabel="Learn more about this purple button"
                        /> */}

					<Button
						// onPress={onPressLearnMore}
						title="Submit guide"
						color="red"
						accessibilityLabel="Learn more about this purple button"
					/>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listItem: {
		height: 35,
		padding: 0,
		margin: 0,
		textAlign: 'center',
		flex: 1,
		flexDirection: 'row'
		// padding: '3 10'
	},
	stopsTitle: {
		textAlign: 'center',
		fontWeight: 'bold',
		backgroundColor: '#e5e5e5',
		padding: 10,
		// width: '45%'
	},
	stopName: {
		width: '45%'
	},
	stopName: {
		padding: 0,
		margin: 0,
		marginLeft: 20,
		marginRight: 10,
		width: '45%'
	},
	stopsListsCont: {
		backgroundColor: 'white', flex: 1, flexDirection: 'row'
	},
	listItem: {
		backgroundColor: 'white',
		padding: 10,
		flexDirection: 'row',
		textAlign: 'center'
	},
	currStopsTitle: {
		padding: 10,
		marginTop: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		backgroundColor: '#e5e5e5'
	},
	currStopsList: {
		backgroundColor: 'white'
	},


	guideStopsList: {
		flex: 1
	},
	guideTitle: {
		fontSize: 30
	},
	container: {
		backgroundColor: '#FAD05A'
		// paddingTop: 200
	},
	footer: {
		position: 'absolute',
		bottom: 0
	},
	guideContainer: {
		// backgroundColor: 'blue',
		height: 100,
		// width: 100,
		// position: 'absolute',
		// top: 100,
		// left: 0
	},

	stopsCont: {
		padding: 15,
		backgroundColor: 'white'
	},
	addStopTitle: {
		textAlign: 'center',
		width: '100%',
		// backgroundColor: 'blue'
	},

	stopRow: {
		flexDirection: 'row'
	},
	stopInputCont: {
		width: '45%',
		marginRight: 5
	},

	stopType: {
		height: 45
	},
	guideTypeCheckbox: {
		height: 25,
		padding: 0,
		margin: 0,
		fontSize: 10
	},
	checkBoxFont: {},

	guideFields: {
		height: 25,
		backgroundColor: '#e5e5e5',
		padding: 5

	}

});
