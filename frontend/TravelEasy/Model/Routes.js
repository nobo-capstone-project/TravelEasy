//	RouteID     string   `json:"routeID"`
// 	CreatorID   string   `json:"creatorID"`
// 	Description string   `json:"description"`
// 	StopID      []string `json:"stopID"`
// 	Category    []string `json:"category"`
// 	Picture     []string `json:"picture"`
// 	Vote        int32    `json:"vote"`

const stops = require("./Stop");

class Routes {
	constructor(stops) {
		this.routes = [
			{
				RouteID: 1,
				CreatorID: 1,
				Description: "University of Washington Campus Tour",
				Stops: stops.getAllStops().slice(0,7),
				Category: undefined,
				Picture: undefined,
				Vote: 100
			}
		]
	}

	addRoute(route) {
		this.routes.push(route);
	}

	getAllRoutes() {
		return this.routes;
	}

	getRouteByID(id) {
		for (let i = 0; i < this.routes.length; i++) {
			if (this.routes[i]["RouteID"] === id) {
				return this.routes[i];
			}
		}

		// not found
		return null;
	}

	getRouteByCreatorID(id) {
		for (let i = 0; i < this.routes.length; i++) {
			if (this.routes[i]["CreatorID"] === id) {
				return this.routes[i];
			}
		}

		// not found
		return null;
	}
}

class RouteUtil {
	static setCategory(route) {
		let category = new Set();

		route["Stops"].forEach((stop) => {
			let cats = stop["Type"];
			cats.forEach((c) => {
				category.add(c)
			})
		});

		route["Category"] = category;

		return route;
	}
}
let routes = new Routes(stops);
let route = routes.routes[0];
route = RouteUtil.setCategory(route);
console.log(route);