import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBEejrcdsvVuATOzKBL9Iz1h-N8ZoD1NDc",
    authDomain: "first-firebase-project-deda5.firebaseapp.com",
    databaseURL: "https://first-firebase-project-deda5.firebaseio.com",
    projectId: "first-firebase-project-deda5",
    storageBucket: "",
    messagingSenderId: "946980286390"
  };

// initialize firebase app with config information
firebase.initializeApp(config);

const auth = firebase.auth();
export { firebase, auth } 
