// module using ipify API to get client's ip
// uses API Type 1
// should upgrade to take type as parameter and use different api types

export default async function getIP() {
  const ip = await fetch(
    'https://geo.ipify.org/api/v2/country?apiKey=at_jSc4vE26LsNrEf6QwQaNNC5joKLPM',
    {
      mode: 'cors',
    }
  );
  return ip.json();
}
