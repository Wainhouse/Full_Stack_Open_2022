import React from 'react'

export const Name_Number_Form = () => {
  return (
    <div><form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handlePersonChange} />
      <br/>
      number: <input value={newNumber} onChange={handleNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form></div>
  )
}
