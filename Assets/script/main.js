let city = localStorage.getItem("current-city");
document.querySelector("#city h2").textContent = city;


$(function(){

    const appid = "9d1c367511062c9dae8d07b8aec3c157";
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

            $("#temp h1").text(`${temp}&deg;`);



        },
        error: function(){
            console.log("Error fetching weather.");
        }
    });

});
    