import '../index.css'
import { CountriesInfo } from './CountriesInfo';

const Country = ({ countriesSearch, setCountriesSearch }) => {

 return countriesSearch.map((country) => (

    <div>
      {country.name.common}
      <button onClick={() => {setCountriesSearch([country.name.common])}}>show</button>
    </div>
  ));
};
  
  export default Country;