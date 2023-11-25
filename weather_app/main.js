const apiKey = '7cf136be327b6538e88ecfbb210d43a6'

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")
async function checkWeather(city){
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}&units=metric`)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display="none"

    }
    
    var data =await response.json()

   
    console.log(data);

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " C"

    document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h"
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %"

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = './storm.png'
    }
    else if(data.weather[0].main =='Haze'){
        weatherIcon.src = './clear-sky.png'
    }

    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"
}

searchBtn.addEventListener("click",()=>{
    console.log('Btn');
    checkWeather(searchBox.value)
})



