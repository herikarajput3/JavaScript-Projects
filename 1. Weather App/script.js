const APIKey = "c3fdd4e2e28b61bc5e60102420e00c3d";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weather_icon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(APIURL + city + `&appid=${APIKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();//It has all the information about the weather of city

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weather_icon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weather_icon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weather_icon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weather_icon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weather_icon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
