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

  personsService
  .create(nameObject)
  .then(returnedAddPerson => {
    setPersons(persons.concat(returnedAddPerson))
    setNewName('')
    setNewNumber('')
  });

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
  
  const notification = (message) => {
    setNotifyMessage(message);
    setTimeout(() => {
      setNotifyMessage(null);
    }, 5000);
  };
}
const addPerson = (event) => {
  event.preventDefault();
  const nameObject = {
    name: newName,
    number: newNumber
  };

  setNewName("");
  setNewNumber("");

  const alreadyExistingContact = persons.find(
    (person) => person.name.trim() === nameObject.name
  );
  if (alreadyExistingContact) {
    if (window.confirm(
      `${nameObject.name}  already exists`
    )
    ) {
      personsService
        .updateRequest(alreadyExistingContact.id, { ...existingContact, number: newNumber })
        .then((response) => {
          setPersons(persons.map((cont) =>
            cont.id !== alreadyExistingContact.id ? cont : response
          )
          );
          notification(
            `${response.name} was updated, new number is now ${response.number}.`
          );
        })
        .catch((error) => {
          notification(`Error: ${error.response.data.error}`);
        });

    }

    return;

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
      handleSearch={handleSearch} />
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