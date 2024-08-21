const API_KEY = '8BQWYXM3JXWVA9CAUUF9M9RZD'; 

const defultCityName = "london"
getWeatherData(defultCityName)

// Fetch and process the weather data
async function getWeatherData(location) {
  const urlApi = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}`;
  
  try {
    const response = await fetch(urlApi, {mode: "cors"});
    const data = await response.json();
    console.log('Raw data:', data);
    const processedData = processWeatherData(data);
    renderData(processedData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Extract relevant weather data
function processWeatherData(data) {
  return {
    location: data.resolvedAddress,
    temperature: data.currentConditions.temp,
    feelsLike: data.currentConditions.feelslike,
    conditions: data.currentConditions.conditions,
    time: data.currentConditions.datetime,
    date: new Date().toLocaleDateString(),
  };
}

// Render weather data on the page
function renderData(processedData) {
  document.getElementById('temp').innerHTML = processedData.temperature + "°C";
  document.getElementById('how-feels').innerHTML = "Feels like " + processedData.feelsLike + "°C";
  document.getElementById('city-name').innerHTML = processedData.location;
  document.getElementById('time').innerHTML = processedData.time;
  document.getElementById('date').innerHTML = processedData.date;
}

// Handle search button click event
document.querySelector('.search-btn').addEventListener("click", () => {
  const cityName = document.getElementById("search").value;
  console.log("The city name is:", cityName);
  if (cityName === "") return;
  getWeatherData(cityName); 
});
