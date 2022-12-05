import '../index.css'
import { CountriesInfo } from './CountriesInfo';

const Country = ({ countriesSearch, setCountriesSearch }) => {

 return countriesSearch.map((country) => (

    <div>
      {country.name.common}
      <button onClick={() => {CountriesInfo.country}}>show</button>
    </div>
  ));
};
  
  export default Country;