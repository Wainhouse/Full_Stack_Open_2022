import React, { useEffect, useState } from "react";
import axios from "axios";

export const Weather = ({ capital }) => {
    const [ weather, setWeather ] = useState([]);

    useEffect(() => {
        console.log("effect");
        axios
        .get(`http://api.weatherstack.com/current?access_key={59dbed2f4aa2beade17b2514ac685ca4}&query=${capital}`)
        .then((response) => {
            console.log(response.data.current);
            setWeather(response.data.current);

        });
      }, []);
    
  return (
    <>
    <h1>Weather in {capital}</h1>
    <p>temperature: {weather.temperature}</p>
    <img src={weather.weather_icons} alt="weather" />
    <p>Wind: {weather.wind_speed}m/s</p>
    </>
  )
}
