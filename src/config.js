import * as Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAME4RUkMg7XfDLX5CVUTFumZ3Eouv9CM8",
    authDomain: "musiclinklibrary.firebaseapp.com",
    databaseURL: "https://musiclinklibrary.firebaseio.com",
    projectId: "musiclinklibrary",
    storageBucket: "musiclinklibrary.appspot.com",
    messagingSenderId: "1011533591646",
    appId: "1:1011533591646:web:c55fad213566acd5cab0cf",
    measurementId: "G-17TMPMTMC9"
  };

  const app = Firebase.initializeApp(firebaseConfig);
  const db = app.database();
  export default db;