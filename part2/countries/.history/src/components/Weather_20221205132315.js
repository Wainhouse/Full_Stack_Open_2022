import React, { useEffect, useState } from "react";
import axios from "axios";

export const Weather = ({ capital }) => {
    const [ weathers, setWeathers ] = useState([]);
    const API_KEY = "4f809eed8ffe521f7abb008616e843b7";
    // const weatherIcon = weathers?.weather[0]?.icon;
        
    
    const API_REQUEST = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${API_KEY}`
    useEffect(() => {
        axios
        .get(API_REQUEST)
        .then((response) => {
            console.log(response?.data);
            setWeathers(response?.data);
            console.log(response?.data.weather[0].icon);    
        });
      }, [API_REQUEST]);
    
  return (
    <>
    <h1>Weather in {capital}</h1>
    <p>temperature: {weathers.main?.temp}</p>
    {/* <img src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather" /> */}
    <p>Wind: {weathers?.wind?.speed}m/s</p>
    </>
  )
}
