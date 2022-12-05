import '../index.css'
import React, { useState } from 'react'
import { CountriesInfo } from './CountriesInfo';

const Country = ({ countriesSearch }) => {
    const [ state, setState ] = useState([0])

    const handleClick = () => {
        setState(!state)
      }

 return countriesSearch.map((country) => (

    <div key={country.name.official}>
      {country.name.common}
      <button onClick={handleClick}>show</button>
      {state && <CountriesInfo country={country} />}
    </div>
  ));
};
  
  export default Country;