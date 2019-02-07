// use try/catch, not .then and .catch

async function getWeatherAW(woeid) {
  try {
    const result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`
    );
    const data = await result.json();
    const tomorrow = data.consolidated_weather[1];
    console.log(
      `Temperatures tomorrow in ${data.title} stay between ${
        tomorrow.min_temp
      } and ${tomorrow.max_temp}.`
    );
    return data; // returns a Promise
  } catch (error) {
    alert(error);
  }
}
getWeatherAW(2487956);

let dataLondon;
getWeatherAW(44418).then(data => {
  dataLondon = data;
  console.log(dataLondon);
});
