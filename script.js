function getWeather() {
    const apiKey = 'b12108cb59f4ba83165d56abfc2aad35';
    const location = document.getElementById('location').value;

    if (location === '') {
        alert('Please enter a location');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherData = document.getElementById('weather-data');
            weatherData.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${Math.round(data.main.temp - 273.15)}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
