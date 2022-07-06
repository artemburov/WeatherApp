import React from 'react';
import './index.css';

function DayWeather({forecast_temp_day, forecast_temp_night, dt, icon_day}) {
   
    let dateOfday = new Date(dt * 1000)
    let localizedDate = dateOfday.toLocaleDateString(["ru-RU"], { day: 'numeric', weekday: 'short' });

    const new_icon_day = `http://openweathermap.org/img/wn/${icon_day}@2x.png`

    return (
        <div className="forecast_item">
            <div className="forecast_time">{localizedDate}</div>
            <img className="icon_day" src={new_icon_day} alt="dayicon" />
            <div className="day_night">
                <div className="forecast_temp_day">{Math.round(forecast_temp_day) + '°'}</div>
                <div className="forecast_temp_night">{Math.round(forecast_temp_night) + '°'}</div>
            </div>
        </div>
    )
}

export default DayWeather;