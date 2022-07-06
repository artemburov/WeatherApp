import React from 'react';
import DayWeather from '../DayWeather/DayWeather';
import './index.css';

function DailyWeather({dailyWeather}) {

  if (!dailyWeather.length) {
    return null
  }

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
            />
        })}
      </div>
    </div>
  )
}

export default DailyWeather;