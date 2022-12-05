import '../index.css'
import React, { useState } from 'react'
import { CountriesInfo } from './CountriesInfo';

const Country = ({ countriesSearch }) => {
    const [ state, setState ] = useState(false)

    const handleClick = () => {
        setState(!state[0])
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