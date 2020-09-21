var apiKey = "ebf07185046341b9a23193427201409";
var currentBaseURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=`;
var forecastBaseURL = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=`;

function getWeather(fullURL) {
  if ($(".toggle").hasClass("hidden")) {
    $(".toggle").removeClass("hidden");
  }
  $(".toggle").html("Metric");
  $.getJSON(fullURL, function (data) {
    console.log(data);
    $(".content").html(`
      <div class="center">
      <div class="info">
      <div class="location"><strong>${data.location.name}</strong>, ${data.location.region}, ${data.location.country}</div>
      <div class="time">Current Time: ${data.location.localtime}</div>
      </div>
      </div>
      <div class="forecastInfo">
      <div class="weatherInfo">
        <div class="temp f">${data.current.temp_f}°F</div>
        <div class="temp c hidden">${data.current.temp_c}°C</div>
        <div class="condition">
          <div class="text">${data.current.condition.text}</div>
          <img src="${data.current.condition.icon}">
        </div>
        <div class="feelsLike f">Feels like: ${data.current.feelslike_f}°F</div>
        <div class="feelsLike c hidden">Feels like: ${data.current.feelslike_c}°C</div>
        <div class="moreDetails ">
          <div class="detailBox first larger">
            <div class="humuidity detail"><div class="label">Humidity: </div><div class="value">${data.current.humidity}%</div></div>
            <div class="wind mi detail"><div class="label">Wind speed: </div><div class="value">${data.current.wind_mph} mph ${data.current.wind_dir}</div></div>
            <div class="wind km detail hidden"><div class="label">Wind speed: </div><div class="value">${data.current.wind_kph} kph ${data.current.wind_dir}</div></div>
            <div class="wind mi detail"><div class="label">Wind gust: </div><div class="value">${data.current.gust_mph} mph</div></div>
            <div class="wind km detail hidden"><div class="label">Wind gust: </div><div class="value">${data.current.gust_kph} kph</div></div>
            <div class="cloud detail"><div class="label">Cloud coverage: </div><div class="value">${data.current.wind_degree}%</div></div>
          </div>
          <div class="detailBox larger">
            <div class="visibility mi detail"><div class="label">Visibility: </div><div class="value">${data.current.vis_miles} mi</div></div>
            <div class="visibility km detail hidden"><div class="label">Visibility: </div><div class="value">${data.current.vis_km} km</div></div>
            <div class="precip in detail"><div class="label">Precipitation: </div><div class="value">${data.current.precip_in} in</div></div>
            <div class="precip mm detail hidden"><div class="label">Precipitation: </div><div class="value">${data.current.precip_mm} mm</div></div>
            <div class="pressure in detail"><div class="label">Pressure: </div><div class="value">${data.current.pressure_in} in</div></div>
            <div class="pressure mm detail hidden"><div class="label">Pressure: </div><div class="value">${data.current.pressure_mb} mb</div></div>
            <div class="uv detail"><div class="label">UV: </div><div class="value">${data.current.uv}</div></div>
          </div>
        </div>
      </div>
      </div>
      `);
  });
}

function getForecast(fullURL) {
  if ($(".toggle").hasClass("hidden")) {
    $(".toggle").removeClass("hidden");
  }
  $(".toggle").html("Metric");
  $.getJSON(fullURL, function (data) {
    console.log(data);
    $(".content").html(`
      <div class="center">
      <div class="info">
      <div class="location"><strong>${data.location.name}</strong>, ${data.location.region}, ${data.location.country}</div>
      <div class="time">Current Time: ${data.location.localtime}</div>
      
      </div>
      </div>
      <div class="forecastInfo"></div>`);
    $.each(data.forecast.forecastday, function () {
      $(".forecastInfo").append(`
        <div class="weatherInfo">
          <div class="date">${this.date}</div>
          
          <div class="condition">
            <div class="text">${this.day.condition.text}</div>
            <img src="${this.day.condition.icon}">
          </div>
          
          <div class="moreDetails">
            <div class="detailBox">
              <div class="avgTemp f detail"><div class="label">Average: </div><div class="value">${this.day.avgtemp_f}°F</div></div>
              <div class="avgTemp c detail hidden"><div class="label">Average: </div><div class="value">${this.day.avgtemp_c}°C</div></div>
              <div class="maxTemp f detail"><div class="label">Max: </div><div class="value">${this.day.maxtemp_f}°F</div></div>
              <div class="maxTemp c detail hidden"><div class="label">Max: </div><div class="value">${this.day.maxtemp_c}°C</div></div>
              <div class="minTemp f detail"><div class="label">Min: </div><div class="value">${this.day.mintemp_f}°F</div></div>
              <div class="minTemp c detail hidden"><div class="label">Min: </div><div class="value">${this.day.mintemp_c}°C</div></div>
              <div class="sunrise detail"><div class="label">Sunrise: </div><div class="value">${this.astro.sunrise}</div></div>
              <div class="sunset detail"><div class="label">Sunset: </div><div class="value">${this.astro.sunset}</div></div>
              <div class="humuidity detail"><div class="label">Humidity: </div><div class="value">${this.day.avghumidity}%</div></div>
              <div class="wind mi detail"><div class="label">Wind speed: </div><div class="value">${this.day.maxwind_mph} mph</div></div>
              <div class="wind km detail hidden"><div class="label">Wind speed: </div><div class="value">${this.day.maxwind_kph} kph</div></div>
              <div class="visibility mi detail"><div class="label">Visibility: </div><div class="value">${this.day.avgvis_miles} mi</div></div>
              <div class="visibility km detail hidden"><div class="label">Visibility: </div><div class="value">${this.day.avgvis_km} km</div></div>
              <div class="precip in detail"><div class="label">Precipitation: </div><div class="value">${this.day.totalprecip_in} in</div></div>
              <div class="precip mm detail hidden"><div class="label">Precipitation: </div><div class="value">${this.day.totalprecip_mm} mm</div></div>
              <div class="uv detail"><div class="label">UV: </div><div class="value">${this.day.uv}</div></div>
            </div>
          </div>
        </div>`);
    });
  });
}

function switchMeasurements() {
  console.log("switching");
  if ($(".f").hasClass("hidden")) {
    console.log("f is hidden");
    $(".f").each(function () {
      $(this).removeClass("hidden");
    });
    $(".c").each(function () {
      $(this).addClass("hidden");
    });
    $(".mi").each(function () {
      $(this).removeClass("hidden");
    });
    $(".km").each(function () {
      $(this).addClass("hidden");
    });
    $(".in").each(function () {
      $(this).removeClass("hidden");
    });
    $(".mm").each(function () {
      $(this).addClass("hidden");
    });
    $(".toggle").html("Metric");
  } else {
    console.log("c is hidden");
    console.log($(".f"));
    $(".f").each(function () {
      $(this).addClass("hidden");
    });
    $(".c").each(function () {
      $(this).removeClass("hidden");
    });
    $(".mi").each(function () {
      $(this).addClass("hidden");
    });
    $(".km").each(function () {
      $(this).removeClass("hidden");
    });
    $(".in").each(function () {
      $(this).addClass("hidden");
    });
    $(".mm").each(function () {
      $(this).removeClass("hidden");
    });
    $(".toggle").html("Imperial");
  }
}

function emptyZip() {
  if (!$(".toggle").hasClass("hidden")) {
    $(".toggle").addClass("hidden");
  }
  $(".content").html(
    `<div class="center"><div class="info">Please enter a zipcode into the box above to view weather information</div></div>`
  );
}

function initListeners() {
  $("#getWeather").click(function () {
    if ($("#zipcode").val() == "") {
      emptyZip();
    } else {
      var zip = $("#zipcode").val();
      var fullURL = currentBaseURL + zip;
      console.log(fullURL);
      getWeather(fullURL);
    }
  });
  $("#getOneDayForecast").click(function () {
    if ($("#zipcode").val() == "") {
      emptyZip();
    } else {
      var zip = $("#zipcode").val();
      var fullURL = forecastBaseURL + zip + "&days=1";
      console.log(fullURL);
      getForecast(fullURL);
    }
  });
  $("#getThreeDayForecast").click(function () {
    if ($("#zipcode").val() == "") {
      emptyZip();
    } else {
      var zip = $("#zipcode").val();
      var fullURL = forecastBaseURL + zip + "&days=3";
      console.log(fullURL);
      getForecast(fullURL);
    }
  });
  $("#toggleMetric").click(function () {
    switchMeasurements();
  });
}

$(document).ready(function () {
  initListeners();
});
