import React from 'react';
import './index.css';
import { ReactComponent as SunriseSvg } from "./icons/sunrise.svg";
import { ReactComponent as SunsetSvg } from "./icons/sunset.svg";
import { ReactComponent as VectorSvg } from "./icons/vector.svg";

function Details({ weatherData }) {

    const dateSunrise = new Date(weatherData.sunrise * 1e3);
    const dateSunset = new Date(weatherData.sunset * 1e3);

    const localizedSunrise = dateSunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const localizedSunset = dateSunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <div className="third_component">
            <div className="details">Подробности</div>
            <div className="rectangles">
                <div className="rectangle"></div>
                <div className="second_rectangle"></div>
            </div>
            <div className="block_details">
                <div className="details_row">
                    <div className="details_item">
                        <div className="details_name">По ощущениям</div>
                        <div className="details_value">{Math.round(weatherData.feels_like) + '°'}</div>
                    </div>
                    <div className="details_item">
                        <div className="details_name">Влажность</div>
                        <div className="details_value">{Math.round(weatherData.humidity) + '%'}</div>
                    </div>
                    <div className="details_item">
                        <div className="details_name">Видимость</div>
                        <div className="details_value">{(weatherData.visibility) / 1000 + ' км'}</div>
                    </div>
                    <div className="details_item">
                        <div className="details_name">Давление</div>
                        <div className="details_value">{Math.round((weatherData.pressure) / 1.33) + ' мм'}</div>
                    </div>
                    <div className="details_item">
                        <div className="details_name">Ветер</div>
                        <div className="details_value"><VectorSvg alt="vector"/> {Math.round(weatherData.wind_speed) + ' м/c'}</div>
                    </div>
                </div>
                <div className="details_col">
                    <div className="details_item2">
                        <div className="details_name">Восход</div>
                        <div className="svg_and_text">
                            <SunriseSvg alt="iconsunrise" />
                            <div className="details_value">{localizedSunrise}</div>
                        </div>
                    </div>
                    <div className="details_item2">
                        <div className="details_name">Закат</div>
                        <div className="svg_and_text">
                            <SunsetSvg alt="iconsunset"/>
                            <div className="details_value">{localizedSunset}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;