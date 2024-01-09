const API_KEY = `265e793b838d7ee5233e55055c87eb7f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

    const getweather = async(city)=>{
     weather.innerHTML = `<h2> Loading... </h2>`
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
     const response = await fetch(url);
     const data = await response.json()
     console.log(data)
     return showWeather(data);


    }
    const showWeather = (data)=>{
        if(data.cod == "404"){
            weather.innerHTML = `<h2> City Not Found  </h2>`
        return;
        }
        const sunriseTime = data.sys.sunrise; 
        const sunsetTime = data.sys.sunset;

        const sunriseDate = new Date(sunriseTime * 1000);
        const sunsetDate = new Date(sunsetTime * 1000);
        
        const sunriseFormatted = sunriseDate.toLocaleTimeString();
        const sunsetFormatted = sunsetDate.toLocaleTimeString();
        
        
        console.log("Sunrise" ,sunriseFormatted)
        console.log("Sunset",sunsetFormatted)

        
        weather.innerHTML = `
      
        <div>   
        <br>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
        <h2 id="temp">${data.main.temp} ℃</h2>
        <h4 id="wth"> ${data.weather[0].main} </h4>
        <h3 id="head" > <i class="bi bi-geo-alt"></i> ${data.name}</h3>
        
        

        <table class="table">
    <tbody>
      <tr>
        <td class="col-md-6"><i class="bi bi-thermometer-sun custom-icon"></i>
  
        <span class="ms-2"> ${data.main.feels_like}°C</span>
        <br> <h2 style="font-size: 22px;">Feels,like</h2>
         </td>

        <td class="col-md-6">
        <i class="bi bi-droplet colored-humidity"></i>
        <span class="ms-2"> ${data.main.humidity}%</span>
        <br> <h2>Humidity</h2></td>

        </tr>    
    </tbody>
  </table>
  <table class="table">
  <tbody>
    <tr>

    <td class="col-md-6">
    <i class="bi bi-wind"></i>
    <span class="ms-2"> ${data.wind.speed}m/s</span>
    <br> <h2>Wind Speed</h2></td>
        
    <td class="col-md-6">
    <i class="bi bi-water"></i>
        <span class="ms-2"> ${data.main.pressure} mb</span>
        <br> <h2>nPa</h2></td>

    </tr>
  </tbody>
</table>
</table>
<table class="table">
<tbody>
  <tr>
  <td class="col-md-6">
  <i class="bi bi-thermometer-half"></i>
  <span class="ms-2"> ${data.main.temp_max}°C</span>
  <br> <h2>Temp Max</h2></td>
  
  <td class="col-md-6">
  <i class="bi bi-thermometer-low"></i>
        <span class="ms-2"> ${data.main.temp_min}°C</span>
  <br> <h2>Temp Min</h2></td>
  
  </tr>

</tbody>
</table>


<table class="table">
<tbody>
  <tr>
  <td class="col-md-6">
  <i class="bi bi-brightness-high-fill"></i>
  <span class="ms-2"> ${sunriseFormatted}</span>
  <br> <h2>Sunrise</h2></td>
  
  <td class="col-md-6">
  <i class="bi bi-brightness-low"></i>
        <span class="ms-2"> ${sunsetFormatted}</span>
  <br> <h2>Sunset</h2></td>
  
  </tr>

</tbody>
</table>
        
        </div>
        
        
        `
   search.value=""    
}

    form.addEventListener(
        "submit",
        function(event) {
            getweather(search.value)
            event.preventDefault();
        }
    )