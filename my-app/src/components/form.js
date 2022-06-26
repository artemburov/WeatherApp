import React from "react";
import png from'./subtract.png';
import vector from'./vector.png';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            weatherData: null,
            weatherDataWeek: null
        };
    }
    componentDidMount() {
        const URL = "https://api.openweathermap.org/data/2.5/weather?lat=54.21386&lon=49.61838&appid=c8444dc8bbd22ee9ef81d984eac56f8a&units=metric&lang=ru";
        const URLweek = "https://api.openweathermap.org/data/2.5/onecall?lat=54.21386&lon=49.61838&appid=c8444dc8bbd22ee9ef81d984eac56f8a&units=metric&lang=ru";
        fetch(URL).then(fetch(URL)).then(res => res.json()).then(json => {
            this.setState({ weatherData: json })
        });
        fetch(URLweek).then(fetch(URLweek)).then(res => res.json()).then(json => {
            this.setState({ weatherDataWeek: json })
        });
    }
    render() {
        const weatherData = this.state.weatherData;
        const weatherDataWeek = this.state.weatherDataWeek;
        if (!weatherData) return <div>Loading</div>;
        if (!weatherDataWeek) return <div>Loading</div>;

        const weather = weatherData.weather[0];

        const weatherWeekFirst = weatherDataWeek.daily[0].weather[0];
        const weatherWeekSecond = weatherDataWeek.daily[1].weather[0];
        const weatherWeekThird = weatherDataWeek.daily[2].weather[0];
        const weatherWeekFourth = weatherDataWeek.daily[3].weather[0];
        const weatherWeekFifth = weatherDataWeek.daily[4].weather[0];
        const weatherWeekSixth = weatherDataWeek.daily[5].weather[0];
        const weatherWeekSeventh = weatherDataWeek.daily[6].weather[0];

        const unixSunrise = weatherDataWeek.daily[0].sunrise;

        const unixSunrise2 = weatherDataWeek.daily[2].sunrise;
        const unixSunrise3 = weatherDataWeek.daily[3].sunrise;
        const unixSunrise4 = weatherDataWeek.daily[4].sunrise;
        const unixSunrise5 = weatherDataWeek.daily[5].sunrise;
        const unixSunrise6 = weatherDataWeek.daily[6].sunrise;

        const unixSunset = weatherDataWeek.daily[0].sunset;

        const dateSunrise = new Date(unixSunrise * 1e3);
        const dateSunset = new Date(unixSunset * 1e3);

        const dateOfThirdDay = new Date(unixSunrise2 * 1e3);
        const localizedThirdDay = dateOfThirdDay.toLocaleDateString(["ru-RU"], { day: 'numeric', weekday: 'short' });
        const dateOfFourthDay = new Date(unixSunrise3 * 1e3);
        const localizedFourthdDay = dateOfFourthDay.toLocaleDateString(["ru-RU"], { day: 'numeric', weekday: 'short' });
        const dateOfFifthDay = new Date(unixSunrise4 * 1e3);
        const localizedFifthDay = dateOfFifthDay.toLocaleDateString(["ru-RU"], { day: 'numeric', weekday: 'short' });
        const dateOfSixthDay = new Date(unixSunrise5 * 1e3);
        const localizedSixthDay = dateOfSixthDay.toLocaleDateString(["ru-RU"], { day: 'numeric', weekday: 'short' });
        const dateOfSeventhDay = new Date(unixSunrise6 * 1e3);
        const localizedSeventhDay = dateOfSeventhDay.toLocaleDateString(["ru-RU"], { day: 'numeric', weekday: 'short' });

        const localizedSunrise = dateSunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const localizedSunset = dateSunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";

        const iconUrlFirstDay = "http://openweathermap.org/img/w/" + weatherWeekFirst.icon + ".png";
        const iconUrlSecondDay = "http://openweathermap.org/img/w/" + weatherWeekSecond.icon + ".png";
        const iconUrlThirdDay = "http://openweathermap.org/img/w/" + weatherWeekThird.icon + ".png";
        const iconUrlFourthDay = "http://openweathermap.org/img/w/" + weatherWeekFourth.icon + ".png";
        const iconUrlFifthDay = "http://openweathermap.org/img/w/" + weatherWeekFifth.icon + ".png";
        const iconUrlSixthDay = "http://openweathermap.org/img/w/" + weatherWeekSixth.icon + ".png";
        const iconUrlSeventhDay = "http://openweathermap.org/img/w/" + weatherWeekSeventh.icon + ".png";


        return (
            <form>
                <div className="current">
                    <div className="current_city">Димитровград</div>
                    <div className="temp_icon">
                        <img src={iconUrl} alt={weatherData.description} width="120" height="120"/>
                        <div className="current_temp">{Math.round(weatherData.main.temp) + '°'}</div>
                    </div>
                    <div className="current_description">{weatherData.weather[0]['description']}</div>
                </div>

                <div className="forecast_name">По дням</div>
                <div className="forecast">
                    <div className="forecast_item">
                    <div className="layout">
                        <div className="forecast_time">Сегодня</div>
                        <img src={iconUrlFirstDay} alt={weatherDataWeek.description} width="60" height="60" />
                        <div className="forecast_temp_day">{Math.round(weatherDataWeek.daily[0].temp.day) + '°'}</div>
                        <div className="forecast_temp_night" >{Math.round(weatherDataWeek.daily[0].temp.night) + '°'} </div>
                    </div>
                    </div>
                    <div className="forecast_item">
                        <div className="forecast_time">Завтра</div>
                        <img src={iconUrlSecondDay} alt={weatherDataWeek.description} width="60" height="60" />
                        <div className="forecast_temp_day">{Math.round(weatherDataWeek.daily[1].temp.day) + '°'}</div>
                        <div className="forecast_temp_night">{Math.round(weatherDataWeek.daily[1].temp.night) + '°'}</div>
                    </div>
                    <div className="forecast_item">
                        <div className="forecast_time">{localizedThirdDay}</div>
                        <img src={iconUrlThirdDay} alt={weatherDataWeek.description} width="60" height="60" />
                        <div className="forecast_temp_day">{Math.round(weatherDataWeek.daily[2].temp.day) + '°'}</div>
                        <div className="forecast_temp_night">{Math.round(weatherDataWeek.daily[2].temp.night) + '°'}</div>
                    </div>
                    <div className="forecast_item">
                        <div className="forecast_time">{localizedFourthdDay}</div>
                        <img src={iconUrlFourthDay} alt={weatherDataWeek.description} width="60" height="60" />
                        <div className="forecast_temp_day">{Math.round(weatherDataWeek.daily[3].temp.day) + '°'}</div>
                        <div className="forecast_temp_night">{Math.round(weatherDataWeek.daily[3].temp.night) + '°'}</div>
                    </div>
                    <div className="forecast_item">
                        <div className="forecast_time">{localizedFifthDay}</div>
                        <img src={iconUrlFifthDay} alt={weatherDataWeek.description} width="60" height="60" />
                        <div className="forecast_temp_day">{Math.round(weatherDataWeek.daily[4].temp.day) + '°'}</div>
                        <div className="forecast_temp_night">{Math.round(weatherDataWeek.daily[4].temp.night) + '°'}</div>
                    </div>
                    <div className="forecast_item">
                        <div className="forecast_time">{localizedSixthDay}</div>
                        <img src={iconUrlSixthDay} alt={weatherDataWeek.description} width="60" height="60" />
                        <div className="forecast_temp_day">{Math.round(weatherDataWeek.daily[5].temp.day) + '°'}</div>
                        <div className="forecast_temp_night">{Math.round(weatherDataWeek.daily[5].temp.night) + '°'}</div>
                    </div>
                    <div className="forecast_item">
                        <div className="forecast_time">{localizedSeventhDay}</div>
                        <img src={iconUrlSeventhDay} alt={weatherDataWeek.description} width="60" height="60" />
                        <div className="forecast_temp_day">{Math.round(weatherDataWeek.daily[6].temp.day) + '°'}</div>
                        <div className="forecast_temp_night">{Math.round(weatherDataWeek.daily[6].temp.night) + '°'}</div>
                    </div>
                </div>

                <div className="details">Подробности</div>
                <div className="rectangles">
                    <div className="rectangle"></div>
                    <div className="second_rectangle"></div>
                </div>
                <div className="details_row">
                    <div className="details_item">
                        <div className="details_name">По ощущениям</div>
                        <div className="details_value">{Math.round(weatherData.main.feels_like) + '°'}</div>
                    </div>
                    <div className="details_item">
                        <div className="details_name">Влажность</div>
                        <div className="details_value">{Math.round(weatherData.main.humidity) + '%'}</div>
                    </div>
                    <div className="details_item">
                        <div className="details_name">Видимость</div>
                        <div className="details_value">{(weatherDataWeek.current.visibility)/1000 + ' км'}</div>
                    </div>
                    <div className="details_item">
                        <div className="details_name">Закат</div>
                        <div className="details_value"><img src={png} width="41" height="18" />   {localizedSunset}</div>
                    </div>
                    <div className="details_item">
                        <div className="details_name">Восход</div>
                        <div className="details_value"><img src={png} width="41" height="18" /> {localizedSunrise}</div>
                    </div>
                </div>


                <div className="details_col">
                    <div className="details_item2">
                        <div className="details_name">Давление</div>
                        <div className="details_value">{Math.round((weatherData.main.grnd_level) / 1.33) + ' мм'}</div>
                    </div>
                    <div className="details_item2">
                        <div className="details_name">Ветер</div>
                        <div className="details_value"><img src={vector} width="14" height="14" /> {Math.round(weatherData.wind.speed) + ' м/c'}</div>
                    </div>
                </div>
            </form>
        );
    }
}

export default Form;