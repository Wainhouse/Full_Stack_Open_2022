import React from "react";

export const CountriesInfo = ({ country }) => {
  return (
    <>
    <div>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}
      <br/>
      Area: {country.area} km²</p>
      </div>
      <ul>
        <ul><b>Languages:</b></ul>
        <li>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </li>
        <img src={country.flags.png} alt={`${country.name.common}`} />
      </ul>
    </>
  );
};