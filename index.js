
// var repoList = document.querySelector('ul');
var fetchButton = document.getElementById("button-addon2");
// var input = document.querySelector("#search-city");
var cityName = document.querySelector("#cityName");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");

// const myKey = ("72196e67318ffa654665dd9cccf2f44c")
var repoList = document.getElementById("repoList");

function start() {
  var searchedCity = document.getElementById("search-input").value;
  getData(searchedCity);
}

function getData(city) {
  forecast(city);
  current(city);
}

function forecast(city) {
  var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=72196e67318ffa654665dd9cccf2f44c`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // call the display function here with the data parameter
      displayWeather(data);
    })
    .catch(function (error) {
      // handle the error here
      console.error(error);
    });
}
function current(city) {
  var requestUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=72196e67318ffa654665dd9cccf2f44c`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // call the display function here with the data parameter
      displayWeather(data);
    })
    .catch(function (error) {
      // handle the error here
      console.error(error);
    });
}

// write the display function here
function displayWeather(data) {
  // check if the data is valid
  if (data && data.cod == 200) {
    // update the HTML elements with the data
    cityName.innerHTML = data.name;
    temp.innerHTML = data.main.temp + " °F";
    wind.innerHTML = data.wind.speed + " mph";
    humidity.innerHTML = data.main.humidity + " %";
  } else {
    // display an error message
    cityName.innerHTML = "Sorry, something went wrong.";
    temp.innerHTML = "";
    wind.innerHTML = "";
    humidity.innerHTML = "";
  }
}

fetchButton.addEventListener("click", start);
// searchFormEl.addEventListener('submit', getLatLog);
// function getApi() {
//   .then(function (data){
//     console.log(data)
//   })
//   }
//   console.log("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=72196e67318ffa654665dd9cccf2f44c")
