import '../index.css'
import React, { useState } from 'react'
import { CountriesInfo } from './CountriesInfo';

const Country = ({ country, oneCountry }) => {
    const [ state, setState ] = useState(false)

    const handleClick = () => {
        setState(!state)
      }

 return (

    <div >
      {country.name.common}
      <button onClick={handleClick}>show</button>
      {state && <CountriesInfo country={country} />}
    </div>
  );
};
  
  export default Country;