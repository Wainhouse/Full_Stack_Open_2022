import '../index.css'
import React, { useState } from 'react'
import { CountriesInfo } from './CountriesInfo';

const Country = ({ countriesSearch }) => {
    const [ state, setState ] = useState(false)

    const handleClick = () => {
        setState(!state)
      }

 return countriesSearch.map((country) => (

    <div >
      {country.name.common}
      <button onClick={handleClick}>show</button>
      
    </div>
  ));
};
  
  export default Country;