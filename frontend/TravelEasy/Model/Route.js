import {Stop, stopDenny, stopHUB, stopJSIS, stopLaw, stopParrington, stopRedSquare, stopSUZZ} from "./Stop";

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
export const routeUW: Route = new Route(nameUW, 1, 0, descUW, stopsUW);

export class Route {
	routeName: string;
	routeID: number;
	creatorID: number;
	description: string;
	stops: Stop[];
	category: string[];
	picture: string[];
	vote: number;

	constructor(routeName, routeID, creatorID, description, stops, vote) {
		this.routeName = routeName;
		this.routeID = routeID;
		this.creatorID = creatorID;
		this.description = description;
		this.stops = stops;
		this.vote = vote;
		this.category = RouteUtil.setCategory(this);
		this.picture = RouteUtil.setPicture(this);
	}
}

class RouteUtil {
	static setCategory(route) {
		let category = new Set();

		route.stops.forEach((stop: Stop) => {
			let cats = stop.type;
			cats.forEach((c) => {
				category.add(c)
			})
		});

		return category;
	}

	static setPicture(route) {
		let pictures = new Set();

		route.stops.forEach((stop: Stop) => {
			let pics = stop.picture;
			pics.forEach((p) => {
				pictures.add(p)
			})
		});

		return pictures;
	}
}