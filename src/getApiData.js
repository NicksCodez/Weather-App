import getIP from './getIP';

export default async function getData(city) {
  let clientIp;
  if (typeof city === 'undefined') {
    clientIp = await getIP();
  }
  const data = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=0813d3a5175b44529fd180407232203&q=${
      city || clientIp.ip
    }&days=3&aqi=no&alerts=no`,
    {
      mode: 'cors',
    }
  );
  const weather = await data.json();
  return weather;
}
