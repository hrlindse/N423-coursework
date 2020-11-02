import * as Model from "../model/model.js";

function initListeners() {
  //listens for change in option selection 
  $("#genre").change(function () {
    console.log(this.value);
    if (this.value != "All") {
      //get album by genre
      Model.getAlbumByGenre(this.value);
    } else {
      //get all genre albums
      Model.getAllAlbums();
    }
  });
  //display all genres on page load
  Model.getAllAlbums();
}

$(document).ready(function () {
  Model.initFirebase();
  Model.signIn(initListeners);
});
