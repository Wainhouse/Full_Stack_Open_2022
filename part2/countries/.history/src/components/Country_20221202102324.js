import '../index.css'
import React, { useState } from 'react'
import { CountriesInfo } from './CountriesInfo';

const Country = ({ countriesSearch }) => {
    const [ state, setState ] = useState(false)

    const handleClick = () => {
        setState(!state)
      }

 return countriesSearch[0].map((country) => (

    <div >
      {country.name.common}
      <button onClick={handleClick}>show</button>
      {state && <CountriesInfo country={country} />}
    </div>
  ));
};
  
  export default Country;