import React from 'react';
import './index.css';

function CurrentWeather({ weatherData }) {

    if (weatherData.weather === undefined) {
        return null
    }

    function FuncBigLetter(str) {
        if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
    }

    const upperDescription = FuncBigLetter(weatherData.weather[0].description)
    const currentIconUrl = 'http://openweathermap.org/img/wn/' + weatherData.weather[0].icon + '@2x.png'

    return (
        <div className="current">
            <div className="current_city">Димитровград</div>
            <div className="temp_icon">
                <img src={currentIconUrl} alt={weatherData.description}/>
                <div className="current_temp">{Math.round(weatherData.temp) + '°'}</div>
            </div>
            <div className="current_description">{upperDescription}</div>
        </div>
    )
}

export default CurrentWeather;