const apiKey = "bb5e70428ba328213012eed7d1add00e";


var searchBtn = document.getElementById("btn1");







async function getWeather(name){
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="+name+"&units=metric&appid="+apiKey;
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    const temp = document.getElementsByClassName("temp")[0];
    temp.innerHTML = Math.round(data.main.temp) + "°C";

    const cityName = document.getElementsByClassName("city")[0];
    cityName.innerHTML = data.name;
    const humidity = document.getElementsByClassName("humidity")[0];
    humidity.innerHTML = data.main.humidity + "%";
    const wind = document.getElementsByClassName("wind")[0];
    wind.innerHTML = data.wind.speed + " kmph";

}

searchBtn.addEventListener("click", ()=>{
    var cityName = document.getElementById("cityName").value;
    getWeather(cityName);
})




