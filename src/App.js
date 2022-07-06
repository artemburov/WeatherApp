import React from 'react'
import { useEffect, useState } from 'react';
import './index.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import DailyWeather from './components/DailyWeather/DailyWeather';
import Details from './components/Details/Details';
import {url} from './url/url'

function App(props) {
  
  const [dailyWeather, setdailyWeather] = useState([])
  const [weatherData, setweatherData] = useState('Пусто')

  useEffect(() => {
    const fetchData = async () => { 
      const response = await fetch(url)

      if (response.ok) {
        const json = await response.json()
        setdailyWeather(json.daily)
        setweatherData(json.current)
        console.log(json.daily);
        console.log(json.current);
      }
      else {
        console.error('Ошибка!')
      }
    }
    fetchData()
  }, []) 

  return (
    <div className="App">
      <CurrentWeather weatherData={weatherData} />
      <DailyWeather dailyWeather={dailyWeather} />
      <Details weatherData={weatherData} />
    </div>
  )
}

export default App;