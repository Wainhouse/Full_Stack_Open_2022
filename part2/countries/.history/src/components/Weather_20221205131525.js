import React, { useEffect, useState } from "react";
import axios from "axios";

export const Weather = ({ capital }) => {
    const [ weather, setWeather ] = useState([]);
    const API_KEY = "4f809eed8ffe521f7abb008616e843b7";
    const weatherIcon = weather.weather[];
        
    
    const API_REQUEST = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`
    useEffect(() => {
        axios
        .get(API_REQUEST)
        .then((response) => {
            console.log(response?.data);
            setWeather(response?.data);
            

        });
      }, [API_REQUEST]);
    
  return (
    <>
    <h1>Weather in {capital}</h1>
    <p>temperature: {weather.main?.temp}</p>
    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather" />
    <p>Wind: {weather?.wind?.speed}m/s</p>
    </>
  )
}
