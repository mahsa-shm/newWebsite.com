
/******sticky bar transition********/
function stickyScroll() {
   const stickyBar = document.querySelector(".sticky-bar");
   this.scrollY > 655
     ? (stickyBar.style.backgroundColor = "rgba(0,0,0,0.6)")
     : (stickyBar.style.backgroundColor ="rgba(0,0,0,1)" );
    
   window.addEventListener("scroll", stickyScroll, false);
 }
 stickyScroll();
 /***********************************
document.getElementById("clickMe").addEventListener("click" , function(e){
  e.target.classList.toggle("secondStyle");
  e.target.classList.toggle("firstStyle");
})
document.getElementById("clickMe2").addEventListener("click" , function(e){
  e.target.classList.toggle("secondStyle");
  e.target.classList.toggle("firstStyle");
})
document.getElementById("clickMe3").addEventListener("click" , function(e){
  e.target.classList.toggle("secondStyle");
  e.target.classList.toggle("firstStyle");
})
/*
const click1= document.getElementById("clickMe");
const click2= document.getElementById("clickMe2");
const click3= document.getElementById("clickMe3");

const firstClass = document.getElementsByClassName("firstStyle")
const secondClass = document.getElementsByClassName("secondStyle")*/


/*$document.ready(function(){
  $(".weather-app > *")
  .focus(function(){
    $(".weather-app").addClass("")
  })
  .blur()
})*/


/************************************** */
/*<head>
<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>

$(function(){
    $(".weather-app").click(function(){
      $(".weather-info").hide()
    })
  })

</head>
function stickyScroll(){
  const stickyBar = document.querySelector(".sticky-bar");
  this.scrollY > 655
  ?(stickyBar.style.backgroundColor ="rgba(0,0,0,0.6)")
  :(stickyBar.style.backgroundColor ="rgba(0,0,0,1)")

  window.addEventListener("scroll" , stickyScroll ,false)
}/*************************************** */

const toDoInput = document.getElementById("inputBox-toDo");
 const toDoUl = document.getElementById("toDoList-id");
 
 function AddTask(){
   if(toDoInput.value === ""){
     alert("You must write something");
   }
   else{
     let toDoLi = document.createElement("li");
     toDoLi.innerHTML = toDoInput.value;
     toDoUl.appendChild(toDoLi);
     let toDoSpan = document.createElement("span");
     toDoSpan.innerHTML ="\u00d7";     
     toDoLi.appendChild(toDoSpan)
 
 
   } 
    toDoInput.value=""
   // saveData()
 }
 toDoUl.addEventListener("click" , function(e){
 //if click is on a li element should be "checked"
if (e.target.tagName ==="LI"){
 //becuase we added toggle if the class is checked already it will be removed
e.target.classList.toggle("checked");
saveData()
 // if click is on span element should be removed  
}else if(e.target.tagName =="SPAN"){
 e.target.parentElement.remove();
 saveData()
}
//IMPORTANT
//why should we use a false here???????
},false)

//save items as "data" (can be any name but setItem and getItem should have the same name) 
//then we need the value that we want to save data
function saveData(){
 localStorage.setItem('data',toDoUl.innerHTML)
}
//display "data" whenever we open the website
function showTask(){
 toDoUl.innerHTML = localStorage.getItem('data')
}
showTask()

/*********************************************/
function toolsINfofunc(){
const toolsINfo =document.querySelectorAll("[class$=info]")
toolsINfo.forEach(function(element) {
  // Now you can apply your changes to each element 
  this.innerWidth < 1000
?(element.style.display ="none")
:(element.style.display ="block");

window.addEventListener("resize",toolsINfofunc,false)
});

}
/************************************************* */
function focusInfo(){
  const weatherApp=document.querySelector(".weather-app")
const extraInfo =document.querySelectorAll("[class$=extraInfo]")

}
  


/***************weather*****************************/

      const apiKey = "555357faa025a0ab00efb2e50e9558fc";
      const weatherbox = document.querySelector("#weather-input");
      const weatherBtn = document.querySelector("#weather-button");
      const wetherImg = document.querySelector(".weather-img");
      const url = (city) =>
        `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apiKey}`;

      async function checkWeather(city) {
        const response = await fetch(url(city));

        if (response.status == "404") {
          document.querySelector(".invalid-weather").style.display = "block";
          document.querySelector(".weather-info").style.display = "none";
          document.querySelector(".onFocus").style.display='none';
        } else {
          var data = await response.json();
          document.querySelector(".city-name").innerHTML = data.name;
          document.querySelector(".tempData").innerHTML =Math.round(data.main.temp) + "°C";
          document.querySelector(".humidityData").innerHTML =data.main.humidity + "%";
          document.querySelector(".speedData").innerHTML =data.wind.speed + "Km/h";

const changingWeatherImg =document.querySelector(".changing-weather-img")

            if(data.weather[0].main =="Clear"){
              changingWeatherImg.src ="icons8-mySun-60.png"
             }
              //  else if(data.weather[0].main =="Mist"){
              //   changingWeatherImg.src =""
              //  }
              else if(data.weather[0].main =="Clouds"){
               changingWeatherImg.src ="icons8-myClouds-60.png"
              }
              else if(data.weather[0].main =="Rain"){
               changingWeatherImg.src ="icons8-myRain-60.png"
              }
              else if(data.weather[0].main =="Snow"){
               changingWeatherImg.src ="icons8-mySnow-60.png"
              }
              else if(data.weather[0].main =="Wind"){
               changingWeatherImg.src ="icons8-myWind-60.png"
              }

          document.querySelector(".invalid-weather").style.display = "none";
          document.querySelector(".onFocus").style.display = "block";
          // document.querySelector(".offFocus").style.display = "none";

        }
        weatherbox.value=""
      }
      weatherBtn.addEventListener("click", () => {
        checkWeather(weatherbox.value);
      });
    
 /************calculator**********************/
const calDisplay =document.querySelector(".cal-display-input")
 const calButtons =document.querySelectorAll("input[type='button']")
 console.log(calDisplay,calButtons)
 buttons.forEach(btn =>{
  btn.addEventListener("click" ,(e)=>{console.log(e.target.dataset.value)})
 })

 function percentage(partialValue, totalValue) {
  return (100 * partialValue) / totalValue;
}
/***********************************/
function imgDisplay(){
  const window = document.querySelector("window")
  const weatherApp = document.querySelector(".weather-app");
  const toDoApp = document.querySelector(".to-do-list");
  const CalculatorApp = document.querySelector(".calculator");
  const mywimg = document.querySelector(".weather-img")
  if (window.outerWidth() < 900) {
    mywimg.style.display ="none"
} else {
    mywimg.style.display ="block"
    
}
}
 imgDisplay()

/*********************************************/
/******************************************* */


/****************************************** */
toolsINfofunc();
stickyScroll();


  
  

