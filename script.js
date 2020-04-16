//this app should call the weather api on load
//this app should check local storage to show saved searches if they exist
//this app should display saved searches if they exist
//when search is used this app should validate city selection
//when a valid city is selected this app should be populated with todays weather data and the 5 day forecast

        
      //this is a function to capture user text input to use as a variable and also display on screen, console log and try to save in local storage
      function showData() {
        //an on-screen text box collects a value for city and then displays it on the screen as text
        var city = $("#city-input").val()
        $("#label-city").html(city);
        console.log(city);

        //taking the user input from the text box and turning it into an array that can be looped over and parsed out using json to save in local storage
        var userInput = [];
        var city = [userInput];
        const currentInput = JSON.parse(localStorage.getItem("city"));
        if (currentInput) {
            for (i = 0; i < currentInput.length; i++) {
                city.push(currentInput[i])
            }
        }
        localStorage.setItem("city", JSON.stringify(city))
    }

    var APIKey = "510f5ff0cb0a45dc6e2c8d7c150ce80e";
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Fairfax,Virginia&appid=" + APIKey;
    
       // We then created an AJAX call
       $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        console.log(response.main.temp);
        
        //grab data from api and put in variables
        var city = response.name;
        var wind = response.wind;
        var windSpeed = wind.speed;
        var windDeg = wind.deg;
        var humidity = response.main.humidity;
        var tempK = response.main.temp; 
    
        //convert kelvin temp to F
        var tempF = Math.floor(parseInt(tempK) - 273.15) * 1.80 + 32;
      
        // Create CODE HERE to transfer content to HTML
        $("#city-display").text( city);
        $("#temp").text("Temperature: " + tempF + "°");
        $("#humidity").text("Humidity is: " + humidity + "%");
        $("#wind-speed").text("Wind speed of: " + windSpeed + "mph");
        $("#wind-speed").text("Wind speed of: " + windSpeed + "mph");
    
    
      });







