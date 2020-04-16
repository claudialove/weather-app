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



    //grab data from api and put in variables
        var city = response.name;
        var windSpeed = response.wind.speed;
        var humidity = response.main.humidity;
        var tempK = response.main.temp;

              //convert kelvin temp to F
      var tempF = Math.round(parseInt(tempK) - 273.15) * 1.80 + 32;

            // Create CODE HERE to transfer content to HTML from daily api
    $("#city-display").text(city);
    $("#temp").text("Temperature: " + tempF + "°");
    $("#humidity").text("Humidity is: " + humidity + "%");
    $("#wind-speed").text("Wind speed of: " + windSpeed + "mph");
  });

    //and a call for 5-day weather data
    $.ajax({
      url: queryURLFive,
      method: "GET"
  }).then(function (response) {
    console.log(queryURLFive);
    console.log(response);
    console.log(response.list[0]);



    //grab data from 5 day api and put in variables
   
    var day1Date = response.list[0].dt_txt;
    var day1TempK = response.list[0].main.temp;
    var day1Hum = response.list[0].main.humidity;

    var day2Date = response.list[13].dt_txt;
    var day2TempK = response.list[13].main.temp;
    var day2Hum = response.list[13].main.humidity;

    var day3Date = response.list[19].dt_txt;
    var day3TempK = response.list[19].main.temp;
    var day3Hum = response.list[19].main.humidity;

    var day4Date = response.list[25].dt_txt;
    var day4TempK = response.list[25].main.temp;
    var day4Hum = response.list[25].main.humidity;

    var day5Date = response.list[32].dt_txt;
    var day5TempK = response.list[32].main.temp;
    var day5Hum = response.list[32].main.humidity;

  
    var day1TempF = Math.round(parseInt(day1TempK) - 273.15) * 1.80 + 32;
    var day2TempF = Math.round(parseInt(day2TempK) - 273.15) * 1.80 + 32;
    var day3TempF = Math.round(parseInt(day3TempK) - 273.15) * 1.80 + 32;
    var day4TempF = Math.round(parseInt(day4TempK) - 273.15) * 1.80 + 32;
    var day5TempF = Math.round(parseInt(day5TempK) - 273.15) * 1.80 + 32;


 

    // Create CODE HERE to transfer content to HTML from 5 day api
    $("#day1-date").text(day1Date);
    $("#day1-temp").text(day1TempF);
    $("#day1-humidity").text(day1Hum);

    $("#day2-date").text(day2Date);
    $("#day2-temp").text(day2TempF);
    $("#day2-humidity").text(day2Hum);

    $("#day3-date").text(day3Date);
    $("#day3-temp").text(day3TempF);
    $("#day3-humidity").text(day3Hum);

    $("#day4-date").text(day4Date);
    $("#day4-temp").text(day4TempF);
    $("#day4-humidity").text(day4Hum);

    $("#day5-date").text(day5Date);
    $("#day5-temp").text(day5TempF);
    $("#day5-humidity").text(day5Hum);


  });

}







