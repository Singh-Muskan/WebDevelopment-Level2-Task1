const searchButton = document.getElementById("searchButton");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

searchButton.addEventListener("click", () => {
    const city = cityInput.value;
    if (city === "") {
        weatherInfo.innerHTML = "Please enter a city.";
        return;
    }
    
    const apiKey = "c111d346d61b9bc1daaa05cf7987f1a9";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const cityName = data.name;
            
            weatherInfo.innerHTML = `
                <h2>${cityName}</h2>
                <p>${description}</p>
                <p>Temperature: ${temperature}°C</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            weatherInfo.innerHTML = "Error fetching weather data.";
        });
});
