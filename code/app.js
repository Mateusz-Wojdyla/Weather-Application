const apiKey = "69d61bb3d14b085606451481d54232f8";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
         var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "phptos/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "phptos/rain.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "phptos/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "phptos/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "phptos/mist.png";
    }
    document.querySelector(".weather").style.display = "block";
    }

   
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});