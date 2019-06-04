/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {ImageBackground, ScrollView, Text, TouchableHighlight, View} from 'react-native';
import {withNavigation} from 'react-navigation';
import {Button, Container, Content, Header, Icon, Input, Item, Tab, Tabs,} from 'native-base';
import {Route} from "../../Model/Route";
import {TripCard} from "../../Model/TripCard";
import {allRoutes} from "../../Model/Data";
import {styles} from "./Stylesheet";
import {TourCards} from "./TourCard";

const allCards: TripCard[] = [];
// const testCards = [
// 	{
// 		title: 'Singapore Madness',
// 		desc: 'Singapore is cocktail of the best clubs, the best foods, and the best views in the world. Read more..',
// 		imgs: [
// 			{
// 				url: require('../imgs/singaSky.jpg'),
// 				title: 'Breakfast'
// 			},
// 			{
// 				url: require('../imgs/singaSky.jpg'),
// 				title: 'Hiking at Temple'
// 			},
// 			{
// 				url: require('../imgs/singaSky.jpg'),
// 				title: 'Lunch'
// 			},
// 			{
// 				url: require('../imgs/singaSky.jpg'),
// 				title: 'Lunch'
// 			},
// 			{
// 				url: require('../imgs/singaSky.jpg'),
// 				title: 'Lunch'
// 			}
// 		],
// 		vote: 230
// 	},
// 	{
// 		title: 'Singapore Madness',
// 		desc: 'Singapore is cocktail of the best clubs, the best foods, and the best views in the world. Read more..',
// 		imgs: [
// 			{
// 				url: require('../imgs/singaSky.jpg'),
// 				title: 'Breakfast'
// 			},
// 			{
// 				url: require('../imgs/singaSky.jpg'),
// 				title: 'Hiking at Temple'
// 			},
// 			{
// 				url: require('../imgs/singaSky.jpg'),
// 				title: 'Lunch'
// 			}
// 		],
// 		vote: 100
// 	}
// ];

console.log("1221323123123")
allRoutes.getAllRoutes().forEach(function (r) {
	console.log("pushed card:",r.routeName);
	allCards.push(new TripCard(r));
});

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this._navigateTo = this._navigateTo.bind(this);
		this._voteUp = this._voteUp.bind(this);
		this._voteDown = this._voteDown.bind(this);

		console.log(allCards)
		this.state = {
			cards: allCards
		}
	}

	_navigateTo(index) {
		console.log("navigating...");
		let stateCopy = Object.assign({}, this.state);
		
		console.log(stateCopy.cards[index])
		
		let route = stateCopy.cards[0].route;

		this.props.navigation.navigate('Route', {
			route: route,
		});
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
										<ImageBackground source={require('../../imgs/mtmuseum4.jpg')}
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
										<ImageBackground source={require('../../imgs/shopping.jpg')}
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
										<ImageBackground source={require('../../imgs/park.jpg')}
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
								voteDown={this._voteDown}/>
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


export default withNavigation(HomePage);

