export default async function getData(city) {
  async function getIp() {
    const ip = await fetch(
      'https://geo.ipify.org/api/v2/country?apiKey=at_jSc4vE26LsNrEf6QwQaNNC5joKLPM'
    );
    return ip.json();
  }
  let clientIp;
  if (typeof city === 'undefined') {
    clientIp = await getIp();
  }
  const data = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=0813d3a5175b44529fd180407232203&q=${
      city || clientIp.ip
    }&days=3&aqi=no&alerts=no`
  );
  // console.log(data);
  const weather = await data.json();
  // console.log(weather);
  // console.log(weather.current);
  // console.log(typeof weather);
  return weather;
}
