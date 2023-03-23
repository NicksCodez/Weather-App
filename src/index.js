import './style.css';
import getApiData from './getApiData';
import FormatData from './FormatData';
import DisplayController from './displayController';

// const displayController = DisplayController();

// displayController.displayMainPage();

// const data = getApiData().then((response) => {
//   response.forecast.forecastday.forEach((day) => {
//     console.log(day);
//   });
//   const formatData = FormatData(response);
//   const current = formatData.getCurrentWeatherMetric();
//   console.log(current);
//   const forecast = formatData.getForecastMetric();
//   console.log(forecast);
// });
// const ip = (async () => {
//   const ipTemp = await fetch(
//     'https://geo.ipify.org/api/v2/country?apiKey=at_jSc4vE26LsNrEf6QwQaNNC5joKLPM'
//   );
//   return ipTemp.json();
// })();
// ip.then((response) => console.log(response));
