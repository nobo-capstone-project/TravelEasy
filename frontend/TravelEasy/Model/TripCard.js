import {Route} from "./Route";

export class CardImage {
	url: string;
	title: string;

	constructor(url, title) {
		this.url = url;
		this.title = title;
	}
}

export class TripCard {
	route: Route;
	title: string;
	desc: string;
	imgs: CardImage[] = [];
	vote: number;

	constructor(route: Route) {
		this.route = route;
		this.title = this.route.routeName;
		this.desc = this.route.description;
		this.vote = route.vote;
		this.route.picture.forEach((url) => {
			console.log(url);
			this.imgs.push(new CardImage(url, ""));
		})
	}
}