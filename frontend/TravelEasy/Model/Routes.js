import {Route, routeUW} from "./Route";

const stops = require("./Stops");

export class Routes {

	constructor(routes: Route[]) {
		this.routes = routes;
	}

	addRoute(route): void {
		this.routes.push(route);
	}

	// doesnt work; `undefined is not an object`
	// getAllRoutes(): Route[] {
	// both work
	// getAllRoutes = () => {
	getAllRoutes: Route[] = () => {
		return this.routes;
	};

	getRouteByID(id): Route {
		for (let i = 0; i < this.routes.length; i++) {
			if (this.routes[i].routeID === id) {
				return this.routes[i];
			}
		}
		// not found
		return null;
	}

	getRouteByCreatorID(id): Route {
		for (let i = 0; i < this.routes.length; i++) {
			if (this.routes[i].creatorID === id) {
				return this.routes[i];
			}
		}
		// not found
		return null;
	}
}

export const allRoutes: Routes = new Routes([routeUW]);