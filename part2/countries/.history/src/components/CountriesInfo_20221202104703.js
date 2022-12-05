import React from "react";
import '../index.css'
export const CountriesInfo = ({ country }) => {
  return (
    <>
    <div>
      <h2>{country.name.official}</h2>
      <p>Capital: {country.capital}
      <br/>
      Area: {country.area} km²</p>
      </div>
      <div>
      <ul>
      <ul><b>Languages:</b></ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        <img src={country.flags.png} alt={`${country.name.common}`} />
      </ul>
      </div>
    </>
  );
};
