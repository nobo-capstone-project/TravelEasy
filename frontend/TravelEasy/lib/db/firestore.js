const admin = require("firebase-admin");

const serviceAccount = require("./firestore_key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "traveleasy-1554765588100.appspot.com"
});

const bucket = admin.storage().bucket();

bucket.getId()


