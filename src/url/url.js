import {lat, lon} from '../data/constants'

const API = 'c8444dc8bbd22ee9ef81d984eac56f8a'
export const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API}&lang=ru&units=metric`
