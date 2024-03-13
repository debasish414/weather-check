
const btn = document.querySelector(".btn");
const input = document.querySelector("#input");
const cityTemp = document.querySelector(".main-temp");
const Humudity = document.querySelector(".Humudity");
const wind = document.querySelector(".wind");
let getWeather = () =>{
    let city = input.value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55f46f956057e4c5e39d3d46bf57902f&units=metric`
    console.log(url)
    fetch(url).then((resp) => resp.json()).then((data) => {
    //   console.log(data)
    cityTemp.innerText = Math.round(data.main.temp) + "°C"
    document.getElementById("ci").innerHTML = (data.name);
    Humudity.innerText = (data.main.humidity + " %");
    wind.innerText = (data.wind.speed + " km/h");
    })
    };
    
    btn.addEventListener("click", getWeather)


