//Import relevant modules
import { useState, useEffect } from "react";
import axios from "axios";
import Country from "./components/Country";
import { CountriesInfo } from "./components/CountriesInfo";


// APP function
function App() {
  //Declare States
  const [country, setCountry] = useState("");
  const [filterCountry, setFilterCountry] = useState([]);
  const [countriesSearch, setCountriesSearch] = useState([]);

  // UseEffect to fetch from API
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setFilterCountry(response.data);
    });
  }, []);


  // function to search API data
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
        <p>Find Countries: </p>
        <input value={country} onChange={handleSearch} />
      </div>
      <div>
          <CountriesInfo country={countriesSearch[0]} />
      </div>
    </>
  );
}

export default App;