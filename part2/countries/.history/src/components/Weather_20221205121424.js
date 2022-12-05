import React, { useEffect, useState } from "react";
import axios from "axios";

export const Weather = ({ capital }) => {
    const [ weather, setWeather ] = useState([]);
    const API_KEY = '4f809eed8ffe521f7abb008616e843b7'

    useEffect(() => {
        axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${API_KEY}`)
        .then((response) => {
            console.log(response.data);
            setWeather(response.data);

        });
      }, []);
    
  return (
    <>
    <h1>Weather in {capital}</h1>
    <p>temperature: {weather.temp}</p>
    <img src={weather.weather_icons} alt="weather" />
    <p>Wind: {weather.wind_speed}m/s</p>
    </>
  )
}
