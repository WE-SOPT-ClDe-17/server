const admin = require('firebase-admin');
const serviceAccount = require('./tumblbug-sopt-firebase-adminsdk-ft5ah-8276235162');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require('./api'),
};
