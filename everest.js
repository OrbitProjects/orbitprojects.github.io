// Time & Date
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var session = "";
  session = "AM";
  if (h == 12) {
    session = "PM";
  }

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;

  var time = h + ":" + m + " " + session;
  document.getElementById("timeDisplay").innerText = time;

  setTimeout(showTime, 1000);

  if (document.getElementById("displaySearchBox").checked == true) {
    document.getElementById("timeDisplay").classList.add("timeDisplayBig");
    document.getElementById("dateDisplay").classList.add("dateDisplayBig");
  } else {
    document.getElementById("timeDisplay").classList.remove("timeDisplayBig");
    document.getElementById("dateDisplay").classList.remove("dateDisplayBig");
  }

}
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function showDate() {
  var date = new Date();
  var D = date.getDay();
  var M = date.getMonth();
  var d = date.getDate();
  var Y = date.getFullYear();
  setTimeout(showDate, 3600000);
  var time = dayNames[D] + " " + monthNames[M] + " " + d + " " + Y;
  document.getElementById("dateDisplay").innerText = time;
}

showTime()
showDate()

//ApiRequests
celsius = localStorage.celsius;
document.onload = weatherStart();
//Weather
function weatherStart() {
  navigator.geolocation.getCurrentPosition(successWeather, errorWeather);
}

function successWeather(pos) {
  lat = pos.coords.latitude;
  long = pos.coords.longitude;
  weather(lat, long);
}


function errorWeather() {
  console.log('There was an error');
}

function weather(lat, long) {
  var client = new HttpClient();
  client.get('https://api.darksky.net/forecast/15ed1f5712722aad6d7b85d92ef97eef/' + lat + ',' + long, function(response) {
    updateDOM(JSON.parse(response));
  });
}

document.getElementById("displayWeather").addEventListener("click", function() {
  updateDOM(_json);
});

function updateDOM(json) {
  _json = json;

  if (Math.round(json.latitude) == Math.round(lat) && Math.round(json.longitude) == Math.round(long)) {
    document.getElementById('WLabel').innerHTML = json.timezone;
    if (document.getElementById("displayWeather").checked == true) {
      document.getElementById('WDeg').innerHTML = Math.round((json.currently.temperature - 32) * 5 / 9) + "&deg;";
    } else {
      document.getElementById('WDeg').innerHTML = Math.round(json.currently.temperature) + "&deg;";
    }
    if (json.currently.icon == "clear-day") {
      document.getElementById('WIcon').classList.add('fa-sun', 'far');
    } else if (json.currently.icon == "clear-night") {
      document.getElementById('WIcon').classList.add('fa-moon', 'far');
    } else if (json.currently.icon == "rain") {
      document.getElementById('WIcon').classList.add('fa-cloud-rain', 'fas');
    } else if (json.currently.icon == "partly-cloudy-day" || json.currently.icon == "cloudy") {
      document.getElementById('WIcon').classList.add('fa-cloud', 'fas');
    } else if (json.currently.icon == "partly-cloudy-night") {
      document.getElementById('WIcon').classList.add('fa-cloud-moon', 'fas');
    } else if (json.currently.icon == "snow" || json.currently.icon == "sleet") {
      document.getElementById('WIcon').classList.add('fa-snowflake', 'fas');
    } else if (json.currently.icon == "fog") {
      document.getElementById('WIcon').classList.add('fa-smog', 'fas');
    } else if (json.currently.icon == "wind") {
      document.getElementById('WIcon').classList.add('fa-wind', 'fas');
    } else {
      console.warn("No Weather Icon has been found for this, resorting to default");
      document.getElementById('WIcon').classList.add('fa-cloud fas');
    }
  } else {
    setTimeout(weatherStart, 500);
  }
}

var HttpClient = function() {
  this.get = function(aUrl, aCallback) {
    var anHttpRequest = new XMLHttpRequest();
    anHttpRequest.onreadystatechange = function() {
      if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
        aCallback(anHttpRequest.responseText);
    }

    anHttpRequest.open("GET", aUrl, true);
    anHttpRequest.send(null);
  }
}

function quote() {
  var quoteAPI = "https://quotes.rest/qod.json"
  var client = new HttpClient();
  client.get(quoteAPI, function(response) {
    var quote = JSON.parse(response).contents.quotes[0];
    document.getElementById('Quote').innerHTML = "<p id='quoteText'>" + quote.quote + "</p><p id='QuoteAuthor'>" + quote.author + "</p>";
  });
}