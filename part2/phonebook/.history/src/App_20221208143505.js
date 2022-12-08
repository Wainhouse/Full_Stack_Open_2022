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

  useEffect(() => {
  const addPerson = (event) => {
    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
    };

    if (nameObject.newName === 0) {
      personsService.create(nameObject).then((returnedAddPerson) => {
        setPersons(persons.concat(returnedAddPerson));
        setNewName("");
        setNewNumber("");
      });
    } else {
      if (
        window.confirm(
          `${newName.trim()} is already added to phone-book, replace the old number with a new one?`
        )
      ) {
        const oldContact = persons.find(
          ({ name }) => name.trim() === newName.trim()
        );
        console.log(oldContact.id);
        personsService
          .updateRequest(oldContact.id, { ...oldContact, number: newNumber })
          .then((response) => {
            setPersons(
              persons.map((cont) =>
                cont.id !== oldContact.id ? cont : response
              )
            );
          });
        setNewName("");
        setNewNumber("");
      }
    }
  };
}, [addPerson]);
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
