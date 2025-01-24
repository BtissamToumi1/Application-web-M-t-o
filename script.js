const city=document.querySelector(".search-input");
const search=document.querySelector("#id1");
  
search.addEventListener("click",()=>{
    
    afficher("https://api.openweathermap.org/data/2.5/weather?q="+city.value.trim()+"&units=metric&appid=15bd6169f4518f74e064ad787e0c48dc","https://api.openweathermap.org/data/2.5/forecast?q="+city.value.trim()+"&units=metric&appid=15bd6169f4518f74e064ad787e0c48dc");

});


function afficher(url,urlall){

fetch(url)
.then(Response => Response.json())
.then( data => {
    console.log(data);
    const temperature = document.getElementById("temperature_principale");
    temperature.innerHTML=data.main.temp+"<sup>°c</sup>";
    const city = document.querySelector(".ville");
    city.innerHTML=data.name;
    const des = document.getElementById("description-principale");
    des.innerHTML=data.weather[0].description;
    const humidity ="<sup> Hymidity: </sup>"+document.getElementById("hymidity_principale");
    humidity.innerHTML=data.main.humidity;
    // console.log(data["weather"][0]["description"]);
    const wind ="<sup> Wind speed: </sup>"+ document.getElementById("wind_principale");
    wind.innerHTML=data.wind.speed;
    console.log(wind);

});

fetch(urlall)
.then(Response => Response.json())
.then( data => {
    // for (let i = 0; i < 6; i++) {
    //     const tmp1 = document.getElementById("temp_day1");
    // tmp1.innerHTML=data.list[i].main.temp+"<sup>°c</sup>";
    // const des1= document.getElementById("description-1");
    // des1.innerHTML=data.list[i].weather[i].description;
    // const humidity1 ="<sup> Hymidity: </sup>"+document.getElementById("hymidity_1");
    // humidity1.innerHTML=data.list[i].main.humidity+"<span>%</span>";
    // const wind1 ="<sup> Wind speed: </sup>"+document.getElementById("wind_1");
    // wind1.innerHTML=data.list[i].wind.speed; 
    //   }

    //day 1
    console.log(data);
    const tmp1 = document.getElementById("temp_day1");
    tmp1.innerHTML=data.list[0].main.temp+"<sup>°c</sup>";
    const des1= document.getElementById("description-1");
    des1.innerHTML=data.list[0].weather[0].description;
     const humidity1 =document.getElementById("hymidity_1");
     humidity1.innerHTML="<span> Hymidity: </span><br>"+data.list[0].main.humidity+"<span>%</span>";
     const wind1 =document.getElementById("wind_1");
     wind1.innerHTML="<span> Wind speed: </span><br>"+data.list[0].wind.speed+"<span>KM/H</span>"; 
     //day 2
    const tmp2 = document.getElementById("temp_day2");
    tmp2.innerHTML=data.list[6].main.temp+"<sup>°c</sup>";
    const des2= document.getElementById("description-2");
    des2.innerHTML=data.list[6].weather[0].description;
    const humidity2 =document.getElementById("hymidity_2");
    humidity2.innerHTML="<span> Hymidity: </span>"+data.list[6].main.humidity+"<span>%</span>";
    const wind2 = document.getElementById;
    wind2.innerHTML="<span> Wind speed: </span>"+data.list[6].wind.speed+"<span>KM/H</span>"; 

    //day 3
    const tmp3 = document.getElementById("temp_day3");
    tmp3.innerHTML=data.list[14].main.temp+"<sup>°c</sup>";
    const des3= document.getElementById("description-3");
    des3.innerHTML=data.list[14].weather[0].description;
    const humidity3 =document.getElementById("hymidity_3");
    humidity3.innerHTML="<span> Hymidity: </span>"+data.list[14].main.humidity+"<span>%</span>";
    const wind3 =document.getElementById("wind_3");
    wind3.innerHTML="<span> Wind speed: </span>"+ data.list[14].wind.speed+"<span>KM/H</span>";
     
    //day 4
    const tmp4 = document.getElementById("temp_day4");
    tmp4.innerHTML=data.list[22].main.temp+"<sup>°c</sup>";
    const des4= document.getElementById("description-4");
    des4.innerHTML=data.list[22].weather[0].description;
    const humidity4 ="<span> Hymidity: </span>"+ document.getElementById("hymidity_4");
    humidity4.innerHTML="<span> Hymidity: </span>"+ data.list[22].main.humidity+"<span>%</span>";
    const wind4 ="<span> Wind speed: </span>"+ document.getElementById("wind_4")+"<span>KM/H</span>";
    wind4.innerHTML=data.list[22].wind.speed;

      //day 5
      const tmp5 = document.getElementById("temp_day5");
      tmp5.innerHTML=data.list[30].main.temp+"<sup>°c</sup>";
      const des5= document.getElementById("description-4");
      des5.innerHTML=data.list[30].weather[0].description;
      const humidity5 ="<sup> Hymidity: </sup>"+ document.getElementById("hymidity_5");
       humidity5.innerHTML=data.list[30].main.humidity+"<span>%</span>";
       const wind5 ="<sup> Wind speed: </sup>"+ document.getElementById("wind_5")+"<sup>KM/H</sup>";
       wind5.innerHTML=data.list[30].wind.speed;

//       //day 6
     const tmp6 = document.getElementById("temp_day6");
      tmp6.innerHTML=data.list[38].main.temp+"<sup>°c</sup>";
     const des6= document.getElementById("description-6");
       des6.innerHTML=data.list[38].weather[0].description;
      const humidity6 ="<sup> Hymidity: </sup>"+ document.getElementById("hymidity_6");
      humidity6.innerHTML=data.list[38].main.humidity+"<span>%</span>";
      const wind6 ="<sup> Wind speed: </sup>"+ document.getElementById("wind_6")+"<sup>KM/H</sup>";
       wind6.innerHTML=data.list[38].wind.speed;

      city.value="";

});
}
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    let x,y;
    let url1,urlall1
    x= position.coords.latitude;
    y= position.coords.longitude;
    url1="https://api.openweathermap.org/data/2.5/weather?lat="+x+"&lon="+y+"&appid=15bd6169f4518f74e064ad787e0c48dc&units=metric";
    urlall1="https://api.openweathermap.org/data/2.5/forecast?lat="+x+"&lon="+y+"&appid=15bd6169f4518f74e064ad787e0c48dc&units=metric";
    console.log(url1);
    afficher(url1,urlall1);
  }

