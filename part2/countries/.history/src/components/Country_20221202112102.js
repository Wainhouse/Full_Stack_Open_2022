const Country = ( {countriesSearch, setCountriesSearch} ) => {
    if (countriesSearch.length === 1) return null;


   
    return countriesSearch.map((country) => (
       <div key={country.name.official}>
         <p>{country.name.common}{" "}</p>
         <button onClick={() => setCountriesSearch([country])}>show</button>
       </div>
     ));
   };
     
     export default Country;