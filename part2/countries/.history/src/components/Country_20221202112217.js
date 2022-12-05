const Country = ( {countriesSearch, setCountriesSearch} ) => {
    return countriesSearch.map((country) => (
       <div key={country.name.official}>
        {/* Name of the country */}
         {country.name.common}{" "}
         {/* button which uses onClick to view the country's info */}
         <button onClick={() => setCountriesSearch([country])}>show</button>
       </div>
     ));
   };
     
     export default Country;