import { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => { console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountry(response.data)
        // setPersonsSearch(response.data)
      })
    }, [])

  return (
    console.log('render', 'notes')
  );
}

export default App;
