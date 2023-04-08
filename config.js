import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCRKenTveU4oxdTZs1ECEFxIy3X3Mped7I",
    authDomain: "c-71-89950.firebaseapp.com",
    projectId: "c-71-89950",
    storageBucket: "c-71-89950.appspot.com",
    messagingSenderId: "845440286914",
    appId: "1:845440286914:web:95d5b3544f5b617d62fb5b"
  };
  firebase.initializeApp(firebaseConfig)

  export default firebase.firestore()