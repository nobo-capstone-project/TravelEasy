import React from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "./Stylesheet";
import {Button} from "native-base";
import {Gallery} from "./Gallery";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowDown, faArrowUp} from "@fortawesome/free-solid-svg-icons";

export class TourCards extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
				{this.props.cards.map((card, i) => {
					return <TourCard
						card={card}
						key={i}         // <
						navigateTo={this.props.navigateTo}
						voteUp={this.props.voteUp}
						voteDown={this.props.voteDown}
						index={i}/>     // <
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

				<View style={{margin: 5}}>
					<Text style={{color: '#424242', lineHeight: 16}}>{this.props.card.desc}</Text>
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
					<View style={{flexDirection: 'row', marginTop: 0}}>
						<TouchableWithoutFeedback
							disabled={this.state.buttomUp}
							onPress={this._onPressUp}>
							<FontAwesomeIcon icon={faArrowUp} style={{color: 'black', marginRight: 5, marginTop: 0}}/>
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