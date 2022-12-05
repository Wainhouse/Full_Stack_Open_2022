import '../index.css'
import React, { useState } from 'react'
import { CountriesInfo } from './CountriesInfo';

const Country = ({ country }) => {
    const [ state, setState ] = useState(false)

    const handleClick = () => {
        setState(!state)
      }

 return (

    <div >
        <p>{country.name.official}</p>
      <button onClick={handleClick}>show</button>
      {state && <CountriesInfo country={country} />}
    </div>
  );
};
  
  export default Country;