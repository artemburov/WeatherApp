import React from 'react';
import DayWeather from '../DayWeather/DayWeather';
import './index.css';

function DailyWeather({dailyWeather}) {

  if (!dailyWeather.length) {
    return null
  }

  let today = dailyWeather[0].dt;
  let tommorow = dailyWeather[1].dt;
  
  return (
    <div className="DailyWeather">
      <span className='forecast_name'>По дням</span>
      <div className='forecast'>
        {dailyWeather.map((day) => {
          return <DayWeather
            forecast_temp_day={day.temp.day}
            forecast_temp_night={day.temp.night}
            dt={day.dt}
            icon_day={day.weather[0].icon} 
            today = {today}
            tommorow = {tommorow}
            />
        })}
      </div>
    </div>
  )
}

export default DailyWeather;