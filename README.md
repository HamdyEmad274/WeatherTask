# 🌦️ Simple Weather Application

## 📋 Task
Create a simple weather application that allows users to select a country from a dropdown menu and fetches weather data for the **capital city** of the selected country using the **OpenWeatherMap API**.

---

## 🛠️ Task Description

### 1. HTML
- Create a simple HTML page containing:
  - A **dropdown list** (`<select>`) to display country names fetched from the API:
    - [`https://restcountries.com/v3.1/all`](https://restcountries.com/v3.1/all)
  - A **button** to fetch the weather data.
  - A **div** to display the fetched weather information.

### 2. JavaScript
- Write JavaScript functions to:
  - Fetch the list of countries from the **REST Countries API** and populate the dropdown list.
  - Fetch the weather data using the **OpenWeatherMap API** with the selected **capital city**.
  - Display the weather information inside the designated div, including:
    - 🌡️ **Temperature** (°C)
    - ☁️ **Weather Description**
    - 💧 **Humidity** (%)
    - 📈 **Pressure** (hPa)
    - 💨 **Wind Speed** (m/s)

---

## 🌍 APIs Used

- **Get Countries API**  
  [`https://restcountries.com/v3.1/all`](https://restcountries.com/v3.1/all)

- **Get Weather API (Example)**  
  [`https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=86bd8a884ced5b1329848274c1e35c1d&units=metric`](https://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=86bd8a884ced5b1329848274c1e35c1d&units=metric)

---

## 🔑 API Key

> **OpenWeatherMap API Key:**  
> `86bd8a884ced5b1329848274c1e35c1d`

---

## 📝 Notes

- ✅ Countries are fetched dynamically when the page loads.
- ✅ Weather data is fetched when the user clicks the button after selecting a country.
- ✅ Error handling is implemented for a better user experience.
---
## 💡 How To Run

- ✅ Clone the repository.
- ✅ Open the HTML file in your browser.
- ✅ Select a country and click the button to see the weather!
