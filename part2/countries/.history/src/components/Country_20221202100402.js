import React, { useState } from 'react'
import '../index.css'

const Country = ({ countriesSearch, setCountriesSearch }) => {
    const [ state, setState ] = useState(false)
  
    const handleClick = () => {
      setState(!state)
    }

 return countriesSearch.map((country) => (

    <div>
      {country.name.common}
      <button onClick={handleClick}>show</button>
    </div>
  ));
};
  
  export default Country;