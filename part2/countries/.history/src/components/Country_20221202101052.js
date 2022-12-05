import '../index.css'
import React, { useState } from 'react'
import { CountriesInfo } from './CountriesInfo';

const Country = ({ countriesSearch, setCountriesSearch, country }) => {
    const [ state, setState ] = useState(false)

    const handleClick = () => {
        setState(!state)
      }

 return countriesSearch.map((country) => (

    <div>
      {country.name.common}
      <button onClick={handleClick}>show</button>
      {state && <CountriesInfo country={country} />}
    </div>
  ));
};
  
  export default Country;