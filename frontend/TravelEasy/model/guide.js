export class Guide {

	documentID;
	routeID;
	creatorID;
	description;
	stopID;
	category;
	picture;
	vote;

	constructor(documentID, routeID, creatorID, description, stopID, category, picture, vote) {
		this.documentID = documentID;
		this.routeID = routeID;
		this.creatorID = creatorID;
		this.description = description;
		this.stopID = stopID;
		this.category = category;
		this.picture = picture;
		this.vote = vote;
	}

	getDocumentID() {
		return this.documentID;
	}

	getRouteID() {
		return this.routeID;
	}

	getCreatorID() {
		return this.creatorID;
	}

	getDescription() {
		return this.description;
	}

	getStopID() {
		return this.stopID;
	}

	getCategory() {
		return this.category;
	}

	getPicture() {
		return this.picture;
	}

	getVote() {
		return this.vote;
	}
}