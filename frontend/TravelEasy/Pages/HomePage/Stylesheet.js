import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
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