let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");

 //function to fetch weather from Api and display them

 let getWeather = ()=>{
let cityValue = cityRef.value;
//if input field is empty
if(cityValue.length ==0)
{
    result.innerHTML= `<h3 class="msg">Please enter a city name</h3>`;
}
else{
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    fetch(url).then( (Resp)=> Resp.json())
    //if city name is valid
    .then((data) =>{
console.log(data.weather[0].description);
        result.innerHTML=`<h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].description}</h4>
         <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
         <h1>${data.main.temp} &#176</h1>
         <div class="temp-container">
         <div>
         <h4 class="title">min</h4>
         <h4 class="temp">${data.main.temp_min}</h4>
         </div>
         <div>
         <h4 class="title">max</h4>
         <h4 class="temp">${data.main.temp_max}</h4>
         </div>
         </div>
         `;
    }
    // If city name is not valid
    ).catch(()=>{
        result.innerHTML=`<h3 class="msg">City not found</h3>`;
       
    })
}
 };
 cityRef.addEventListener("keyup", function(e){
    e.preventDefault();
    if(e.keyCode === 13)
    {
searchBtn.click();
    }
}
);
 searchBtn.addEventListener('click', getWeather);
 window.addEventListener("load", getWeather); 