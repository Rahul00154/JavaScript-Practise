const input = document.querySelector("input");
const button = document.getElementById("btn");

const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temperature");
const descrption = document.querySelector(".description");

button.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

function getWeather(city) {
  console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"d54fd4c977cbc6eaf2350839aea99eb3"}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png"/>`;

      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

      let weatherTemp = data.main.temp;
      weatherTemp = weatherTemp - 273;
      const tempr = weatherTemp.toFixed(2);
      temp.innerHTML = `${tempr}°C`;

      const weatherDesc = data.weather[0].description;
      descrption.innerHTML = weatherDesc;
    });
}
