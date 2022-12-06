import { useState } from "react";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("")
  const [PersonsSearch, setPersonsSearch] = useState("")

  const handlePersonChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
    
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (event) => {
    const search = event.target.value;
    setFilterName(search);
    setPersonsSearch(
        persons.filter((person) => person.name.toLowerCase().includes(search))
      );
  };

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists`);
    } else {
      setPersons(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Search: <input value={filterName} onChange={handleSearch} />
          name: <input value={newName} onChange={handlePersonChange} />
          <br/>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {PersonsSearch?.map((person) => (
        <Persons key={person.name} person={person} number={newNumber}/>
        
      ))}
    </div>
  );
};

export default App;
