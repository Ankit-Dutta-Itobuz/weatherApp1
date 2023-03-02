async function getWeatherData() {
    const response = fetch(
      "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=Melbourn&aqi=no"
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log(data)
        document.getElementById('city').innerHTML=data.location.name;
        document.getElementById('temperature').innerHTML=`${data.current.temp_c} <sup style="font-size: 32px;">&#8451</sup> `;
        document.getElementById('tempFeels').innerHTML=`${data.current.feelslike_c} <sup style="font-size: 20px;">&#8451</sup> `;
        document.getElementById('weatherText').innerHTML=data.current.condition.text;
        logo.src=`${data.current.condition.icon}`;
      });
  }
  getWeatherData();