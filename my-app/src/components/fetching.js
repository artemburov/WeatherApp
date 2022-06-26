
fetch('https://api.openweathermap.org/data/2.5/weather?lat=54.21386&lon=49.61838&appid=c8444dc8bbd22ee9ef81d984eac56f8a&units=metric&lang=ru')
    .then(function (resp) { return resp.json() })
    .then(function (data) {
        console.log(data);
    })

    
fetch('https://api.openweathermap.org/data/2.5/onecall?lat=54.21386&lon=49.61838&appid=c8444dc8bbd22ee9ef81d984eac56f8a&units=metric&lang=ru')
.then(function (resp) { return resp.json() })
.then(function (weekdata) {
    console.log(weekdata);
})

