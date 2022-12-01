import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "./components/Search";
import Country from "./components/Country";

function App() {
  const [country, setCountry] = useState([]);
  const [filterCountry, setFilterCountry] = useState("");
  const [countriesSearch, setCountriesSearch] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountry(response.data);
      // setPersonsSearch(response.data)
    });
  }, []);

  console.log("render", country.length, "notes");

  const handleSearch = (event) => {
    const search = event.target.value;
    setFilterCountry(search);
    setCountriesSearch(
      country.filter((country) => country.name.toLowerCase().includes(search))
    );
  };

  return (
    <>
      <h2>Countries</h2>
      <Search 
      filterCountry={filterCountry} 
      handleSearch={handleSearch} />
      {countriesSearch.map((person) => (
        <Country key={country.name} country={country} />
      
    </>
  );
}

export default App;
