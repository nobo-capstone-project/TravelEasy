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
	["https://https://s3-media1.fl.yelpcdn.com/bphoto/51U8z35-9iP7FrKWeYzDaw/o.jpg"],
	true
);

const stopBravoFarm = new Stop(
	0,
	0,
	0,
	0,
	"$$", 
	"Bravo Farm Chilling", 
	"If you get hungry from hundreds miles of driving, there is an excellent place to take a break and enjoy the food. There is also a zoo and a tree house.", 
	"Bravo Farms", 
	"36005 Hwy 99, Traver, CA", 
	[STOP_TYPES.Food, "National Park", "Nature"], 
	1, 
	["http://www.californiagrown.org/wp-content/uploads/2014/07/2.jpg", "https://www.bravofarms.com/wp-content/uploads/2014/10/BF-wp-site-colorfull-hdr-6.jpg"], 
	false
)
const stopGlacierPoint = new Stop(
	0,
	0,
	0,
	0,
	"Free", 
	"1h Drive to Glacier Point", 
	"If you get hungry from hundreds miles of driving, there is an excellent place to take a break and enjoy the food. There is also a zoo and a tree house.", 
	"Bravo Farms", 
	"36005 Hwy 99, Traver, CA", 
	[STOP_TYPES.Nature, STOP_TYPES.NationalPark, STOP_TYPES.Hiking], 
	2, 
	["http://www.californiagrown.org/wp-content/uploads/2014/07/2.jpg", "https://www.bravofarms.com/wp-content/uploads/2014/10/BF-wp-site-colorfull-hdr-6.jpg"], 
	false
)

const stopYosemiteFalls= new Stop(
	0,
	0,
	0,
	0,
	"Free", 
	"Enjoy the view of Yosemite Falls", 
	"Yosemite Falls is the highest waterfall in Yosemite National Park, dropping a total of 2,425 feet from the top of the upper fall to the base of the lower fall. Located in the Sierra Nevada of California, it is a major attraction in the park, especially in late spring when the water flow is at its peak", 
	"Yosemite Falls", 
	"Yosemite Village, CA 95389", 
	[STOP_TYPES.Nature, STOP_TYPES.NationalPark, STOP_TYPES.Hiking], 
	1, 
	["https://live.staticflickr.com/4192/34678306371_143733fdc7_b.jpg", "https://www.yosemitehikes.com/images/ns/lower-yosemite-falls-trailhead-1000w.jpg"], 
	false
)

const stopYosemiteValley= new Stop(
	0,
	0,
	0,
	0,
	"Free", 
	"Explore the Yosemite Valley", 
	"Yosemite Valley is a glacial valley in Yosemite National Park in the western Sierra Nevada mountains of Central California. The valley is about 7.5 miles long and approximately 3000–3500 feet deep, surrounded by high granite summits such as Half Dome and El Capitan, and densely forested with pines.", 
	"Yosemite Valley", 
	" Yosemite Valley, CA ", 
	[STOP_TYPES.Nature, STOP_TYPES.NationalPark, STOP_TYPES.Hiking], 
	2, 
	["https://media.timeout.com/images/105277843/630/472/image.jpg", "https://media.graytvinc.com/images/810*455/Yosemite+National+Park+in+California.jpg"], 
	false
)
const stopTuolumneMeadows= new Stop(
	0,
	0,
	0,
	0,
	"Free", 
	"Have a break at the Tuolumne Meadows", 
	"Take a short walk by the river and have some bbq here!", 
	"Tuolumne Meadows", 
	"7943 Willow St, Wawona, CA 95389", 
	["Nature", "National Park", "Hiking"], 
	2, 
	["https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_spotlight-pacificcresttrail_module5_tuolumnemeadows_st_rf_585596624_1280x640.jpg", 
	"https://www.yosemite.com/wp-content/uploads/2016/04/2670749782_bcbe8f6d96_o.jpg"], 
	false
)

const stopCentralPark= new Stop(
	0,
	0,
	0,
	0,
	"Free", 
	"Central Park", 
	"Tips: Shakespeare shows performs here June to September at ther Delacorte Theater, and it is FREE!", 
	"Central Park", 
	"New York, NY", 
	["Historic", "Urban", "Art"], 
	1, 
	["https://static.dezeen.com/uploads/2017/08/central-park-tower-extell_dezeen_2364_hero-852x479.jpg"], 
	false
)

const stopMetropolitanMuseum= new Stop(
	0,
	0,
	0,
	0,
	"$$$", 
	"The Metropolitan Museum of Art", 
	"The Metropolitan Museum of Art of New York City, colloquially \"the Met\", is the largest art museum in the United States. With 6,953,927 visitors to its three locations in 2018, it was the third most visited art museum in the world.", 
	"The Metropolitan Museum of Art", 
	"1000 5th Ave, New York, NY 10028", 
	[STOP_TYPES.Historic, STOP_TYPES.Urban, STOP_TYPES.Art], 
	4, 
	["https://si.wsj.net/public/resources/images/BN-WV739_THEMET_GR_20180104113341.jpg", "http://www.ariah.info/MET1.jpg"], 
	false
)

const stopShakeShack= new Stop(
	0,
	0,
	0,
	0,
	"$$", 
	"Have some Shake Shack!", 
	"Shake Shack is a New York based chain restaurant. You have to try their burgers, hot dogs, and milkshake here!", 
	"Shake Shack Upper East Side", 
	"154 East 86th St, New York, NY 10028", 
	[STOP_TYPES.Foodie, STOP_TYPES.Urban], 
	1, 
	["https://patch.com/img/cdn20/users/22866740/20181211/013629/styles/T800x600/public/processed_images/shakeshack-218_1-1544553363-7751.jpg", 
	"https://www.glenwoodnyc.com/manhattan-living/wp-content/uploads/resource/ss-danny-meyer-shake-shack-nyc.jpg"], 
	false
)


const stopVegasSOutlets= new Stop(
	0,
	0,
	0,
	0,
	"$$$", 
	"Only 10min drive to Outlets!", 
	"Premium outlets with luxury brands inlcuding Burberry, Armani, Tory Burch, and more.", 
	"Las Vegas South Premium Outlets", 
	"7400 S Las Vegas Blvd, Las Vegas, NV 89123", 
	[STOP_TYPES.Shopping, STOP_TYPES.Distress, STOP_TYPES.Fashion], 
	3, 
	["https://i.ytimg.com/vi/F0iF_dKI1LU/maxresdefault.jpg", 
	"http://a.mktgcdn.com/p/3OC289fx69kpjm5UaAXnlR4eEAONooxsuRQVaoZ8BNQ/1000x667.jpg"], 
	false
)

const stopFashionShow= new Stop(
	0,
	0,
	0,
	0,
	"$$$$", 
	"Fashion Show Mall", 
	"The larget shopping mall in Las Vegas, with physical stores of all the e-commerce in America. including Saks Fifth Avenue, Neiman Marcus, Nordstrom, and Bloomingdatles.", 
	"Fashion Show Mall", 
	"3200 S Las Vegas Blvd, Las Vegas, NV 89109", 
	[STOP_TYPES.Shopping, STOP_TYPES.Distress, STOP_TYPES.Fashion], 
	4, 
	["https://media-cdn.tripadvisor.com/media/photo-s/17/76/a4/77/fashion-show.jpg", 
	"http://jbace.com/wp-content/uploads/2015/12/fashion-show-mall-las-vegas-19.jpg"], 
	false
)

const stopsYosemite = [
	stopBravoFarm,
	stopGlacierPoint,
	stopYosemiteFalls,
	stopYosemiteValley,
	stopTuolumneMeadows
]
const stopsUW = [
	stopParrington,
	stopLaw,
	stopDenny,
	stopJSIS,
	stopHUB,
	stopSUZZ,
	stopRedSquare
];

const stopsNYCDay1 = [
	stopCentralPark,
	stopMetropolitanMuseum,
	stopShakeShack	
]

const stopsVegas = [
	stopVegasSOutlets,
	stopFashionShow
]


const routeNYCDay1 = new Route(
	"Walking in New York City",
	0, 
	0,
	"1 Day trip in New York City, visiting the Central Park, Metropolitan Museum of Art, and more.",
	stopsNYCDay1, 
	1238
)



const routeYosemite = new Route(
	"Driving in Yosemite", 
	0, 
	0,
	"Yosemite National Park is in California’s Sierra Nevada mountains. It’s famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of El Capitan and Half Dome.",
	stopsYosemite, 
	23580
)

const routeVegasShopping= new Route(
	"1 Day shopping in Vegas", 
	0, 
	0,
	"You can spend money in tons of way in Las Vegas but the only thing you CANNOT miss is shopping! This route provide you tips in shopping at both outlets and malls.",
	stopsVegas, 
	23580
)
const nameUW: string = "UW 1-Day Tour";
const descUW: string = "University of Washington is one of best universities in the world and is known for its research capabilities and gothic, historic buildings. It has been around for more than 150 years.";
export const routeUW: Route = new Route(nameUW, 1, 0, descUW, stopsUW, 242);

export const allRoutes: Routes = new Routes([routeUW,routeYosemite, routeNYCDay1, routeVegasShopping]);

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