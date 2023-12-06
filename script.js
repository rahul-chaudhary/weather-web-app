const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f70d5bbb9dmsh886b74511a22846p14ed06jsnb38e6f6085f7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log((result) => {
// 		cloud_pct = response.cloud_pct
// 		temp = response.temp
// 		feels_like = response.feels_like
// 		humidity = response.humidity
// 		min_temp = response.min_temp
// 		max_temp = response.max_temp
// 		wind_speed = response.wind_speed
// 		wind_degrees = response.wind_degrees
// 		sunrise = response.sunrise
// 		sunset = response.sunset  
// 	}
// 	);
// } catch (error) {
// 	console.error(error);
// }


const getWeather = (city) => {
	cityName.innerHTML = city
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+ city, options)
	.then(response =>response.json())
	.then((response) => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
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
	})
	.catch(err => console.error(err));
}

//Delhi
const getWeatherDelhi = () => {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi", options)
	.then(response =>response.json())
	.then((response) => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		delhi_temp.innerHTML = response.temp
		delhi_feels_like.innerHTML = response.feels_like
		delhi_humidity.innerHTML = response.humidity
	})
	.catch(err => console.error(err));
}
//Muzaffarpur
const getWeatherMuz = () => {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Muzaffarpur", options)
	.then(response =>response.json())
	.then((response) => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		muz_temp.innerHTML = response.temp
		muz_feels_like.innerHTML = response.feels_like
		muz_humidity.innerHTML = response.humidity
	})
	.catch(err => console.error(err));
}

//Guwahati
const getWeatherGuwahati = () => {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Guwahati", options)
	.then(response =>response.json())
	.then((response) => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		ghy_temp.innerHTML = response.temp
		ghy_feels_like.innerHTML = response.feels_like
		ghy_humidity.innerHTML = response.humidity
	})
	.catch(err => console.error(err));
}

//Madhepura
const getWeatherMadhepura = () => {
	fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Madhepura", options)
	.then(response =>response.json())
	.then((response) => {
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		dhm_temp.innerHTML = response.temp
		dhm_feels_like.innerHTML = response.feels_like
		dhm_humidity.innerHTML = response.humidity
	})
	.catch(err => console.error(err));
}


const loadPopularCitiesWeather = () => {
	getWeatherDelhi()
	getWeatherMuz()
	getWeatherGuwahati()
	getWeatherMadhepura()
}

submit.addEventListener("click", (e) => {
	e.preventDefault()
	getWeather(city.value)
})


getWeather("Solan") 
loadPopularCitiesWeather()
