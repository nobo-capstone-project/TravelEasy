import {stopDenny, stopHUB, stopJSIS, stopLaw, stopParrington, stopRedSquare, stopSUZZ} from "./Data";

// const moment = require("moment");

export class Stops {

	constructor() {

		this.stops = [
			stopParrington,
			stopLaw,
			stopDenny,
			stopJSIS,
			stopHUB,
			stopSUZZ,
			stopRedSquare
		];
	}

	addStop(stop) {
		this.stops.push(stop);
	}

	getAllStops() {
		return this.stops;
	}

	getStopByID(id) {
		for (let i = 0; i < this.stops.length; i++) {
			if (this.stops[i]["StopID"] === id) {
				return this.stops[i];
			}
		}
		// not found
		return null;
	}
}

//
// class StopUtil {
// 	static setStopTime(stop) {
// 		this.currentTime = Date.now();
// 		const timeSpent = stop["TimeSpent"];
//
// 		stop["StartTime"] = this.currentTime.utc().local();
// 		stop["EndTime"] = stop["StartTime"].add(timeSpent, 'minutes').utc().local();
//
// 		return stop;
// 	}
// }