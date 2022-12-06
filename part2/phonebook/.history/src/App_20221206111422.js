import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import { Form } from "./components/Form";
import { Search } from "./components/Search";
import personsService from './services/Persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [personsSearch, setPersonsSearch] = useState([]);

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  }, []);
  

  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber
    };
     
    personsService
      .create(nameObject)
      .then(returnedAddPerson => {
        setPersons(persons.concat(returnedAddPerson))
        setNewName('')
        setNewNumber('')
      })
    

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists`);
    } else {
      setPersons(persons.concat(nameObject));
      setPersonsSearch(persons.concat(nameObject));
      setNewName("");
      setNewNumber("");
    }
  };


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


  return (
    <>
      <h2>Phone-book</h2>
      <Search
      filterName={filterName}
      handleSearch={handleSearch}/>
      <Form
      addPerson = {addPerson}
      newName = {newName}
      newNumber = {newNumber}
      handlePersonChange = {handlePersonChange}
      handleNumberChange = {handleNumberChange}
      />
      <h2>Numbers</h2>
      {personsSearch.map((person) => (
        <Persons key={person.name} person={person} number={newNumber}/>
        
      ))}
    </>
  );
};

export default App;