const input_city = document.getElementById("input_city");
const btn_search = document.getElementById("btn_search");
const day = document.getElementById("day");
const date = document.getElementById("date");
const city_name = document.getElementById("city_name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault();
  if (input_city.value) {
    try {
      const w_data = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${input_city.value}&units=metric&appid=a34df139e3277661f1e8309043f860da`
      );
      const data = await w_data.json();
      const tempmood = data.weather.main;
      city_name.innerText = `${data.name}, ${data.sys.country}`;
      temp.innerText = `${data.main.temp}°C`;
      if (tempmood == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color:#eccc68;'></i>";
      } else if (tempmood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#dfe4ea;'></i>";
      } else if (tempmood == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas fa-rain style='color:#a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color:#44c3de;'></i>";
      }
    } catch {
      city_name.innerText = "Please enter the city name correctly..";
    }
  } else {
    city_name.innerText = "Please enter the city name..";
  }
};
btn_search.addEventListener("click", getInfo);
input_city.addEventListener("change", (event) => {
  event.preventDefault();
  city_name.innerText = "";
  temp.innerText = "";
});
