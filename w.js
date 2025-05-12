const apikey="da61a9c984c023836bdb3a5ea93a2cc2"
 const apiUrl ="https: //api.openweathermap.org/data/2.5/weather?q=${London}&units=metric";

 const searchbox=document.querySelector(".search input");
 const searchBtn =document.querySelector(".search button");

 console.log(apikey);
 console.log(apiUrl);

 async function checkweather(city) {
    const response=await fetch(apiUrl+city+"&appid=${apikey}");
    var data=await response.json;
    console.log(data);
    document.querySelector(".city")=data.name;
    document.querySelector(".temp")=data.main.temp+"°C";
    document.querySelector(".humidity")=data.main.humidity+"%";
    document.querySelector(".wind")=data.wind.speed+"km/h";
    
 }
 searchBtn.addEventListener("click",()=>{
   checkweather(searchbox.value);
 })
 checkweather();
