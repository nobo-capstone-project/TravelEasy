const admin = require("firebase-admin");
admin.initializeApp({
	credential: admin.credential.cert("./firestore_key.json"),
	databaseURL: "traveleasy-1554765588100.appspot.com",
	storageBucket: "tern-images"
});

function uploadImage(imagePath) {

	if (!admin.app) {
		return Error("storage not initialized.");
	}

	admin.storage().bucket().upload(imagePath, function (err, file) {
		if (err) {
			return Error("cannot upload image: " + err)
		}

		if (file) {
			return file.id;
		}
	});
}

// uploadImage("2.png");

function downloadImage(imagePath) {
	if (!admin.app) {
		return Error("storage not initialized.");
	}

	let file = admin.storage().bucket().file(imagePath);
	if (file) {
		file.download()
			.then(function (buf) {
				return buf;
			})
			.catch(function (err) {
				return Error("cannot download image: " + err);
			});
	}
}

// downloadImage("2.png");