document.getElementById('getWeather').addEventListener('click', async function() {  
    const city = document.getElementById('cityInput').value;  
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  

    try {  
        const response = await fetch(url);  
        if (!response.ok) {  
            throw new Error('City not found');  
        }  
        const data = await response.json();  
        const weatherDescription = data.weather[0].description;  
        const temperature = data.main.temp;  
        const location = data.name;  

        document.getElementById('weatherResult').innerHTML = `  
            <h2>Weather in ${location}</h2>  
            <p>Temperature: ${temperature} °C</p>  
            <p>Description: ${weatherDescription}</p>  
        `;  
    } catch (error) {  
        document.getElementById('weatherResult').innerText = error.message;  
    }  
});