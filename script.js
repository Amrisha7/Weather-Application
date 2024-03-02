const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR API KEY',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)//if you hardcode the city name it'll not be dynamic for other cities
    .then(response => response.json())
    .then(response => {
		console.log(response)
		cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		updateComparisonTable(city, response);
	})
    .catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()//prevents reloading the page
	getWeather(city.value);
})
getWeather("Kolkata")
getWeather("Delhi");
getWeather("Lucknow");
getWeather("Bangalore");
getWeather("Mumbai");
function updateComparisonTable(city, data) {
	console.log('Updating comparison table for ' + city);
    // Update the respective cells in the comparison table based on the provided data
    document.getElementById(city + '-cloud_pct').innerHTML = data.cloud_pct;
	document.getElementById(city + '-feels_like').innerHTML = data.feels_like;
	document.getElementById(city + '-humidity').innerHTML = data.humidity;
	document.getElementById(city + '-max_temp').innerHTML = data.max_temp;
	document.getElementById(city + '-min_temp').innerHTML = data.min_temp;
	document.getElementById(city + '-sunrise').innerHTML = data.sunrise;
	document.getElementById(city + '-sunset').innerHTML = data.sunset;
	document.getElementById(city + '-temp').innerHTML = data.temp;
	document.getElementById(city + '-wind_degrees').innerHTML = data.wind_degrees;
	document.getElementById(city + '-wind_speed').innerHTML = data.wind_speed;
}
