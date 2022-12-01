import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import { CountriesInfo } from "./components/CountriesInfo";

function App() {
  const [country, setCountry] = useState("");
  const [filterCountry, setFilterCountry] = useState([]);
  const [countriesSearch, setCountriesSearch] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      console.log("promise fulfilled");
      setFilterCountry(response.data);
    });
  }, []);

  console.log("render", country.length, "notes");

  const handleSearch = (event) => {
    const search = event.target.value;
    setCountry(search);
    setCountriesSearch(
      filterCountry?.filter((props) =>
        props.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <>
    <div>
    <h2>Countries</h2>
      <p>Find Countries: </p><input value={country} onChange={handleSearch} />
    </div>
      <div>
        {countriesSearch.length === 1 ? ( 
          <CountriesInfo country={countriesSearch[0]} />
        ) :  null } 
                 <Country
        countriesSearch={countriesSearch}
        setFilterCountry={setFilterCountry}
        />
      </div>
    </>
  );
}

export default App;
