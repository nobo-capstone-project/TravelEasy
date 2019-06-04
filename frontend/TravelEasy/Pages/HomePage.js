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
import {Container, Content, Header, Icon, Input, Item, Tab, Tabs,} from 'native-base';
import {TripCard} from "../Model/TripCard";
import {allRoutes} from "../Model/Data";
import {styles} from "./Stylesheets/HomePageStyles";
import {TourCards} from "./TourCard";

const allCards: TripCard[] = [];
allRoutes.getAllRoutes().forEach(function (r) {
	allCards.push(new TripCard(r));
});

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this._navigateTo = this._navigateTo.bind(this);
		this._voteUp = this._voteUp.bind(this);
		this._voteDown = this._voteDown.bind(this);
		this._selectCategory = this._selectCategory.bind(this);
		this._filterCard = this._filterCard.bind(this);

		this.state = {
			cards: allCards,
			searchText: '',
			categories: [
				{
					category: 'Museum Day',
					img: require('../imgs/mtmuseum4.jpg')
				},
				{
					category: 'Shopping Festival',
					img: require('../imgs/shopping.jpg')
				},
				{
					category: 'National Park',
					img: require('../imgs/park.jpg')
				}
			],
		}
	}

	_navigateTo() {
		console.log("this.props:", this.props);
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

	_selectCategory(value) {
		let newCard = allCards.filter((e) => {
			if (e.category === value) {
				return e;
			}
		});
		console.log(newCard);
		this.setState({
			searchText: value,
			cards: newCard
		});
	}

	_filterCard(value) {
		this.setState({searchText: value});
		if (this.state.searchText.length === 1) {
			this.setState({
				cards: allCards
			})
		}
	}

	render() {
		// console.log('hello');
		// console.log(this.props.navigation);

		return (
			<Container style={styles.homeSearch}>
				<Header searchBar rounded style={styles.homeSearch}>
					<Item style={styles.searchBox}>
						<Icon name="ios-search"/>
						<Input
							placeholder='Search'
							onChangeText={value => {
								this._filterCard(value);
							}}
							value={this.state.searchText}/>
						{/* <Icon name="ios-people" /> */}
					</Item>
				</Header>

				{/* <Header hasTabs /> */}

				{/* <View style={styles.tabHeader}> */}

				<Tabs
					tabStyle={{backgroundColor: '#FAD05A'}}
					locked={true}
					tabBarUnderlineStyle={{backgroundColor: '#F67779'}}>

					<Tab
						style={styles.tab}
						heading="All"
						activeTextStyle={{color: '#F67779'}}>

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
								{this.state.categories.map((e, i) => {
									return (
										<TouchableHighlight style={styles.categView} key={i}
										                    onPress={() => this._selectCategory(e.category)}>
											<View style={{position: 'relative'}}>
												<ImageBackground source={e.img}
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
												}}>{e.category}</Text>

											</View>
										</TouchableHighlight>
									);
								})}
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
					<Tab
						style={styles.tab}
						heading="Nearby"
						activeTextStyle={{color: '#F67779'}}>
						{/* <Tab2 /> */}
					</Tab>
					<Tab
						style={styles.tab}
						heading="Following"
						activeTextStyle={{color: '#F67779'}}>
						{/* <Tab2 /> */}
					</Tab>
				</Tabs>

			</Container>
		);
	}
}


export default withNavigation(HomePage);

