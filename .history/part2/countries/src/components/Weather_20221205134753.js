import React, { useEffect, useState } from "react";
import axios from "axios";

export const Weather = ({ capital }) => {
    const [ weathers, setWeathers ] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [ weatherIcon, setWeatherIcon] = useState("");
    const temp = Math.round(weathers.main?.temp - 273.15)
    
    const API_REQUEST = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`
    useEffect(() => {
        axios
        .get(API_REQUEST)
        .then((response) => {
            console.log(response?.data);
            setWeathers(response?.data);
            setWeatherIcon(response?.data.weather[0].icon);    
        });
      }, [API_REQUEST]);
    
  return (
    <>
    <h1>Weather in {capital}</h1>
    <p>temperature: {temp} Celsius</p>
    <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather" />
    <p>Wind: {weathers?.wind?.speed}m/s</p>
    </>
  )
}

