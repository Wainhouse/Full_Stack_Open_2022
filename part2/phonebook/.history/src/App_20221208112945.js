import { useState, useEffect } from "react";
import People from "./components/People";
import { Form } from "./components/Form";
import { Search } from "./components/Search";
import personsService from './services/Persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [personsSearch, setPersonsSearch] = useState([]);
  const [notifyMessage, setNotifyMessage] = useState(null);

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
        setPersonsSearch(initialPersons);
      });
  }, []);

  useEffect(() => {
  const notification = (message) => {
    setNotifyMessage(message);
    setTimeout(() => {
      setNotifyMessage(null);
    }, 5000);
  };
}, []);
  
  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = persons.filter(
      (person) => person.name === newName.name
    );

    if (nameObject.length === 0) {   
    personsService
      .create(nameObject)
      .then(returnedAddPerson => {
        setPersons(persons.concat(returnedAddPerson));
        setNewName('');
        setNewNumber('');
      })
      .catch((error) => setNotifyMessage(error.response.data.error));
    } else {
      if (
      window.confirm(
        `${newName.name} already exists in the phone-book, replace the old number with a new one?`
      )
    ) {
      personsService
      .updateRequest(nameObject.id, newName)
      .then((response) => {
      const updatedPersons = persons.filter((person) => person.id !== response.id);
      setPersons(updatedPersons);
      setPersonsSearch(updatedPersons);
      setNotifyMessage(`Updated ${newName.name}`);
    })
    .catch((error) => setNotifyMessage(error.response.data.error));
  }
};
    };
   
  
  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .deleteRequest(id)
        .then((response) => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
        setPersonsSearch(updatedPersons);
      });
    }
};

const updatePerson = (id, name, number) => {
  if (window.confirm(`${name}'s number is already stored in the phone book. Would you like to update it?`)) {
    personsService
      .updateRequest(id)
      .then((response) => {
      const updatedPersons = persons.filter((person) => person.id !== id);
      setPersons(updatedPersons);
      setPersonsSearch(updatedPersons);
    });
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
        <People personsSearch={personsSearch} deletePerson={deletePerson}/>
    </>
      );
  };
  
export default App;