const API_KEY = ""; // Never expose secret keys in production

const getData = async (city) => {
  if (!city) return;
  const URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
  const location = document.getElementById("location");
  const temp = document.getElementById("temperature");
  const desc = document.getElementById("description");

  try {
    location.innerHTML = "Loading...";
    temp.innerHTML = "";
    desc.innerHTML = "";

    const result = await fetch(URL);
    if (!result.ok) throw new Error("City not found");
    const data = await result.json();

    const temperature = data.current.temp_c;
    const condition = data.current.condition.text;

    location.innerHTML = city;
    temp.innerHTML = `${temperature}° Celsius`;
    desc.innerHTML = condition;
  } catch (error) {
    location.innerHTML = "Error";
    temp.innerHTML = "";
    desc.innerHTML = error.message;
  }
};

document.getElementById("searchButton").addEventListener("click", () => {
  const targetCity = document.getElementById("locationInput");
  if (targetCity.value.trim() !== "") {
    getData(targetCity.value.trim());
    targetCity.value = "";
  }
});
