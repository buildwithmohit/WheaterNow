async function getWeather() {
  const location = document.getElementById('locationInput').value;
  if (!location) {
    alert("Please enter a location!");
    return;
  }

  const apiKey = "2df8a4b99fda43ffbcf201603251005";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Weather data not found!");

    const data = await response.json();

    document.getElementById('city').textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById('conditionText').textContent = data.current.condition.text;
    document.getElementById('conditionIcon').src = `https:${data.current.condition.icon}`;
    document.getElementById('temperature').textContent = data.current.temp_c;
    document.getElementById('humidity').textContent = data.current.humidity;
    document.getElementById('wind').textContent = data.current.wind_kph;
    document.getElementById('feelslike').textContent = data.current.feelslike_c;
    document.getElementById('localtime').textContent = data.location.localtime;

    document.getElementById('weatherResult').classList.remove('hidden');
  } catch (error) {
    alert("Error fetching weather data. Please check your input.");
    console.error(error);
  }
}
