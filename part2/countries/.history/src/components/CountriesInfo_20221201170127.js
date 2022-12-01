import React from "react";

export const CountriesInfo = ({ country }) => {
  return (
    <>
      <h2>{country.name.common}</h2>
      <ul>
        <li>Capital: {country.capital}</li>
        <li>Area: {country.area} km²</li>
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
