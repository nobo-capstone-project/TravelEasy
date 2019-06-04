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