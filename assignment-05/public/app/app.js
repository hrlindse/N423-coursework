import * as Model from "../model/model.js";

function initListeners() {
  $("#genre").change(function () {
    console.log(this.value);
    if (this.value != "All") {
      Model.getAlbumByGenre(this.value);
    } else {
      Model.getAllAlbums();
    }
  });
  Model.getAllAlbums();
}

$(document).ready(function () {
  Model.initFirebase();
  Model.signIn(initListeners);
});
