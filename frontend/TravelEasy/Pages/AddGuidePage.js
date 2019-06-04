/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import { Text, View } from 'react-native';
import { AsyncStorage, ScrollView, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Button } from 'native-base';

import { Header, Row, } from 'native-base';
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
			guideName: 'This is Name of Guide',
			// Current Guide info
			creatorID: '1',
			guideDesc: 'This is the Description of this Trip',
			stopID: [],
			category: ['leisure', 'culture'],
			picture: ['none atm'],
			vote: 0,
			// Guide Type Checkboxes
			categNature: false,
			categShopping: false,
			categUrbanExplore: false,
			categFood: false,
			categTourism: false,

			// The stops for the current guide: 
			stopsArray: [],

			stopsViews: [],

			// Current Stop Data: 
			stopTitle: "Test Name of Stop",
			stopDesc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
			address: "14612 3rd DR NE Seattle WA 98115",
			categories: ['Nature', 'Urban Exploration', 'Food'],
			price: "Free",
			startTime: "1pm",
			endTime: "2pm",
			time: "30mins ~ 1hrs",
			photoUrl: '',

			stopImage: <Image></Image>,

			// Current Stops: 
			stops: [
				{
					title: "Suzzallo Library",
					desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',
					address: "14612 3rd DR NE Seattle WA 98115",
					categories: ['Nature', 'Urban Exploration', 'Food'],
					price: "Free",
					startTime: "1pm",
					endTime: "2pm",
					time: "30mins ~ 1hrs",
					photoUrl: 'file:///Users/school/Library/Developer/CoreSimulator/Devices/F17FC8F5-92B2-4828-BDB0-E8FDCCE3ACBD/data/Containers/Data/Application/35F50E57-681A-4652-A77F-2092668FA5B3/tmp/53A9A76B-868A-4772-8C21-D3415C32251F.jpg'
				},

			]
		};

		this.triggerAddStopActions = this.triggerAddStopActions.bind(this);
		this.appendStopToView = this.appendStopToView.bind(this);

		this.addStopToLocalStorage = this.addStopToLocalStorage.bind(this);
		this.showStopsState = this.showStopsState.bind(this);

		this.handleChoosePhoto = this.handleChoosePhoto.bind(this);
		this.addStopObjsToGuide = this.addStopObjsToGuide.bind(this);
	}

	showStopsState() {
		// console.log(this.state);
		// console.log(this.state.stops[0]);
	}

	triggerAddStopActions() {
		var stopObj = {
			title: this.state.stopTitle,
			stopDesc: this.state.stopDesc,
			address: this.state.address,
			categories: this.state.categories,
			price: this.state.price,
			startTime: this.state.startTime,
			endTime: this.state.endTime,
			time: this.state.time,
			photoUrl: this.state.photoUrl
		}

		this.appendStopToView(stopObj);
		this.addStopObjsToGuide(stopObj);
	}

	appendStopToView(stopObj) {

		var stopViewBeingAdded =
			<View style={styles.listItem}>
				<View style={styles.stopName}><Text>{stopObj.title}</Text></View>
				<View style={styles.stopTimes}><Text>{stopObj.startTime} - {stopObj.endTime}</Text></View>
				{/* <Image style={styles.stopImg} source={require('./' + stopObj.photoUrl)} /> */}
				{/* <Image style={styles.stopImg} source={require('file:///Users/school/Library/Developer/CoreSimulator/Devices/F17FC8F5-92B2-4828-BDB0-E8FDCCE3ACBD/data/Containers/Data/Application/175D23A6-A446-47FD-BCFB-8136C492688A/tmp/F75BE6F6-49DC-4032-B8A5-71759A2C4A1D.jpg')} /> */}


			</View>;


		console.log(this.state.photoUrl.replace('file://', ''));

		var stopViewsArr = this.state.stopsViews;
		stopViewsArr.push(stopViewBeingAdded);

		this.setState({ stopsViews: [stopViewsArr] });
		alert("Stop has been added!")
	}

	// Add Stop button will trigger this: 
	addStopObjsToGuide(stopObj) {


		// stops.push(stopObj);


		// Adds stopsMap to local storage, so it can be accessed perman.
		var addedStopsId = this.addStopToLocalStorage(stopObj);

		// Adds stopId Strings to guide's "stopID" array.
		// this.setState({ stopID: [...this.state.myArray, addedStopsId] })

	}


	// Adds Stop to a Map of StopId and StopObj
	// Saves this map in Async, to be accessed globally. 
	addStopToLocalStorage(stopObj) {
		console.log("stopObj about to be added")
		console.log(stopObj);

		// AsyncStorage.removeItem('stopsMap');
		AsyncStorage.getItem('stopsMap').then((response) => {
			console.log(response);

			// if 'stopsMap' exists, no need to create map.
			if (response != null) {
				var stopsIdMap = JSON.parse(response);
				console.log(stopsIdMap);

				// starts at 1
				var nextStopID = Object.keys(stopsIdMap).length + 1;
				var nextStopIDStr = nextStopID + "";
				console.log(nextStopIDStr);

				// adds next stop id as key 
				stopsIdMap[nextStopIDStr] = stopObj;

				// adds the stop to stopsIdMap, and pushes to async
				AsyncStorage.mergeItem('stopsMap', JSON.stringify(stopsIdMap));

				return nextStopIDStr;
			}

			// Otherwise, create a "map" (object actually) and store the first stop in it
			// then push this map up async
			else {
				// intializing a "map" that can store stopID.
				// var stopsIdsAndStopObj = { stopId1: "1", stopId2: "2" }; // works
				console.log(stopObj);

				// intializes stopid - stopobj "map" (thats actually an object)
				var stopsIdsAndStopObj = {}
				// adds first stopObj value 
				stopsIdsAndStopObj["1"] = stopObj;
				console.log(JSON.stringify(stopsIdsAndStopObj));

				// Put the map back in async:
				AsyncStorage.setItem('stopsMap', JSON.stringify(stopsIdsAndStopObj)).catch(error => alert(error));

				return "1";
			}
		})
	}



	handleChoosePhoto = () => {
		console.log("its being called");
		const options = {};
		ImagePicker.launchImageLibrary(options, response => {
			console.log("response", response);


			this.setState({ photoUrl: response.uri })
			console.log("photo url is: " + this.state.photoUrl);

			// this.setState({ stopImage: <Image source={{ uri: response.uri.replace('file://', ''), isStatic: true }} /> })




			// <Image source={{ uri: response.uri.replace('file://', ''), isStatic: true }} />
			// this.addImageToStops(response.uri);
			// alert("photo has been uploaded.");
		})
	};



	addImageToStops(imagePath) {
		// var photoStopsArr = this.state.photoUrl;
		// photoStopsArr.push(imagePath);

	}

	submitGuide() {
		alert("Guide is now available to the community!")
	}


	render() {
		console.log("above the photo url");
		console.log(this.state.stops[0].photoUrl);
		return (
			<View style={styles.container}>



				{/* <Header hasTabs /> */}
				<Header style={{ backgroundColor: '#FAD05A' }}>
					<Text style={{ marginTop: 14, fontSize: 18, fontWeight: '400', color: '#424242', fontFamily: 'Helvetica' }}>
						Create New Trip
					</Text>
				</Header>

				<ScrollView>

					{/* {

						this.state.stops[0].photoUrl ? (
							<Image
								resizeMode="cover"
								source={{ uri: this.state.stops[0].photoUrl }}
								style={{ height: 200, width: 200 }}
							/>
						) : null
					} */}

					<View style={styles.guideInfoCont}>

						<Text>{this.state.stopName}</Text>

						<Text style={styles.boldedText}>Guide Name</Text>



						<TextInput
							style={styles.guideFields}
							value={this.state.guideName}
							onChangeText={(guideName) => this.setState({ guideName })}
						/>



						{/* <Image style={styles.stopImg} source='file:///Users/school/Library/Developer/CoreSimulator/Devices/F17FC8F5-92B2-4828-BDB0-E8FDCCE3ACBD/data/Containers/Data/Application/1E9E8541-FA0A-428B-B9D0-8264C566F628/tmp/075E9987-43D2-4D8B-A43E-F67F2F49F6EA.jpg' /> */}

						<Text style={styles.boldedText}>Sales Pitch </Text>
						<TextInput
							value={this.state.guideDesc}
							onChangeText={(guideDesc) => this.setState({ guideDesc })}
							style={styles.guideFields}
						/>

						<Image source={{ uri: this.state.photoUrl }} />



						<Text style={styles.boldedText}>Guide Type</Text>

						<View style={styles.checkboxCont}>
							<CheckBox
								onPress={() => this.setState({
									categFood: !this.state.categFood
								})}
								// checked={this.state.}
								checked={this.state.categFood}
								containerStyle={styles.guideTypeCheckbox}
								title='Food'

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

						</View>
						<View style={styles.checkboxCont}>

							<CheckBox onPress={() => this.setState({
								categUrbanExplore: !this.state.categUrbanExplore
							})}
								// checked={this.state.}
								checked={this.state.categUrbanExplore} containerStyle={styles.guideTypeCheckbox}
								title='City Exploration'
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
						</View>

						<View style={styles.checkboxCont}>
							<CheckBox onPress={() => this.setState({
								categTourism: !this.state.categTourism
							})}
								// checked={this.state.}
								checked={this.state.categTourism} containerStyle={styles.guideTypeCheckbox}
								title='Tourism'
							// checked={this.state.checked}
							/>

							<CheckBox onPress={() => this.setState({
								categTourism: !this.state.categTourism
							})}
								// checked={this.state.}
								checked={this.state.categTourism} containerStyle={styles.guideTypeCheckbox}
								title='History'
							// checked={this.state.checked}
							/>

						</View>






					</View>





					<View style={styles.stopsCont}>

						<Text style={styles.stopsTitle}> Add Stops to the Guide </Text>


						<View style={styles.stopRow}>
							<View style={styles.stopInputCont}>
								<Text>Stop Name</Text>

								<TextInput
									style={styles.guideFields}
									value={this.state.stopTitle}
									onChangeText={(stopTitle) => this.setState({ stopTitle })}

								/>
							</View>


							<View style={styles.stopInputContRight}>
								<Text>Stop Address</Text>

								<TextInput
									style={styles.guideFields}
									value={this.state.address}
									onChangeText={(address) => this.setState({ address })}
								/>
							</View>
						</View>



						<View style={styles.stopImgCont}>
							<Button style={styles.choosePhotoButtonStyle} onPress={this.handleChoosePhoto}>
								<Text>Choose Stop Photo</Text>
							</Button>
							<Image
								style={styles.stopImg}
								source={{ uri: this.state.photoUrl }}
							/>
						</View>


						<View style={styles.stopRow}>
							<View style={styles.stopInputCont}>
								<Text>Start Time (ex. "7am")</Text>

								<TextInput
									style={styles.guideFields}
									value={this.state.startTime}
									onChangeText={(startTime) => this.setState({ startTime })}
								/>

							</View>
							<View style={styles.stopInputCont}>
								<Text>End Time (ex. "12pm")</Text>

								<TextInput
									style={styles.guideFields}
									value={this.state.endTime}
									onChangeText={(endTime) => this.setState({ endTime })}
								/>

							</View>
						</View>
						{/* <Button
							style={styles.buttonStyle}
							onPress={this.triggerAddStopActions}
							title="Add Stop"
							color="red"
							accessibilityLabel="Learn more about this purple button"
						/> */}

						<Button success style={styles.addStopButton} onPress={this.triggerAddStopActions}>
							<Text style={styles.buttonText}>Add Stop</Text>


						</Button>

						<Text style={styles.currStopsTitle}>Current Stops Added </Text>

						<ScrollView style={styles.stopsListCont}>
							{this.state.stopsViews}
						</ScrollView>


						{/* pressing on button will add an "stop" object to the stops array
                            1. converts data into object, adds object to the stops array
                            2. clears the fields
                            3. refreshes the "current stop list"

                    
                    
                        */}


						{/* <Button
                            onPress={}
                            title="ADD Photos"
                            color="red"
                            accessibilityLabel="Learn more about this purple button"
                        /> */}

						<Button success style={styles.buttonStyle} onPress={this.submitGuide}>
							<Text style={styles.buttonText}>Submit Guide</Text>
						</Button>



					</View>

				</ScrollView>


			</View>
		);
	}
}

const styles = StyleSheet.create({
	boldedText: {
		fontWeight: 'bold'
	},
	choosePhotoButtonStyle: {
		backgroundColor: 'white',
		height: 30,
		marginLeft: 10,
		marginRight: 35,
		padding: 5
	},
	boldedText: {
		fontSize: 16
	},
	addStopButton: {
		marginBottom: 10,
		marginTop: 10,
		marginLeft: 120,
		borderRadius: 15,
		backgroundColor: '#2E9C08',
		backgroundColor: '#2E9C08',
		backgroundColor: 'grey',
		backgroundColor: '#F67779',
		padding: 10,
		height: 35
	},

	buttonStyle: {
		marginTop: 10,
		marginLeft: 120,
		borderRadius: 15,
		backgroundColor: '#2E9C08',
		backgroundColor: '#2E9C08',
		backgroundColor: 'grey',
		backgroundColor: '#F67779',
		padding: 10,
		height: 35
		// backgroundColor: 'blue'
	},
	buttonText: {
		color: 'white'
	},
	stopsListCont: {
		backgroundColor: '#f4c842',
		height: 60
	},
	stopImgCont: {
		marginTop: 10,
		paddingTop: 5,
		flexDirection: 'row',
		backgroundColor: '#eff0f2',
		marginBottom: 10,
		height: 45
	},
	stopImg: {
		width: 80,
		height: 40,
		marginLeft: 20
		// textAlign: 'center'
	},
	// submitGuideStyle: {
	// 	marginBottom: '500'
	// },

	listItem: {
		height: 25,
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
		backgroundColor: '#eff0f2',
		padding: 10,
		margin: 0
		// width: '45%'
	},
	stopName: {
		width: '40%'
	},
	stopName: {
		padding: 0,
		margin: 0,
		marginLeft: 20,
		marginRight: 10,
		width: '40%'
	},
	stopsListsCont: {
		backgroundColor: '#fdffb5',
		flex: 1,
		flexDirection: 'row',
		height: 100
	},
	listItem: {
		marginTop: 5,
		marginLeft: '2%',
		width: '95%',
		backgroundColor: 'white',
		padding: 5,
		flexDirection: 'row',
		textAlign: 'center'
	},
	currStopsTitle: {
		padding: 10,
		marginTop: 10,
		textAlign: 'center',
		fontWeight: 'bold',
		backgroundColor: '#eff0f2'
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

	guideInfoCont: {
		padding: 15,
		backgroundColor: 'white'
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
		marginRight: '5%'
	},
	stopInputContRight: {
		width: '50%'
	}
	,

	stopType: {
		height: 45
	},
	checkboxCont: {
		flexDirection: 'row'
	},
	guideTypeCheckbox: {
		height: 25,
		padding: 0,
		margin: 0,
		fontSize: 10,
		width: '45%'
	},
	checkBoxFont: {},

	guideFields: {
		height: 25,
		backgroundColor: '#eff0f2',
		padding: 5

	},
	container: {
		paddingBottom: 100
	}

});
