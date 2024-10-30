const functions = require('firebase-functions');
const app = require('./main'); // Adjust the path as necessary

exports.app = functions.https.onRequest(app);