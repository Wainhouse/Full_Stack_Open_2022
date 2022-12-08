import { useState, useEffect } from "react";
import People from "./components/People";
import { Form } from "./components/Form";
import { Search } from "./components/Search";
import personsService from "./services/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");
  const [personsSearch, setPersonsSearch] = useState([]);

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setPersonsSearch(initialPersons);
    });
  }, []);

  const deletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService.deleteRequest(id).then((response) => {
        const updatedPersons = persons.filter((person) => person.id !== id);
        setPersons(updatedPersons);
        setPersonsSearch(updatedPersons);
      });
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    const nameExist = persons
    .map(({ name }) => name.trim())
    .includes(newName.trim());

    setNewName("");
    setNewNumber("");

    if (nameExist) {
      if (
        window.confirm(
          `${newName.trim()}  already exists, update ${newName.trim()}'s number with new number?`
        )
      ) {
        const previousContact = persons.find(
          ({ name }) => name.trim() === newName.trim()
        );

        personsService
          .updateRequest(previousContact.id, {
            ...previousContact,
            number: newNumber,
          })
          .then((responseContact) => {
            setPersons(
              persons.map((cont) =>
                cont.id !== previousContact.id ? cont : responseContact
              )
            );
          });
        setNewName("");
        setNewNumber("");
      }

      return;
    }
    const newPerson = {
      name: newName.trim(),
      number: newNumber,
    };

    personsService.create(newPerson).then((returnedNewPerson) => 
      setPersons(persons.concat(returnedNewPerson)));
      setNewName("");
      setNewNumber("");
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
      <Search filterName={filterName} handleSearch={handleSearch} />
      <Form
        addPerson={addPerson}
        newName={newName}
        newNumber={newNumber}
        handlePersonChange={handlePersonChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <People personsSearch={personsSearch} deletePerson={deletePerson} />
    </>
  );
};

export default App;
