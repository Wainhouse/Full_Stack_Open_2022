import '../index.css'

const Country = ({ countriesSearch, setCountriesSearch }) => {

 return countriesSearch.map((country) => (

    <div>
      {country.name.common}
      <button onClick={() => {setCountriesSearch([country.name.common])}}>show</button>
    </div>
  ));
};
  
  export default Country;