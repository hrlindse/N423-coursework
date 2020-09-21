var apiKey = "ebf07185046341b9a23193427201409";
var baseURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;

function initListeners() {
  $("#getWeather").click(function () {
    var zip = $("#zipcode").val();
    var fullURL = baseURL + zip;
    console.log(fullURL);

    $.getJSON(fullURL, function (data) {
      console.log(data);
      $(".content").html(`<p>City Name: ${data.location.name}</p>
      <p>State Name: ${data.location.region}</p>
      <p>Current Time: ${data.location.localtime}</p>`);
    });
  });
}

$(document).ready(function () {
  initListeners();
});
