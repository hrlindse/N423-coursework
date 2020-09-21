$(document).ready(function () {
  $.getJSON("../data/data.json", function (data) {
    $.each(data.books, function (idx, value) {
      $(".content").append(
        `<h1>${value.title}</h1> <h2>${value.author}</h2> <br>`
      );
    });
  });
});
