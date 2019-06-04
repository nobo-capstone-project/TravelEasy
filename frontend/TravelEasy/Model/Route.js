import {Stop} from "./Stop";

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
		if (route.stops === undefined) return;

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
		if (route.stops === undefined) return;

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