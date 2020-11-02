var _db;

function initFirebase() {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD7m3Ac6vZ20dp73LPNDiFOsikQWuDuFGs",
    authDomain: "n423-assignment-05.firebaseapp.com",
    databaseURL: "https://n423-assignment-05.firebaseio.com",
    projectId: "n423-assignment-05",
    storageBucket: "n423-assignment-05.appspot.com",
    messagingSenderId: "942727325138",
    appId: "1:942727325138:web:a2ff9f2efdb7ab0311140b",
    measurementId: "G-7RPF1Q6FGP",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  _db = firebase.firestore();
}

function initListeners() {
  $("#add").click(function () {
    db.collection("users")
      .add({
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  });
}

$(document).ready(function () {
  try {
    initFirebase();
    initListeners();
  } catch (e) {
    console.error(e);
  }
});
