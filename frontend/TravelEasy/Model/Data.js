import {Stop, STOP_TYPES} from "./Stop";
import {Route} from "./Route";
import {Routes} from "./Routes";

export const stopLaw = new Stop(
	2,
	2,
	47.659124,
	-122.310963,
	"University of Washington LAW School",
	"William H. Gates Hall",
	"It is the LAW school with capitalized letters",
	"William H. Gates Hall (LAW), Seattle, WA 98105",
	[STOP_TYPES.Academic],
	1,
	["https://www.law.uw.edu/media/1151/clinics.jpg"],
	true,
);
export const stopParrington = new Stop(
	1,
	1,
	47.657821,
	-122.311223,
	"The most beautiful entrance to UW Seattle Campus",
	"Parrington Lawn",
	"An open space located north and west of Parrington Hal",
	"Parrington Lawn, Seattle, WA 98105",
	[STOP_TYPES.Natural, STOP_TYPES.Park],
	0.1,
	["https://facilities.uw.edu/blog/files/styles/text_wrap/public/media/Northern%20Red%20Oak%20Blog.jpg"],
	true,
	undefined,
	undefined
);
export const stopDenny = new Stop(
	3,
	3,
	47.658427,
	-122.308957,
	"University of Washington Department of Anthropology",
	"Denny Hall",
	"One of the most historic building on the Seattle Campus",
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

const nameUW: string = "One-day University of Washington Day Tour";

const descUW: string = "University of Washington is one of best universities in the world and is known for its research capabilities and gothic, historic buildings. It has been around for more than 150 years.";

const routeUW: Route = new Route(nameUW, 1, 0, descUW, stopsUW);

export const allRoutes: Routes = new Routes([routeUW]);