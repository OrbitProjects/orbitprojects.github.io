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

document.getElementById("WDeg").innerText = Math.round(Math.random() * 30); + "&deg;";
var randomNumber = Math.round(Math.random() * 4);

if (randomNumber == 0) {
  document.getElementById("WLabel").innerText = "Australia/Perth";
} else if (randomNumber == 1) {
  document.getElementById("WLabel").innerText = "Europe/London";
} else if (randomNumber == 2) {
  document.getElementById("WLabel").innerText = "Asia/Tokyo";
} else if (randomNumber == 3) {
  document.getElementById("WLabel").innerText = "America/Sao Paulo";
} else if (randomNumber == 4) {
  document.getElementById("WLabel").innerText = "Europe/Moscow";
}