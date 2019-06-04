/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
	Alert,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowDown, faArrowUp, faChevronLeft, faEllipsisH, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import SvgUri from 'react-native-svg-uri';
import {Route} from "../Model/Route";


const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

function assembleStops(route: Route): [] {
	let result = [];
	route.stops.forEach((s) => {
		result.push({
			title: s.stopName,
			price: s.price,
			time: s.timeSpent + " hour(s)",
			desc: s.description
		})
	});

	return result;
}

export default class RoutePage extends React.Component {
	constructor(props) {
		super(props);
		this.updateComments = this.updateComments.bind(this);
		this.navigateTo = this.navigateTo.bind(this);

		const route: Route = props.navigation.getParam('route');
		const stops = assembleStops(route);

		this.state = {
			//tags: ['Campus', 'Seattle', 'University', "Historic"],
			tags: Array.from(route.category),
			stops: stops,
			// stops: [
			// 	{
			// 		title: "Suzzallo Library",
			// 		price: "Free",
			// 		time: "30mins ~ 1hrs",
			// 		desc: 'Suzzallo Library is the central library of the University of Washington in Seattle, and perhaps the most recognizable building on campus. The Grand Reading Room is also affectionately called “the Harry Porter Room.”'
			// 	},
			// 	{
			// 		title: "The Quad",
			// 		price: "Free",
			// 		time: "30mins ~ 1hrs",
			// 		desc: 'The main quadrangle at the University of Washington in Seattle, Washington. Lined up with thirty Yoshino cherry trees, which blossom between mid-March and early April.Raitt Hall and Savery Hall frame the northwestern boundary while Gowen, Smith, and Miller Halls frame the southeast. At the top of the quad sits the latest buildings on the quad, the Art and Music Buildings'
			// 	},
			// 	{
			// 		title: "Drumheller Fountain",
			// 		price: "Free",
			// 		time: "30mins ~ 1hrs",
			// 		desc: 'Drumheller Fountain, also known as Frosh Pond, is an outdoor fountain on the University of Washington. Students jump down here to celebrate their graduation.'
			// 	}
			// ],
			comments: [
				{
					user: "yourseattletourvisitors",
					time: "2019-04-23T18:25:43.511Z",
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				},
				{
					user: "yourseattletourvisitors",
					time: "2018-04-23T18:25:43.511Z",
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				},
				{
					user: "yourseattletourvisitors",
					time: "2017-04-23T18:25:43.511Z",
					content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
				}
			]
		};
	}

	updateComments(newComment) {
		// this.setState({
		//   someVar: someValue
		// })

		this.setState(prevState => ({
			comments: [newComment, ...prevState.comments]
		}))
	}


	navigateTo() {
		this.props.navigation.navigate('Home');
	}

	render() {
		return (
			<ScrollView>
				<RouteHeader navigateTo={this.navigateTo}></RouteHeader>
				<View style={{backgroundColor: '#F3F7FF'}}>
					<RouteIntro tags={this.state.tags}></RouteIntro>
					<RouteDetail stops={this.state.stops}></RouteDetail>
				</View>
				<PostComment update={this.updateComments}></PostComment>
				{/*{console.log(this.state.comments)}*/}
				<RouteComments comments={this.state.comments}></RouteComments>
			</ScrollView>
		);
	}
}

class RouteHeader extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props.navigation);
		return (
			<View>
				<View style={styles.cover}>
					<Image source={require('../imgs/cover.jpg')} style={styles.cover_img}/>
					<View style={styles.topLeftBottom}>
						<TouchableWithoutFeedback onPress={this.props.navigateTo}>
							<View style={{flexDirection: 'row', marginTop: 10}}>
								<FontAwesomeIcon icon={faChevronLeft} style={{color: 'black', marginRight: 5}}/>
								<Text style={{
									width: 77,
									height: 23,
									fontSize: 14,
									fontWeight: "500",
									fontStyle: "normal",
									color: "#000000"
								}}>Explore</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>
					<View style={styles.topRightBottom}>
						<FontAwesomeIcon icon={faEllipsisH} style={{color: 'black'}}/>
					</View>
					<View style={styles.coverHeader}>
						<Text style={styles.coverTextH1}>
							University of Washington 1-Day Tour
						</Text>
						<View style={{flexDirection: 'row', marginTop: 10}}>
							<FontAwesomeIcon style={{color: 'white', marginRight: 5}} icon={faMapMarkerAlt}/>
							<Text style={styles.coverTextH2}>
								University of Washington
							</Text>
						</View>
					</View>
					<View style={styles.coverVote}>
						<View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
							<FontAwesomeIcon icon={faArrowUp} style={{color: 'white', marginRight: 5}}/>
							<Text style={{
								fontSize: 18,
								fontWeight: "900",
								fontStyle: "normal",
								color: "#ffffff"
							}}>23,880</Text>
							<FontAwesomeIcon icon={faArrowDown} style={{color: 'white', marginLeft: 5}}/>
						</View>
						<View style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'center'
							// alignItems: 'flex-end'
						}}>
							<View style={{flexDirection: 'column', alignItems: 'center'}}>
								{/* <SvgUri width="21" height="21" source={require('../imgs/like.svg')} /> */}
								<SvgUri width="21" height="21" source={require('../imgs/share.svg')}/>
								<Text style={{
									fontSize: 10,
									fontWeight: "900",
									fontStyle: "normal",
									color: "#ffffff",
									marginTop: 1
								}}>SHARE</Text>
							</View>
							<View style={{flexDirection: 'column', alignItems: 'center', marginLeft: 20}}>
								{/* <FontAwesomeIcon icon={faHeart} style={styles.coverIcon}></FontAwesomeIcon> */}
								<SvgUri width="21" height="21" source={require('../imgs/favorites.svg')}/>
								<Text style={{
									fontSize: 10,
									fontWeight: "900",
									fontStyle: "normal",
									color: "#ffffff",
									marginTop: 1
								}}>LIKE</Text>
							</View>
						</View>
					</View>

				</View>
			</View>
		);
	}
}

class RouteIntro extends React.Component {
	constructor(props) {
		super(props);
	}

	_follow() {
		Alert.alert('You tapped the button!')
	}

	render() {
		// console.log(this.props.tags);
		return (
			<View>
				<View style={styles.introView}>
					<View>
						<Image source={require('../imgs/user.png')} style={styles.userImg}/>
					</View>
					<View style={{flex: 1, flexDirection: 'column', marginLeft: 5}}>
						<Text style={styles.bioText}>yourseattletourguide</Text>
						<Text style={styles.bioText}>1 yr ago</Text>
						<Text style={styles.bioText}>Diamond Guide</Text>
					</View>
					<View>
						<TouchableOpacity onPress={this._onPressButton}>
							<View style={styles.button}>
								<Text style={styles.buttonText}>+ FOLLOW</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.description}>
					<Text style={styles.descriptionText}>University of Washington is the top university in Washington state, founded in 1861. It is also famous for the cherry blossom view and many aesthetically appealing buildings.
					</Text>
					<View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
						<Text style={styles.descriptionText}>$$</Text>
						<Image source={require('../imgs/time.png')} style={styles.iconImg}/>
						<Text style={styles.descriptionText}>1 ~ 3 hrs</Text>
					</View>
					<View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
						{this.props.tags.map((tag, i) => {
							return (
								<View style={styles.tag} key={i}>
									<Text style={styles.tagText} key={i}>{tag}</Text>
								</View>)
						})}

					</View>
				</View>
			</View>
		);
	}
}

class RouteDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		// console.log(this.props.stops);
		return (
			<View style={{flex: 1, flexDirection: 'column', alignItems: 'center', marginTop: 10, marginBottom: 10}}>
				{this.props.stops.map((stop, i) => {
					return (
						<StopCard stop={stop} key={i}></StopCard>
					)
				})}
			</View>
		);
	}
}

class StopCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isSelected: false,
			icons: {
				right: require("../imgs/arrow-right.svg"),
				down: require("../imgs/arrow-down.svg")
			}
		};
		this._onPress = this._onPress.bind(this);
	}

	_renderDetail() {
		return (
			<View>
				<View style={{flex: 1, flexDirection: 'row'}}>
					<Text style={styles.descriptionTagText}>{this.props.stop.price}</Text>

					<Image source={require('../imgs/time.png')} style={styles.iconImg}/>
					<Text style={styles.descriptionTagText}>{this.props.stop.time}</Text>
				</View>
				<Text style={[styles.descriptionText, {marginBottom: 10}]}>{this.props.stop.desc}</Text>
			</View>
		)
	}

	_onPress() {
		this.setState((prevState) => ({
			isSelected: !prevState.isSelected
		}));
	}

	render() {
		let iconSource;
		if (this.state.isSelected) {
			iconSource = require("../imgs/arrow-down.svg");
		} else {
			iconSource = require("../imgs/arrow-right.svg");
		}
		return (
			<View style={{width: '100%'}}>
				<View style={styles.card}>
					<TouchableWithoutFeedback onPress={this._onPress}>
						<View style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'flex-end'
						}}>
							<Text style={{
								fontSize: 14,
								fontWeight: "500",
								fontStyle: "normal",
								color: "#6d6d6d",
								flex: 1
							}}>{this.props.stop.title}</Text>
							<SvgUri width="14" height="14" source={iconSource}/>
						</View>
					</TouchableWithoutFeedback>
					{this.state.isSelected && this._renderDetail()}
				</View>
			</View>
		);
	}
}

class RouteComments extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let len = this.props.comments.length;
		let saperateLine = function (i) {
			if (i != len - 1) {
				return (<View
						style={{
							borderBottomColor: '#666666',
							borderBottomWidth: 0.3,
							borderStyle: "solid",
							marginBottom: 5,
							marginTop: 5
						}}
					/>
				)
			}
		};

		return (
			<View style={{
				flex: 1,
				flexDirection: 'column',
				alignItems: 'center',
				marginTop: 10,
				marginBottom: 10,
				marginLeft: 15,
				marginRight: 15
			}}>
				{this.props.comments.map((comment, i) => {
					return (
						<View>
							<CommentCard comment={comment} key={i}></CommentCard>
							{saperateLine(i)}
						</View>
					)
				})}
			</View>
		);
	}
}

class CommentCard extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let date = new Date(this.props.comment.time);
		let now = new Date(Date.now());
		let sec_num = Math.abs(now.getTime() - date.getTime()) / 1000;

		let days = Math.floor(sec_num / (3600 * 24));
		let hours = Math.floor((sec_num - (days * (3600 * 24))) / 3600);
		let minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60);
		let seconds = Math.floor(sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60));
		console.log(days + "d" + hours + "hr" + minutes + "m" + seconds + "s");

		let diff = '';

		if (days != 0) {
			diff = days + 'd';
		} else if (hours != 0) {
			diff = hours + 'hr';
		} else if (minutes != 0) {
			diff = minutes + 'min';
		} else {
			diff = seconds + 's';
		}

		return (
			<View style={{width: window.width - 30}}>
				<Text style={styles.username}>{this.props.comment.user} {diff} ago</Text>
				<Text style={styles.commentText}>{this.props.comment.content}</Text>
			</View>

		);
	}
}

class PostComment extends React.Component {

	// _onSubmitEdit() {
	//     // whatever you want to do on submit
	// }
	constructor(props) {
		super(props);
		this.state = {
			user: 'user1',
			time: '',
			content: ''
		};
		this._onPress = this._onPress.bind(this);
	}

	_onPress() {
		if (this.state.content.length != 0) {
			this.textInput.clear();
			let updateComments = this.props.update;
			updateComments(this.state);
		}
	}

	render() {
		return (
			<View style={{marginTop: 10}}>
				<Text style={{
					marginLeft: 15,
					fontSize: 14,
					fontWeight: "500",
					fontStyle: "normal",
					color: "#666666"
				}}>Your comment:</Text>
				<View style={{flexDirection: 'column', alignItems: 'center'}}>
					<TextInput
						style={styles.textInput}
						placeholder="Type here"
						editable={true}
						multiline={true}
						maxLength={200}
						onChangeText={(content) => this.setState({
							content: content,
							time: new Date(Date.now()).toString()
						})}
						ref={input => {
							this.textInput = input
						}}
					/>
					<TouchableHighlight style={styles.commentSubmit} onPress={() => this._onPress()}>
						<Text style={styles.commentSubmitText}>Submit</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		// paddingTop: 200
	},
	cover: {
		position: 'relative'
	},
	topLeftBottom: {
		position: 'absolute',
		top: 34,
		left: 15
	},
	topRightBottom: {
		position: 'absolute',
		top: 36,
		right: 15
	},
	coverHeader: {
		position: 'absolute',
		top: 143,
		left: 15
	},
	coverTextH1: {
		fontSize: 20,
		fontWeight: "500",
		fontStyle: "normal",
		color: "#ffffff",
		fontFamily: 'Helvetica'
	},
	coverTextH2: {
		fontSize: 15,
		fontWeight: "500",
		fontStyle: "normal",
		color: "#ffffff",
		fontFamily: 'Helvetica'
	},
	coverVote: {
		position: 'absolute',
		top: 205,
		left: 15,
		flex: 1,
		flexDirection: 'row'
	},
	cover_img: {
		flex: 1,
		height: 245,
		width: "100%",
		resizeMode: "cover"
	},
	coverIcon: {
		width: 21,
		height: 21,
		color: 'white',
		marginBottom: 2
	},
	userImg: {
		height: 70,
		width: 70,
		borderRadius: 70 / 2
	},
	button: {
		width: 93,
		height: 27,
		backgroundColor: '#F67779',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6
	},
	buttonText: {
		color: 'white',
		fontSize: 10,
		fontWeight: "500",
		fontFamily: 'Helvetica'
		// fontFamily: "Roboto"
	},
	bioText: {
		// fontFamily: "Roboto",
		fontSize: 12,
		fontWeight: "500",
		fontStyle: "normal",
		color: "#757575",
		fontFamily: 'Helvetica'
	},
	introView: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 15,
		marginRight: 10,
		marginTop: 10
	},
	description: {
		margin: 10,
		marginLeft: 15,
		marginRight: 15,
		
	},
	descriptionText: {
		// fontFamily: "Roboto",
		fontSize: 13,
		fontWeight: "400",
		fontStyle: "normal",
		color: "#6d6d6d",
		fontFamily: 'Helvetica',
		marginTop: 6
	},

	descriptionTagText: {
		fontSize: 12,
		fontWeight: "normal",
		fontStyle: "normal",
		color: "#928F8F",
		fontFamily: 'Helvetica',
		marginTop: 6

	},
	iconImg: {
		width: 16,
		height: 16,
		opacity: 0.5,
		marginLeft: 20,
		marginRight: 5,
		marginTop: 5
	},
	tag: {
		marginRight: 10,
		paddingLeft: 5,
		paddingRight: 5,
		height: 22,
		borderRadius: 2,
		backgroundColor: "#5893d4",
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	tagText: {
		fontSize: 12,
		fontWeight: "normal",
		fontStyle: "normal",
		color: "#ffffff",
		fontFamily: 'Helvetica'
	},
	card: {
		marginLeft: 15,
		marginRight: 15,
		borderRadius: 4,
		backgroundColor: "#ffffff",
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 2,
		shadowOpacity: 1,
		borderStyle: "solid",
		borderWidth: 0.3,
		borderColor: "#666666",
		padding: 10,
		marginBottom: 10
	},
	textInput: {
		height: 70,
		width: window.width - 30,
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 4,
		backgroundColor: "#ffffff",
		borderStyle: "solid",
		borderWidth: 0.3,
		borderColor: "#666666",
		padding: 10,
		fontFamily: 'Helvetica',
		fontSize: 12,
		color: "#6d6d6d",
	},
	commentSubmit: {
		width: 93,
		height: 27,
		backgroundColor: '#F67779',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 6
	},
	commentSubmitText: {
		color: 'white',
		fontSize: 12,
		fontWeight: "400",
		fontStyle: "normal",
		fontFamily: 'Helvetica'
	},
	commentText: {
		fontSize: 12,
		fontWeight: "300",
		fontStyle: "normal",
		color: "#6d6d6d",
		marginBottom: 5,
		fontFamily: 'Helvetica'
	},
	username: {
		fontSize: 13,
		fontWeight: "500",
		fontStyle: "normal",
		color: "#6d6d6d",
		marginBottom: 5,
		fontFamily: 'Helvetica'
	}
});