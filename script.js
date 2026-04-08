async function getWeather() {
    let city = document.getElementById("city").value;

    let apiKey = "7206581151f45b9eb0ba1e426266ab02";
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.cod != 200) {
            document.getElementById("weatherResult").innerHTML = "City not found ❌";
            return;
        }

        let output = `
            <h2>${data.name}</h2>
            <p>🌡️ Temperature: ${data.main.temp} °C</p>
            <p>🌤️ Condition: ${data.weather[0].main}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        `;

        document.getElementById("weatherResult").innerHTML = output;

    } catch (error) {
        document.getElementById("weatherResult").innerHTML = "Error fetching data ❌";
    }
}