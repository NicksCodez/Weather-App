export default async function getData(city) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=0813d3a5175b44529fd180407232203&q=${city}&days=3&aqi=no&alerts=no`
  );
  // console.log(data);
  const weather = await data.json();
  // console.log(weather);
  // console.log(weather.current);
  // console.log(typeof weather);
  return weather;
}
