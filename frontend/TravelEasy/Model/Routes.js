import {Route} from "./Route";

export class Routes {

	routes: Route[];

	constructor(routes: Route[]) {
		this.routes = routes;
	}

	addRoute(route): void {
		this.routes.push(route);
	}

	getAllRoutes(): Route[] {
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