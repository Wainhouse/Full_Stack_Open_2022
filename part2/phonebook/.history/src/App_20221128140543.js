import { useState } from 'react'
import Persons from './components/Persons'

const App = (props) => {

  const [persons, setPersons] = useState([props.persons]) 
  const [newName, setNewName] = useState('Add a Contact')

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  };

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      date: new Date().toISOString(),
      id: persons.length + 1,
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
};
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                 value={newName}
                 onChange={handlePersonChange}
                    />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      ...
    </div>
  )
}

export default App
