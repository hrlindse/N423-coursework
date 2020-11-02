var _db;

export function initFirebase() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("There is a user");
    } else {
      // User is signed out.
      // ...
      loggedIn = false;
      console.log("No user");
      _db = "";
    }
  });
  $("#add").removeClass("hidden");
}

export function signIn(callback) {
  firebase
    .auth()
    .signInAnonymously()
    .then(function (result) {
      _db = firebase.firestore();
      callback();
    });
}

export function getAllAlbums() {
  _db
    .collection("Albums")
    .get()
    .then(function (querySnapshot) {
      //display selected data
      showAlbums(querySnapshot);
    });
}

export function getAlbumByGenre(genre) {
  _db
    .collection("Albums")
    .where("genre", "==", genre)
    .get()
    .then(function (querySnapshot) {
      //display selected data
      showAlbums(querySnapshot);
    });
}

function showAlbums(querySnapshot) {
  $("#content").html("");
  querySnapshot.forEach(function (doc) {
    let album = doc.data();
    $("#content").append(
      `<div class="album">
            <img src="${album["album-photo"]}" width="150px" height="auto">
            <div class="info">
              <h2>${album["album-name"]}</h2> 
              <p class="artist">${album["artist-name"]}</p><p class="genre">${album["genre"]}</p> 
            </div>
          </div>`
    );
  });
}
