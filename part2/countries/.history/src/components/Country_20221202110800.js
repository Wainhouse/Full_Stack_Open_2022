const Country = ( {countriesSearch, setCountriesSearch} ) => {
    if (countriesSearch.length === 1) return null;

    const handleQueryChange = () => {
        setCountriesSearch(countriesSearch);
      };
   
    return countriesSearch.map((country) => (
       <div key={country.name.official}>
         {country.name.common}{" "}
         <button onClick={handleQueryChange}>show</button>
       </div>
     ));
   };
     
     export default Country;