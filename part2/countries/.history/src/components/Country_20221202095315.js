const Country = ({ countriesSearch, setCountriesSearch }) => {

 return countriesSearch.map((country) => (

    <div key={country.name.official}>
      {country.name.common}
      <button onClick={() => {setCountriesSearch([country.name.common])}}>show</button>
    </div>
  ));
};
  
  export default Country;