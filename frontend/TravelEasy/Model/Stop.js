const moment = require("moment");

const STOP_TYPES = {
	Academic: "Academic",
	Cultural: "Cultural",
	Natural: "Natural",
	Park: "Park",
	Food: "Food",
	Historic: "Historic"
};

class Stops {

	constructor() {
		this.stops = [
			{
				StopID: 1,
				OrderID: 1,
				Lat: 47.657821,
				Long: -122.311223,
				StopName: "The most beautiful entrance to UW Seattle Campus",
				LocationName: "Parrington Lawn",
				Description: "An open space located north and west of Parrington Hal",
				Address: "Parrington Lawn, Seattle, WA 98105",
				Type: [STOP_TYPES.Natural, STOP_TYPES.Park],
				TimeSpent: 0.1,
				Picture: ["https://facilities.uw.edu/blog/files/styles/text_wrap/public/media/Northern%20Red%20Oak%20Blog.jpg"],
				ADA: true,
				StartTime: undefined,
				EndTime: undefined,
			},
			{
				StopID: 2,
				OrderID: 2,
				Lat: 47.659124,
				Long: -122.310963,
				StopName: "University of Washington LAW School",
				LocationName: "William H. Gates Hall",
				Description: "It is the LAW school with capitalized letters",
				Address: "William H. Gates Hall (LAW), Seattle, WA 98105",
				Type: [STOP_TYPES.Academic],
				TimeSpent: 1,
				Picture: ["https://www.law.uw.edu/media/1151/clinics.jpg"],
				ADA: true,
				StartTime: undefined,
				EndTime: undefined,
			},
			{
				StopID: 3,
				OrderID: 3,
				Lat: 47.658427,
				Long: -122.308957,
				StopName: "University of Washington Department of Anthropology",
				LocationName: "Denny Hall",
				Description: "One of the most historic building on the Seattle Campus",
				Address: "Denny Hall (DEN), Spokane Ln, Seattle, WA 98105",
				Type: [STOP_TYPES.Academic],
				TimeSpent: 0.5,
				Picture: ["https://upload.wikimedia.org/wikipedia/commons/7/77/Denny_Hall.jpg"],
				ADA: true,
			},
			{
				StopID: 4,
				OrderID: 4,
				Lat: 47.656815,
				Long: -122.305715,
				StopName: "University of Washington School of International Studies",
				LocationName: "The Henry M. Jackson School",
				Description: "The Henry M. Jackson School of International Studies is an internationally recognized leader in advancing the understanding of and engagement in world issues.",
				Address: "400 Thomson Hall, Seattle, WA 98195",
				Type: [STOP_TYPES.Academic, STOP_TYPES.Historic],
				TimeSpent: 0.5,
				Picture: ["http://www.historylink.org/Content/Media/Photos/Small/Seattle_JacksonSchool_thomson-hall.jpg"],
				ADA: true,
			},
			{
				StopID: 5,
				OrderID: 5,
				Lat: 47.655193,
				Long: -122.305136,
				StopName: "A department within the Division of Student Life",
				LocationName: "Husky Union Building",
				Description: "The Husky Union Building (HUB) is committed to providing services to UW students, staff, faculty, and invited guests.",
				Address: "400 Thomson Hall, Seattle, WA 98195",
				Type: [STOP_TYPES.Academic, STOP_TYPES.Food],
				TimeSpent: 0.5,
				Picture: ["https://green.uw.edu/blog/sites/default/files/Husky_Union_Building.jpg"],
				ADA: true,
			},
			{
				StopID: 6,
				OrderID: 6,
				Lat: 47.655776,
				Long: -122.307978,
				StopName: "One of the most famous library in the world",
				LocationName: "Suzzallo and Allen Libraries",
				Description: "The University of Washington's central library, built in Collegiate Gothic style, with guided tours.",
				Address: "400 Thomson Hall, Seattle, WA 98195",
				Type: [STOP_TYPES.Academic, STOP_TYPES.Historic, STOP_TYPES.Cultural],
				TimeSpent: 1,
				Picture: ["https://americanlibrariesmagazine.org/wp-content/uploads/2018/11/btn-suzzallo.jpg"],
				ADA: true,
			},
			{
				StopID: 7,
				OrderID: 7,
				Lat: 47.656015,
				Long: -122.309513,
				StopName: "Officially Central Plaza, the Red Square",
				LocationName: "Red Square",
				Description: "Red Square, officially Central Plaza, is a large open square on the Seattle campus of the University of Washington that serves as a hub for two of the University's major axes, connecting the campus's northern Liberal Arts Quadrangle with the science and engineering buildings found on the lower campus.",
				Address: "4063 Spokane Ln, Seattle, WA 98105",
				Type: [STOP_TYPES.Academic, STOP_TYPES.Historic, STOP_TYPES.Cultural],
				TimeSpent: 1,
				Picture: ["https://southseattleemerald.files.wordpress.com/2017/04/uw-red-square.jpg"],
				ADA: true,
			}
		];
	}

	addStop(stop) {
		this.stops.push(stop);
	}

	getAllStops() {
		return this.stops;
	}

	getStopByID(id) {
		for (let i = 0; i < this.stops.length; i++) {
			if (this.stops[i]["StopID"] === id) {
				return this.stops[i];
			}
		}
		// not found
		return null;
	}
}

class StopUtil {
	static setStopTime(stop) {
		this.currentTime = moment();
		const timeSpent = stop["TimeSpent"];

		stop["StartTime"] = this.currentTime.utc().local();
		stop["EndTime"] = moment(stop["StartTime"]).add(timeSpent, 'minutes').utc().local();

		return stop;
	}
}

// let model = new Stops();
// let stops = model.getAllStops()[0];
// let stop = model.getStopByID(1);
// console.log(stop);
// // let stopUtils = new StopUtils();
// console.log(StopUtil.setStopTime(stop));