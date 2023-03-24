import format from 'date-fns/format';
import getData from './getApiData';
import FormatData from './FormatData';

export default function DisplayController() {
  let cachedCurrent;
  let cachedForecast;

  function displayCurrent(currentWeather) {
    const currentText = document.getElementById('current-text');
    const currentPicture = document.getElementById('current-picture');
    const currentTemp = document.getElementById('current-temp');
    const currentFeels = document.getElementById('current-feels');
    const currentHumidity = document.getElementById('current-humidity-value');
    const currentPrecipitation = document.getElementById(
      'current-precipitation-value'
    );
    const currentWindSpeed = document.getElementById('current-windSpeed-value');
    const currentWindDir = document.getElementById('current-windDir-value');

    const currentDay = document.getElementById('current-weekday');
    const currentDate = document.getElementById('current-date');
    const currentTime = document.getElementById('current-time');
    const currentLocation = document.querySelector('.current-location');

    const imageAddress = currentWeather.condition.icon;
    const imageLocal = imageAddress.split('').splice(21).join('');
    currentText.textContent = currentWeather.condition.text;
    currentPicture.setAttribute('src', `./assets/images/${imageLocal}`);
    currentTemp.textContent = `${currentWeather.tempC}\u00B0C`;
    currentFeels.textContent = `Feels like ${currentWeather.feelsLikeC}\u00B0C`;
    currentHumidity.textContent = `${currentWeather.humidity}%`;
    currentPrecipitation.textContent = `${currentWeather.precipMm} mm`;
    currentWindSpeed.textContent = `${currentWeather.windKph} Km/h`;
    currentWindDir.textContent = `${currentWeather.windDir}`;

    currentDay.textContent = format(currentWeather.time, 'cccc');
    currentDate.textContent = format(currentWeather.time, 'do LLLL y');
    currentTime.textContent = format(currentWeather.time, 'p');
    currentLocation.textContent = `${currentWeather.city}, ${currentWeather.country}`;
  }

  function clearForecast() {
    const forecast = document.getElementById('forecast');
    while (forecast.firstChild) {
      forecast.removeChild(forecast.lastChild);
    }
  }

  function populateForecastElement(element, day) {
    const date = element.querySelector('.forecast-date');
    const avg = element.querySelector('.forecast-avg');
    const picture = element.querySelector('.forecast-picture');
    const minMax = element.querySelector('.forecast-minMax');
    const ftext = element.querySelector('.forecast-text');
    const wind = element.querySelector('.forecast-windSpeed-value');
    const humidity = element.querySelector('.forecast-humidity-value');
    const prec = element.querySelector('.forecast-precipitation-value');

    const imageAddress = day.condition.icon;
    const imageLocal = imageAddress.split('').splice(21).join('');
    date.textContent = format(day.date, 'do LLLL y');
    avg.textContent = `${day.avgTempC}\u00B0C`;
    picture.setAttribute('src', `./assets/images/${imageLocal}`);
    minMax.textContent = `${day.maxTempC}\u00B0C/${day.minTempC}\u00B0C`;
    ftext.textContent = day.condition.text;
    wind.textContent = `${day.maxWindKph} Km/h`;
    humidity.textContent = `${day.avgHumidity}%`;
    prec.textContent = `${day.totalPrecipMm} mm`;
  }

  function displayForecast(forecastWeather) {
    clearForecast();
    const forecast = document.getElementById('forecast');

    forecastWeather.forEach((day) => {
      forecast.innerHTML += `        <div tabindex="0" class="forecast-day">
      <div class="forecast-date"></div>
      <div class="forecast-avg"></div>
      <img src="" alt="weather-picture" class="forecast-picture">
      <div class="forecast-minMax"></div>
      <div class="forecast-text"></div>
      <img src="./assets/images/icons/wind.svg" alt="wind image" class="forecast-windSpeed-icon">
      <div class="forecast-windSpeed-value"></div>
      <img src="./assets/images/icons/droplet.svg" alt="droplet image" class="forecast-humidity-icon">
      <div class="forecast-humidity-value"></div>
      <img src="./assets/images/icons/cloud-rain.svg" alt="cloud raining image" class="forecast-precipitation-icon">
      <div class="forecast-precipitation-value"></div>
    </div>`;
      const newDay = forecast.lastElementChild;
      populateForecastElement(newDay, day);
    });
  }

  async function displayMainPage(city) {
    const response = await getData(city);
    const formatData = FormatData(response);
    const currentWeather = formatData.getCurrentWeatherMetric();
    cachedCurrent = currentWeather;
    const forecastWeather = formatData.getForecastMetric();
    cachedForecast = forecastWeather;

    displayCurrent(currentWeather);
    displayForecast(forecastWeather);
  }

  function populateHourlyElement(div, data) {
    data.hours.forEach((hour) => {
      div.innerHTML += `<div class="hourly-weather">
      <div class="hour"></div>
      <div class="hourly-text"></div>
      <div class="hourly-temp"></div>
      <div class="hourly-feels"></div>
      <img src ="" class="hourly-picture"></img>
      <img src="./assets/images/icons/droplet.svg" class="hourly-humidity-icon"></img>
      <div class="hourly-humidity-title"></div>
      <div class="hourly-humidity-value"></div>
      <img src="./assets/images/icons/cloud-rain.svg" class="hourly-precipitation-icon"></img>
      <div class="hourly-precipitation-title"></div>
      <div class="hourly-precipitation-value"></div>
      <img src="./assets/images/icons/wind.svg" class="hourly-windSpeed-icon"></img>
      <div class="hourly-windSpeed-title"></div>
      <div class="hourly-windSpeed-value"></div>
      <img src="./assets/images/icons/compass.svg" class="hourly-windDir-icon"></img>
      <div class="hourly-windDir-title"></div>
      <div class="hourly-windDir-value"></div>
    </div>`;
      const hourDiv = div.lastElementChild;

      const hourDraw = hourDiv.querySelector('.hour');
      const text = hourDiv.querySelector('.hourly-text');
      const temp = hourDiv.querySelector('.hourly-temp');
      const feels = hourDiv.querySelector('.hourly-feels');
      const picture = hourDiv.querySelector('.hourly-picture');
      const humidity = hourDiv.querySelector('.hourly-humidity-value');
      const precipitation = hourDiv.querySelector(
        '.hourly-precipitation-value'
      );
      const windSpeed = hourDiv.querySelector('.hourly-windSpeed-value');
      const windDir = hourDiv.querySelector('.hourly-windDir-value');

      const imageAddress = hour.condition.icon;
      const imageLocal = imageAddress.split('').splice(21).join('');

      hourDraw.textContent = format(hour.time, 'p');
      text.textContent = hour.condition.text;
      temp.textContent = hour.tempC;
      picture.setAttribute('src', `./assets/images/${imageLocal}`);
      feels.textContent = `Feels like ${hour.feelsLikeC}\u00B0C`;
      humidity.textContent = `${hour.humidity}%`;
      precipitation.textContent = `${hour.precipMm} mm`;
      windSpeed.textContent = `${hour.windKph} Km/h`;
      windDir.textContent = `${hour.windDir}`;
    });
  }

  function populateAstroElement(div, data) {
    const sunriseTime = div.querySelector('.sunrise-time');
    const sunsetTime = div.querySelector('.sunset-time');
    const moonriseTime = div.querySelector('.moonrise-time');
    const moonsetTime = div.querySelector('.moonset-time');

    sunriseTime.textContent = data.astro.sunrise;
    sunsetTime.textContent = data.astro.sunset;
    moonriseTime.textContent = data.astro.moonrise;
    moonsetTime.textContent = data.astro.moonset;
  }

  function displayDetails(div) {
    const date = div.querySelector('.forecast-date');
    let dayData;
    cachedForecast.forEach((day) => {
      if (date.textContent === format(day.date, 'do LLLL y')) {
        dayData = day;
      }
    });
    if (typeof dayData !== 'undefined') {
      const details = document.getElementById('details');
      const dayDiv = details.querySelector('.forecast-day');
      const astroDiv = details.querySelector('.astro');
      const hourlyDiv = document.getElementById('details-hours');
      populateForecastElement(dayDiv, dayData);
      populateAstroElement(astroDiv, dayData);
      populateHourlyElement(hourlyDiv, dayData);
      details.classList.add('active');
    }
  }

  function initForecast() {
    const forecast = document.getElementById('forecast');
    for (const child of forecast.children) {
      child.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        displayDetails(child);
      });
    }
  }

  return { displayMainPage, initForecast };
}
