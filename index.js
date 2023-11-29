// var repoList = document.querySelector('ul');
var fetchButton = document.getElementById("button-addon2");
// var searchFormEl = document.querySelector('#search-form');
// const myKey = ("72196e67318ffa654665dd9cccf2f44c")
var repoList = document.getElementById("repoList")
function getLatLog() {
  var searchedCity = document.getElementById("search-input").value;
  console.log(searchedCity);
  var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=5&appid=72196e67318ffa654665dd9cccf2f44c`;
  fetch(requestUrl)
    .then(function (response) {
      // console.log("response")
      return response.json();
    })
    .then(function (data) {
      // console.log(data)
      var requestUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=72196e67318ffa654665dd9cccf2f44c`;
      fetch(requestUrl)
        .then(function (response) {
          return response.json();
        })
        .then(function (response) {
          console.log(response);
          for (var i = 0; i < data.length; i++) {
            var listItem = document.createElement("li");
            listItem.textContent = data[i].dt;
            repoList.appendChild(listItem);
          }
        });
    });
  // if (!searchInputVal) {
  //   console.error('You need a search input value!');
  //   return;
  // }
}
fetchButton.addEventListener("click", getLatLog);
// searchFormEl.addEventListener('submit', getLatLog);
// function getApi() {
//   .then(function (data){
//     console.log(data)
//   })
//   }
//   console.log("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=72196e67318ffa654665dd9cccf2f44c")
