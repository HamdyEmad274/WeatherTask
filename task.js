const countrySelect = document.getElementById('countriesSelect');
const getWeatherbtn = document.getElementById('getWeatherbtn');
const weatherInfo = document.getElementById('weatherInfo');
const OPEN_WEATHER_API_KEY = '86bd8a884ced5b1329848274c1e35c1d';

async function loadCountries(){
    try{
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
        countrySelect.innerHTML = '';
        countries.forEach(country => {
            if(country.capital&&country.capital.length>0){
                const option = document.createElement('option');
                option.value = country.capital[0];
                option.textContent = country.name.common;
                countrySelect.appendChild(option);
            }
        });
    }
    catch(error){
        countrySelect.innerHTML = '<option value="">Error loading countries</option>';
    }
}
async function fetchWeather(){
    const selectedOption = countrySelect.options[countrySelect.selectedIndex];
    const capital = countrySelect.value;
    const countryName = selectedOption ? selectedOption.textContent : '';
    if(!capital){
        weatherInfo.innerHTML = '<p>Please select a country</p>';
        return;
    }
    weatherInfo.innerHTML = '<p>Loading weather data...</p>';
    try {
        const weatherRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${OPEN_WEATHER_API_KEY}&units=metric`);
        if (!weatherRes.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const weatherData = await weatherRes.json();
        weatherInfo.innerHTML = `
            <h2>Weather in ${capital}</h2>
            <ul>
                <li><strong>Description:</strong> ${weatherData.weather[0].description}</li>
                <li><strong>Temperature:</strong> ${weatherData.main.temp}°C</li>
                <li><strong>Humidity:</strong> ${weatherData.main.humidity}%</li>
                <li><strong>Pressure:</strong> ${weatherData.main.pressure} hPa</li>
                <li><strong>Wind Speed:</strong> ${weatherData.wind.speed} m/s</li>
            </ul>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

getWeatherbtn.addEventListener('click', fetchWeather);
window.addEventListener('DOMContentLoaded', loadCountries);