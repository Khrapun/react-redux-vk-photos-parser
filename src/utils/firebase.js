// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
// We only want to use Firebase Auth here
import "firebase/auth";

// Your app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCqRyAQ6ebqAB_y0mAeUBdEJ0L75ZXJFzQ",
    authDomain: "react-redux-photos-e61cb.firebaseapp.com",
    databaseURL: "https://react-redux-photos-e61cb.firebaseio.com",
    projectId: "react-redux-photos-e61cb",
    storageBucket: "react-redux-photos-e61cb.appspot.com",
    messagingSenderId: "796327830123",
    appId: "1:796327830123:web:ac00a78c336c98d567872e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Finally, export it to use it throughout your app
export default firebase;