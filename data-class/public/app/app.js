var _db;
var fakeNews = {
  fName: "Todd",
  lName: "Shelton",
};
var loggedIn;


function initFirebase() {
  firebase
    .auth()
    .signInAnonymously()
    .then(function (result) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("user signed in");
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          var providerData = user.providerData;
          console.log("user:", displayName, email, user);
          loggedIn = true;
          _db = firebase.firestore();
          // ...
        } else {
          // User is signed out.
          // ...
          loggedIn=false;
          console.log("user not signed in");
        }
      });
      console.log("connected");
    });
}

function initListeners() {
  $("#add").click(function () {
    if (loggedIn){
    _db
      .collection("names")
      .add(fakeNews)
      .then(function (doc) {
        console.log("Added Data, ref num: ", doc.id);
      });
    } else console.log("log in to add data");
  });

  $("#signup").click(function () {
    let email = "email@email.com";
    let password = "password";
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      (result) => {
        if(result.user){
          result.user.updateProfile({
            displayName: "Jane Q. User",
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(function() {
            // Update successful.
          }).catch(function(error) {
            // An update error happened.
          });
        }
      }
    ).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  });

  $("#logout").click(function () {
    
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("Log Out");
      _db= "";
    }).catch(function(error) {
      // An error happened.
      console.log("Log Out error");
    });
  });

  $("#login").click(function () {
    let email = "email@email.com";
    let password = "password";
    console.log("Log In");
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  });
}

function updateUser(newEmail, newPassword){
  var user = firebase.auth().currentUser;

  

}

$(document).ready(function () {
  try {
    let app = firebase.app();
    initFirebase();
    initListeners();
  } catch (e) {
    console.error(e);
  }
});
