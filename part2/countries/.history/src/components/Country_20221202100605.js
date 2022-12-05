import React, { useState } from "react";
import "../index.css";

const Country = ({ country }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div>
      {country.name.common}
      <button onClick={handleClick}>show</button>
    </div>
  );
};

export default Country;
