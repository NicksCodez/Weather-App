import format from 'date-fns/format';
import getData from './getApiData';
import FormatData from './FormatData';
// text.split('').splice(text.length-7).join('')
export default function DisplayController() {
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

  function displayForecast(forecastWeather) {
    clearForecast();
    const forecast = document.getElementById('forecast');

    forecastWeather.forEach((day) => {
      forecast.innerHTML += `        <div class="forecast-day">
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

      const date = newDay.querySelector('.forecast-date');
      const avg = newDay.querySelector('.forecast-avg');
      const picture = newDay.querySelector('.forecast-picture');
      const minMax = newDay.querySelector('.forecast-minMax');
      const ftext = newDay.querySelector('.forecast-text');
      const wind = newDay.querySelector('.forecast-windSpeed-value');
      const humidity = newDay.querySelector('.forecast-humidity-value');
      const prec = newDay.querySelector('.forecast-precipitation-value');
      // console.log({
      //   date,
      //   avg,
      //   picture,
      //   minMax,
      //   ftext,
      //   wind,
      //   dir,
      //   humidity,
      //   prec,
      // });
      // console.log(day);
      const dayData = day;
      // console.log({ dayData });

      const imageAddress = dayData.condition.icon;
      const imageLocal = imageAddress.split('').splice(21).join('');
      console.log(dayData.date);
      date.textContent = format(dayData.date, 'do LLLL y');
      avg.textContent = `${dayData.avgTempC}\u00B0C`;
      picture.setAttribute('src', `./assets/images/${imageLocal}`);
      minMax.textContent = `${dayData.maxTempC}\u00B0C/${dayData.minTempC}\u00B0C`;
      ftext.textContent = dayData.condition.text;
      wind.textContent = `${dayData.maxWindKph} Km/h`;
      humidity.textContent = `${dayData.avgHumidity}%`;
      prec.textContent = `${dayData.totalPrecipMm} mm`;
    });
  }

  async function displayMainPage(city) {
    getData(city)
      .then((response) => {
        console.log('response ', response);
        const formatData = FormatData(response);
        const currentWeather = formatData.getCurrentWeatherMetric();
        const forecastWeather = formatData.getForecastMetric();

        displayCurrent(currentWeather);
        displayForecast(forecastWeather);
      })
      .catch((err) => console.log(err));
  }

  return { displayMainPage };
}
