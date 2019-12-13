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
var temp = Math.round(Math.random() * 30);
document.getElementById("displayWeather").addEventListener("click", function() {
  if (document.getElementById("displayWeather").checked == true) {
    document.getElementById("WDeg").innerText = temp + "°";
  } else {
    document.getElementById("WDeg").innerText = (temp * (9 / 5) + 32) + "°";
  }
});

document.getElementById("WDeg").innerText = Math.round(Math.random() * 30) + "°";
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

randomNumber = Math.round(Math.random() * 4);

if (randomNumber == 0) {
  document.getElementById("quoteText").innerText = "What lies behind you and what lies in front of you, pales in comparison to what lies inside of you.";
  document.getElementById("QuoteAuthor").innerText = "Ralph Waldo Emerson.";
} else if (randomNumber == 1) {
  document.getElementById("quoteText").innerText = "If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away.";
  document.getElementById("QuoteAuthor").innerText = "Henry David Thoreau";
} else if (randomNumber == 2) {
  document.getElementById("quoteText").innerText = "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.";
  document.getElementById("QuoteAuthor").innerText = "Steve Jobs";
} else if (randomNumber == 3) {
  document.getElementById("quoteText").innerText = "As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them.";
  document.getElementById("QuoteAuthor").innerText = "John F. Kennedy";
} else if (randomNumber == 4) {
  document.getElementById("quoteText").innerText = "No act of kindness, no matter how small, is ever wasted.";
  document.getElementById("QuoteAuthor").innerText = "Aesop";
}

document.getElementById('quoteText').addEventListener('mouseover', showAuthor);
document.getElementById('quoteText').addEventListener('mouseout', hideAuthor);

function showAuthor() {
  document.getElementById('quoteText').classList.add("floatUp");
  document.getElementById('quoteText').classList.remove("floatDown");
  document.getElementById('QuoteAuthor').classList.add("quoteAuthorAppear");
  document.getElementById('QuoteAuthor').classList.remove("quoteAuthorFade");
}

function hideAuthor() {
  document.getElementById('quoteText').classList.remove("floatUp");
  document.getElementById('quoteText').classList.add("floatDown");
  document.getElementById('QuoteAuthor').classList.remove("quoteAuthorAppear");
  document.getElementById('QuoteAuthor').classList.add("quoteAuthorFade");
}