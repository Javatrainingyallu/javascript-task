const apikey = "8ebaeb9cb5fda25f9d0a298d09439f2b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    if (response.status == 404) {
        document.querySelector(".error").display = "block";
        document.querySelector(".weather").display = "none";

        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    }
    if (data.wether[0].amin == "Clouds") {
        weatherIcon.src = "C:\Users\susan\OneDrive\html ans css\javascript tasks\weather app\images\images\clouds.png";
    }
    else if (data.wether[0].amin == "Clear") {
        weatherIcon.src = "C:\Users\susan\OneDrive\html ans css\javascript tasks\weather app\images\images\clear.png";
    }
    else if (data.wether[0].amin == "Rain") {
        weatherIcon.src = "C:\Users\susan\OneDrive\html ans css\javascript tasks\weather app\images\images\rain.png";
    }
    else if (data.wether[0].amin == "Drizzle") {
        weatherIcon.src = "C:\Users\susan\OneDrive\html ans css\javascript tasks\weather app\images\images\drizzle.png";
    }
    else if (data.wether[0].amin == "Mist") {
        weatherIcon.src = "C:\Users\susan\OneDrive\html ans css\javascript tasks\weather app\images\images\mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    searchBtn.addEventListener("click", () => {
        checkWeather(searchBox.value);
    })
}
checkWeather();