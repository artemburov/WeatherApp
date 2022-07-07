import React from 'react';
import './index.css';
import {FuncBigLetter} from "./utils";

function CurrentWeather({ weatherData }) {

    if (weatherData.weather === undefined) {
        return null
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