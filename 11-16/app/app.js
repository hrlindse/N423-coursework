import * as MODEL from "../model/model.js";

function init() {
  $("nav a").click((e) => {
    let buttonID = e.currentTarget.id;
    $.get(`views/${buttonID}/${buttonID}.html`, (PageData) => {
      $("#app").html(PageData);
      pageListeners(buttonID);
    });
  });
}

function pageListeners(pageName) {
  $("nav a").click((e) => {
    console.log("Button " + pageName);
    console.log(MODEL.getName());
  });
}

function initViews() {
  $.get("views/home/home.html", (homePageData) => {
    $("#app").html(homePageData);
    initListeners();
  });
}

function contactFormSubmit() {
  console.log("submit");
}

$(document).ready(function () {
  initViews();
  init();
});
