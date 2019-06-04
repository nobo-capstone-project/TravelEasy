import {Stop, STOP_TYPES} from "./Stop";
import {Route} from "./Route";
import {Routes} from "./Routes";

export const stopParrington = new Stop(
	1,
	1,
	47.657821,
	-122.311223,
	"Free",
	"The most beautiful entrance to UW Seattle Campus",
	"Parrington Lawn",
	"An open space located north and west of Parrington Hall.",
	"Parrington Lawn, Seattle, WA 98105",
	[STOP_TYPES.Natural, STOP_TYPES.Park],
	0.1,
	["https://facilities.uw.edu/blog/files/styles/text_wrap/public/media/Northern%20Red%20Oak%20Blog.jpg"],
	true,
	undefined,
	undefined
);
export const stopLaw = new Stop(
	// stopID, should be unique, but no one cares
	2,
	// orderID, the order of the stop in a route
	2,
	// lat
	47.659124,
	// long
	-122.310963,
	// price,
	"Free",
	// stopName
	"University of Washington LAW School",
	// locationName
	"William H. Gates Hall",
	// description
	"It is the LAW school with capitalized letters.",
	// address
	"William H. Gates Hall (LAW), Seattle, WA 98105",
	// type, in an array, can be any string
	[STOP_TYPES.Academic],
	// timeSpent, in hours
	1,
	// URLs to images
	["https://www.law.uw.edu/media/1151/clinics.jpg"],
	// ADA?
	true,
);
export const stopDenny = new Stop(
	3,
	3,
	47.658427,
	-122.308957,
	"Free",
	"University of Washington Department of Anthropology",
	"Denny Hall",
	"One of the most historic building on the Seattle Campus.",
	"Denny Hall (DEN), Spokane Ln, Seattle, WA 98105",
	[STOP_TYPES.Academic],
	0.5,
	["https://upload.wikimedia.org/wikipedia/commons/7/77/Denny_Hall.jpg"],
	true
);
export const stopJSIS = new Stop(
	4,
	4,
	47.656815,
	-122.305715,
	"Free",
	"University of Washington School of International Studies",
	"The Henry M. Jackson School",
	"The Henry M. Jackson School of International Studies is an internationally recognized leader in advancing the understanding of and engagement in world issues.",
	"400 Thomson Hall, Seattle, WA 98195",
	[STOP_TYPES.Academic, STOP_TYPES.Historic],
	0.5,
	["http://www.historylink.org/Content/Media/Photos/Small/Seattle_JacksonSchool_thomson-hall.jpg"],
	true,
);
export const stopHUB = new Stop(
	5,
	5,
	47.655193,
	-122.305136,
	"Free",
	"A department within the Division of Student Life",
	"Husky Union Building",
	"The Husky Union Building (HUB) is committed to providing services to UW students, staff, faculty, and invited guests.",
	"400 Thomson Hall, Seattle, WA 98195",
	[STOP_TYPES.Academic, STOP_TYPES.Food],
	0.5,
	["https://green.uw.edu/blog/sites/default/files/Husky_Union_Building.jpg"],
	true
);
export const stopSUZZ = new Stop(
	6,
	6,
	47.655776,
	-122.307978,
	"Free",
	"One of the most famous library in the world",
	"Suzzallo and Allen Libraries",
	"The University of Washington's central library, built in Collegiate Gothic style, with guided tours.",
	"400 Thomson Hall, Seattle, WA 98195",
	[STOP_TYPES.Academic, STOP_TYPES.Historic, STOP_TYPES.Cultural],
	1,
	["https://americanlibrariesmagazine.org/wp-content/uploads/2018/11/btn-suzzallo.jpg"],
	true
);
export const stopRedSquare = new Stop(
	7,
	7,
	47.656015,
	-122.309513,
	"Free",
	"Officially Central Plaza, the Red Square",
	"Red Square",
	"Red Square, officially Central Plaza, is a large open square on the Seattle campus of the University of Washington that serves as a hub for two of the University's major axes, connecting the campus's northern Liberal Arts Quadrangle with the science and engineering buildings found on the lower campus.",
	"4063 Spokane Ln, Seattle, WA 98105",
	[STOP_TYPES.Academic, STOP_TYPES.Historic, STOP_TYPES.Cultural],
	1,
	["https://southseattleemerald.files.wordpress.com/2017/04/uw-red-square.jpg"],
	true
);


const stopsUW: Stop[] = [
	stopParrington,
	stopLaw,
	stopDenny,
	stopJSIS,
	stopHUB,
	stopSUZZ,
	stopRedSquare
];
const nameUW: string = "UW 1-Day Tour";
const descUW: string = "University of Washington is one of best universities in the world and is known for its research capabilities and gothic, historic buildings. It has been around for more than 150 years.";
export const routeUW: Route = new Route(nameUW, 1, 0, descUW, stopsUW, 242);

export const allRoutes: Routes = new Routes([routeUW]);

//cards: [
// 				{
// 					title: 'UW 1-Day Tour',
// 					desc: 'University of Washington is the top university in Washington state, founded in 1861. It is also famous for the cherry blossom view and many aesthetically appealing buildings.',
// 					imgs: [
// 						{
// 							url: require('../imgs/uw1.jpg'),
// 							title: 'Breakfast'
// 						},
// 						{
// 							url: require('../imgs/uw2.jpg'),
// 							title: 'Hiking at Temple'
// 						},
// 						{
// 							url: require('../imgs/uw3.jpeg'),
// 							title: 'Lunch'
// 						},
// 						{
// 							url: require('../imgs/uw4.jpg'),
// 							title: 'Lunch'
// 						}
// 					],
// 					vote: 100
// 				},
// 				{
// 					title: 'Singapore Madness',
// 					desc: 'Singapore is cocktail of the best clubs, the best foods, and the best views in the world. Read more..',
// 					imgs: [
// 						{
// 							url: require('../imgs/sgp1.jpg'),
// 							title: 'Breakfast'
// 						},
// 						{
// 							url: require('../imgs/sgp2.jpeg'),
// 							title: 'Hiking at Temple'
// 						},
// 						{
// 							url: require('../imgs/sgp3.jpg'),
// 							title: 'Lunch'
// 						},
// 						{
// 							url: require('../imgs/sgp4.jpg'),
// 							title: 'Lunch'
// 						}
// 					],
// 					vote: 230
// 				},
// 				{
// 					title: 'Metropolitan Museum',
// 					desc: 'The Metropolitan Museum of Art of New York City, colloquially "the Met", is the largest art museum in the United States. With 6,953,927 visitors to its three locations in 2018, it was the third most visited art museum in the world.',
// 					imgs: [
// 						{
// 							url: require('../imgs/mtmuseum1.jpg'),
// 							title: 'Breakfast'
// 						},
// 						{
// 							url: require('../imgs/mtmuseum2.jpg'),
// 							title: 'Hiking at Temple'
// 						},
// 						{
// 							url: require('../imgs/mtmuseum3.jpg'),
// 							title: 'Lunch'
// 						}
// 					],
// 					vote: 100
// 				},
// 				{
// 					title: 'Vegas Shopping Day',
// 					desc: 'You can spend money in almost any way imaginable in Las Vegas, but the best way to actually leave with what you paid for is to go shopping. ',
// 					imgs: [
// 						{
// 							url: require('../imgs/vegas1.jpg'),
// 							title: 'Breakfast'
// 						},
// 						{
// 							url: require('../imgs/vegas2.jpeg'),
// 							title: 'Hiking at Temple'
// 						},
// 						{
// 							url: require('../imgs/vegas3.jpeg'),
// 							title: 'Lunch'
// 						},
// 						{
// 							url: require('../imgs/vegas4.jpg'),
// 							title: 'Lunch'
// 						}
// 					],
// 					vote: 100
// 				},
// 				{
// 					title: 'Yosemite!!!',
// 					desc: 'Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.',
// 					imgs: [
// 						{
// 							url: require('../imgs/ys1.jpeg'),
// 							title: 'Breakfast'
// 						},
// 						{
// 							url: require('../imgs/ys2.jpg'),
// 							title: 'Hiking at Temple'
// 						},
// 						{
// 							url: require('../imgs/ys3.jpg'),
// 							title: 'Lunch'
// 						},
// 						{
// 							url: require('../imgs/ys4.jpg'),
// 							title: 'Lunch'
// 						}
// 					],
// 					vote: 100
// 				},
//
// 			]