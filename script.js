//this app should call the weather api on load
//this app should check local storage to show saved searches if they exist
//this app should display saved searches if they exist
//when search is used this app should validate city selection
//when a valid city is selected this app should be populated with todays weather data and the 5 day forecast


//load storage when page renders
function getFromStorage() {
  var storedData = localStorage.getItem("city");
  if (storedData) {
    var city = JSON.parse(storedData)
  } else {
    var city = {}
  }
}

//render value for city-input on the screen
function renderState() {
  $("#city-input").text(city.name)
}

//save to local storage after its rendered
function saveToStorage(){
  localStorage.setItem("city", JSON.stringify(city));
}
function showData() {
  //an on-screen text box collects a value for city and then displays it on the screen as text
  var city = $("#city-input").val()
  $("#label-city").html(city);
  console.log(city);

//this is a function to capture user text input to use as a variable and also display on screen, console log and try to save in local storage


//variables for API call and concatenated URL strings
  var APIKey = "510f5ff0cb0a45dc6e2c8d7c150ce80e";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
  var queryURLFive = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;

  // We then created an AJAX call for today's weather
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL);
    console.log(response);
    console.log(response.main.temp);

    //and a call for 5-day weather data
    $.ajax({
      url: queryURLFive,
      method: "GET"
  }).then(function (response) {
    console.log(queryURLFive);
    console.log(response);
  });

    //grab data from api and put in variables
    var city = response.name;
    var wind = response.wind;
    var windSpeed = wind.speed;
    var windDeg = wind.deg;
    var humidity = response.main.humidity;
    var tempK = response.main.temp;

    //convert kelvin temp to F
    var tempF = Math.round(parseInt(tempK) - 273.15) * 1.80 + 32;

    // Create CODE HERE to transfer content to HTML
    $("#city-display").text(city);
    $("#temp").text("Temperature: " + tempF + "°");
    $("#humidity").text("Humidity is: " + humidity + "%");
    $("#wind-speed").text("Wind speed of: " + windSpeed + "mph");
    $("#wind-speed").text("Wind speed of: " + windSpeed + "mph");


  });

}







