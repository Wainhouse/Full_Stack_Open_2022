import React from "react";

export const Countries_Info = ({ country }) => {
  return (
    <>
      <ul>
        <li>{country.name.common}</li>
        <li>Capital: {country.capital}</li>
        <li>Area: {country.area} km²</li>
        <ul>Languages:</ul>
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
