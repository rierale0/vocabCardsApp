import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBwhuqoOYFZZEb9MaGmHBPHQwkN1ywibx0",
  authDomain: "vocab-cards-app.firebaseapp.com",
  databaseURL: "https://vocab-cards-app.firebaseio.com",
  projectId: "vocab-cards-app",
  storageBucket: "vocab-cards-app.appspot.com",
  messagingSenderId: "875811642820",
  appId: "1:875811642820:web:96fa4b5800d230ea6c5891",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
