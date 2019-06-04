import React from "react";
import {ImageBackground, ScrollView, TouchableHighlight, View} from "react-native";
import {styles} from "./Stylesheet";

export class Gallery extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}>
				<View style={{flexDirection: 'row', marginBottom: 5}}>
					{this.props.imgs.map((img, i) => {
						return (
							<TouchableHighlight style={styles.stopViews} key={i}>
								<View>
									<ImageBackground
										source={{uri: img.url}}
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