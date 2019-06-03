import {Stop, stopDenny, stopHUB, stopJSIS, stopLaw, stopParrington, stopRedSquare, stopSUZZ} from "./Stop";

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
		this.category = this.setCategory();
		this.picture = this.setPicture();
	}

	setCategory() {
		let category = new Set();

		this.stops.forEach((stop: Stop) => {
			let cats = stop.type;
			cats.forEach((c) => {
				category.add(c)
			})
		});

		return category;
	}

	setPicture() {
		let pictures = new Set();

		this.stops.forEach((stop: Stop) => {
			let pics = stop.picture;
			pics.forEach((p) => {
				pictures.add(p)
			})
		});

		return pictures;
	}
}

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
