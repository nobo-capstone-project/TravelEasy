/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
	ImageBackground,
	ScrollView,
	StyleSheet,
	Text,
	TouchableHighlight,
	TouchableWithoutFeedback,
	View
} from 'react-native';


import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {withNavigation} from 'react-navigation';
import {Button, Container, Content, Header, Icon, Input, Item, Tab, Tabs,} from 'native-base';
// import {Route} from "../Model/Route";
// import {CardImage, TripCard} from "../Model/TripCard";
// import {routes} from "../Model/Routes";


const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

// import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
// import { console } from 'console';
// import { Tab, Tabs } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
// import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

// import { skyline } from './imgs/singaSky.jpg';

// const allRoutes = routes;
// const allCards: TripCard[] = [];

// allRoutes.getAllRoutes().forEach((r) => {
// 	allCards.push(new TripCard(r));
// });

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this._navigateTo = this._navigateTo.bind(this);
		this._voteUp = this._voteUp.bind(this);
		this._voteDown = this._voteDown.bind(this);

		this.state = {
			// cards: allCards
			// TODO: loading card views from route model -- Rico
			cards: [
				{
					title: 'Singapore Madness',
					desc: 'Singapore is cocktail of the best clubs, the best foods, and the best views in the world. Read more..',
					imgs: [
						{
							url: require('../imgs/singaSky.jpg'),
							title: 'Breakfast'
						},
						{
							url: require('../imgs/singaSky.jpg'),
							title: 'Hiking at Temple'
						},
						{
							url: require('../imgs/singaSky.jpg'),
							title: 'Lunch'
						},
						{
							url: require('../imgs/singaSky.jpg'),
							title: 'Lunch'
						},
						{
							url: require('../imgs/singaSky.jpg'),
							title: 'Lunch'
						}
					],
					vote: 230
				},
				{
					title: 'Singapore Madness',
					desc: 'Singapore is cocktail of the best clubs, the best foods, and the best views in the world. Read more..',
					imgs: [
						{
							url: require('../imgs/singaSky.jpg'),
							title: 'Breakfast'
						},
						{
							url: require('../imgs/singaSky.jpg'),
							title: 'Hiking at Temple'
						},
						{
							url: require('../imgs/singaSky.jpg'),
							title: 'Lunch'
						}
					],
					vote: 100
				}
			]
		}
	}

	_navigateTo() {
		this.props.navigation.navigate('Route');
	}

	_voteUp(index) {
		let stateCopy = Object.assign({}, this.state);
		stateCopy.cards[index].vote += 1;
		this.setState(stateCopy);
	}

	_voteDown(index) {
		let stateCopy = Object.assign({}, this.state);
		stateCopy.cards[index].vote -= 1;
		this.setState(stateCopy);
	}

	render() {
		// console.log('hello');
		console.log(this.props.navigation);

		return (
			<Container style={styles.homeSearch}>
				<Header searchBar rounded style={styles.homeSearch}>
					<Item style={styles.searchBox}>
						<Icon name="ios-search"/>
						<Input placeholder="Search"/>
						{/* <Icon name="ios-people" /> */}
					</Item>
					<Button transparent>
						<Text>Search</Text>
					</Button>
				</Header>

				{/* <Header hasTabs /> */}

				{/* <View style={styles.tabHeader}> */}

				<Tabs tabStyle={{backgroundColor: '#FAD05A'}} locked={true}>

					<Tab style={styles.tab} heading="All">

						{/* --------------------------------------------------------------------*/}
						{/* --------------------- CATEGORIES SECTION -----------------------*/}
						{/* --------------------------------------------------------------------*/}

						<Text style={styles.trendingText}>Trending Today</Text>
						<View style={{
							height: 90,
							shadowColor: "rgba(0, 0, 0, 0.25)",
							shadowOffset: {
								width: 0,
								height: 2
							},
							shadowRadius: 2,
							shadowOpacity: 1
						}}>
							<ScrollView horizontal style={styles.categContainer}>
								<TouchableHighlight style={styles.categView}>
									<View style={{position: 'relative'}}>
										<ImageBackground source={require('../imgs/museum.jpg')}
										           style={{
											           width: 136,
											           height: 90
										           }}/>

										<Text style={{
											position: 'absolute',
											top: 65,
											left: 5,
											color: "white",
											fontWeight: "bold"
										}}>Museum Day</Text>

									</View>
								</TouchableHighlight>

								<TouchableHighlight style={styles.categView}>
									<View style={{position: 'relative'}}>
										<ImageBackground source={require('../imgs/shopping.jpg')}
										           style={{
											           width: 136,
											           height: 90
										           }}/>

										<Text style={{
											position: 'absolute',
											top: 65,
											left: 5,
											color: "white",
											fontWeight: "bold"
										}}>Shopping Festival</Text>
									</View>
								</TouchableHighlight>
								<TouchableHighlight style={styles.categView}>
									<View style={{position: 'relative'}}>
										<ImageBackground source={require('../imgs/park.jpg')}
										           style={{
											           width: 136,
											           height: 90
										           }}/>

										<Text style={{
											position: 'absolute',
											top: 65,
											left: 5,
											color: "white",
											fontWeight: "bold"
										}}>National Park</Text>

									</View>
								</TouchableHighlight>
							</ScrollView>
						</View>

						{/* --------------------------------------------------------------------*/}
						{/* --------------------- GUIDE SECTION -----------------------*/}
						{/* --------------------------------------------------------------------*/}

						{/* <Text style={styles.centerText}>Popular Guides At The Moment: </Text> */}
						<Content style={styles.guideContainer} ref={c => (this.component = c)}>
							<TourCards
								cards={this.state.cards}
								navigateTo={this._navigateTo}
								voteUp={this._voteUp}
								voteDown={this._voteDown}></TourCards>
						</Content>

					</Tab>
					<Tab style={styles.tab} heading="Nearby">
						{/* <Tab2 /> */}
					</Tab>
					<Tab style={styles.tab} heading="Following">
						{/* <Tab2 /> */}
					</Tab>
				</Tabs>

			</Container>
		);
	}
}

class TourCards extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.cards);
		return (
			<View>
				{this.props.cards.map((card, i) => {
					return <TourCard card={card}
					                 key={i}
					                 navigateTo={this.props.navigateTo}
					                 voteUp={this.props.voteUp}
					                 voteDown={this.props.voteDown}
					                 index={i}></TourCard>
				})}
			</View>
		)
	}
}


class TourCard extends React.Component {
	constructor(props) {
		super(props);
		this._onPressUp = this._onPressUp.bind(this);
		this._onPressDown = this._onPressDown.bind(this);
		this.state = {
			buttomUp: false,
			buttomDowm: false
		}
	}

	_onPressUp() {
		this.setState({
			buttomUp: true
		});
		this.props.voteUp(this.props.index);
	}

	_onPressDown() {
		this.setState({
			buttomDowm: true
		});
		this.props.voteDown(this.props.index);
	}

	render() {
		return (
			<View style={styles.dayGuide}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 5}}>
					<Text style={styles.guideTitle} onPress={this.props.navigateTo}>{this.props.card.title}</Text>
					<Button success style={styles.addPlanButton}>
						<Text style={styles.addPlanText}>Add to Plans</Text>
					</Button>
				</View>

				<View style={{ margin: 5 }}>
					<Text style={{ color: '#424242', lineHeight: 16 }}>{this.props.card.desc}</Text>
				</View>

				{/* ------------------------------------------------ */}
				{/* pictures of the stops in this day guide */}
				{/* ------------------------------------------------ */}
				<Gallery imgs={this.props.card.imgs}></Gallery>
				<View
					style={{
						borderBottomColor: '#bdbdbd',
						borderBottomWidth: 0.5,
						marginTop: 4,
						marginBottom: 4
					}}
				/>
				<View style={styles.guideActionsCont}>
					<View style={{ flexDirection: 'row', marginTop: 0 }}>
						<TouchableWithoutFeedback
							disabled={this.state.buttomUp}
							onPress={this._onPressUp}>
							<FontAwesomeIcon icon={faArrowUp} style={{ color: 'black', marginRight: 5, marginTop:0 }} />
						</TouchableWithoutFeedback>
						<Text style={{
							fontSize: 13,
							// fontWeight: "900",
							fontStyle: "normal",
							color: "black"
						}}>{this.props.card.vote}</Text>
						<TouchableWithoutFeedback
							disabled={this.state.buttomDowm}
							onPress={this._onPressDown}>
							<FontAwesomeIcon icon={faArrowDown} style={{color: 'black', marginLeft: 5}}/>
						</TouchableWithoutFeedback>
					</View>

					<Button style={{backgroundColor: 'white', height: 30}} onPress={this.props.navigateTo}>
						<Text>Read More</Text>
					</Button>
				</View>
			</View>
		)
	}
}


class Gallery extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.imgs);
		return (
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}>
				<View style={{flexDirection: 'row', marginBottom: 5}}>
					{this.props.imgs.map((img, i) => {
						return (
							<TouchableHighlight style={styles.stopViews} key={i}>
								<View>
									{console.log(img.url)}
									<ImageBackground source={img.url}
									                 style={{
										                 width: 100,
										                 height: 70
									                 }}>
									</ImageBackground>
								</View>
							</TouchableHighlight>
						);
					})}
				</View>
			</ScrollView>
		);
	}
}


export default withNavigation(HomePage);

const styles = StyleSheet.create({
	// stopImg: {
	//     width: 30,
	//     height: 30
	// },
	// voteArrows: {
	//     height: 50
	// },
	guideAction: {
		width: '33%',
		height: 30,
	},
	guideActionsCont: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		// marginBottom: 2
	},
	upvAndDownv: {
		flexDirection: 'row'
	},
	salesPitch: {
		fontWeight: 'bold'
	},
	nameOfStop: {
		backgroundColor: 'rgba(229, 230, 232,.3)'
	},
	stopViews: {
		height: 70,
		width: 100,
		backgroundColor: 'white',
		margin: 3,
		fontFamily: 'Helvetica'
		// padding: 3
	},
	guideContainer: {
		backgroundColor: '#F6F8FC',
		height: 100,
		marginTop: 20
	},
	dayGuide: {
		marginTop: 2,
		padding: 10,
		backgroundColor: '#FFFFFF',
		// height: 180,
		marginBottom: 10,
		width: "100%",
		shadowColor: "rgba(0, 0, 0, 0.25)",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 2,
		shadowOpacity: 1,
		paddingBottom: 0
	},
	addPlanButton: {
		width: 90,
		height: 30,
		borderRadius: 15,
		backgroundColor: '#F67779',
		marginRight: 15,
	},
	addPlanText: {
		// marginLeft: 5
		textAlign: 'center',
		width: '100%',
		fontFamily: 'Helvetica',
		fontWeight: '400',
		fontSize: 12,
		color: 'white',
	},
	guideTitle: {
		fontWeight: "500",
		fontSize: 18,
		color: "#424242",
		marginTop: 3,
	},

	trendingText: {
		textAlign: 'left',
		fontSize: 12,
		fontWeight: '500',
		paddingTop: 6,
		paddingBottom: 6,
		backgroundColor: "#FFF",
		marginTop: 6,
		paddingLeft: 16,
		color: '#666666',
		fontFamily: 'Helvetica'
	},
	categContainer: {
		// backgroundColor: 'red',
		backgroundColor: 'white',

		height: 50,
		// margin: 0,
		paddingBottom: 100,
		// flex: 1,
		// flexDirection: 'row'
		width: "100%"

	},
	categView: {
		width: 136,
		height: 90,
		backgroundColor: '#FAD05A',
		marginBottom: 10,
		// marginTop: 10,
		marginLeft: 10,
		paddingBottom: 10

		// flex: .33,
		// // flexDirection: 'row',
		// marginRight: 7,
		// height: 75,
		// backgroundColor: 'red'
	},

	tab: {
		backgroundColor: '#F6F8FC'
	},
	homeSearch: {
		backgroundColor: '#FAD05A'
	},
	searchBox: {
		backgroundColor: '#FFFFFF'
	},

	container: {
		// paddingTop: 200
		margin: 0,
		padding: 0
	},
	footer: {
		position: 'absolute',
		bottom: 0
	},

	tabs: {
		// marginTop: 0,
		backgroundColor: 'red',
		height: 10,
		margin: 0,
		padding: 0

	},
	categoryButton: {
		backgroundColor: 'red'
	},
	tabHeader: {
		height: '515%',
		backgroundColor: 'red'
	},
	categName: {
		color: "white",
		fontWeight: "bold",
		paddingTop: 65,
		paddingLeft: 10,
		fontFamily: 'Helvetica'
	}
});
