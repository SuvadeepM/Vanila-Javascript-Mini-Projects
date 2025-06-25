const API_KEY = "";

const getData = async (city) => {
  let URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  let location = document.getElementById("location");
  let temp = document.getElementById("temperature");
  let desc = document.getElementById("description");

  const result = await fetch(URL);
  const data = await result.json();

  let temparature = data.current.heatindex_c;
  let condition = data.current.condition.text;

  location.innerHTML = city;
  temp.innerHTML = `${temparature} degree Celsius`;
  desc.innerHTML = condition;
};

document.getElementById("searchButton").addEventListener("click", () => {
  let targetCity = document.getElementById("locationInput");
  getData(targetCity.value);
  targetCity.value = "";
});
