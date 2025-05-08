let city = localStorage.getItem("current-city");
document.querySelector("#city h2").textContent = city;


$(function(){

    const appid = "ffe8ec1265ed9514e5cdf47c055d0529";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=" + unit + "&appid="+ appid+""; 


    let dateTime = new Date();
    let day = dateTime.toLocaleString('en-US', { weekday: 'long' });
    $("#day").text(day);

    $.ajax({
        url: url,
        method: "GET",
        success: function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;



        }
    });

});
    