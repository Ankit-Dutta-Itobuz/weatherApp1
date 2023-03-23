let cityName;
const icon = document.getElementById("logo");
// Drop Down

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

const dropValue = document.getElementsByClassName('dropValue');
for(let i = 0; i<dropValue.length; i++)
{
  dropValue[i].addEventListener('click',function(){
    cityName = dropValue[i].innerHTML;
    document.getElementById("city").value=cityName;
    getWeatherData();
  })
}


async function getWeatherData() {
  const response = await fetch(
    // `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${country}&aqi=no`
    `http://localhost:2000/`
  )
    .then(function (res) {
      return res.json();
    })
    
    .then(function (data) {
      console.log(data);
      
      for(let i = 0; i<data.length; i++){
        if(data[i].location === cityName){
          console.log(cityName);
          console.log(data[i].location);
          if (data[i].condition === 1) icon.src = "./image/day.svg";
          else if (data[i].condition === 0) icon.src = "./image/night.svg";
          document.getElementById("temperature").innerHTML = `${data[i].tempC} <sup style="font-size: 36px;">&deg</sup>C`;
          document.getElementById("tempFeels").innerHTML = `${data[i].feelsLike} <sup style="font-size: 20px;">&deg</sup>C`;
        }
      }
      
    });
}

