export const STOP_TYPES = {
	Academic: "Academic",
	Cultural: "Cultural",
	Natural: "Natural",
	Nature: "Nature",
	Park: "Park",
	Food: "Food",
	Historic: "Historic",
	NationalPark: "National Park",
	Hiking: "Hiking",
	Urban: "Urban",
	Art: "Art",
	Shopping: "Shopping",
	Distress: "Distress",
	Fashion: "Fashion"
};

export class Stop {
	stopID: number;
	orderID: number;
	lat: number;
	long: number;
	price: string;
	locationName: string;
	stopName: string;
	description: string;
	address: string;
	type: string[];
	timeSpent: number;
	picture: string[];
	ada: boolean;
	startTime: string | undefined;
	endTime: string | undefined;

	constructor(stopID, orderID, lat, long, price, stopName, locationName, description, address, type, timeSpent, picture, ada, startTime, endTime) {
		this.address = address;
		this.stopID = stopID;
		this.orderID = orderID;
		this.lat = lat;
		this.long = long;
		this.price = price;
		this.stopName = stopName;
		this.locationName = locationName;
		this.description = description;
		this.type = type;
		this.timeSpent = timeSpent;
		this.picture = picture;
		this.ada = ada;
		this.startTime = startTime;
		this.endTime = endTime;
	}
}