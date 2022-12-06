import deletePerson from '../App'

const Person = ({ person }) => {


  
  return <li>{person.name} {person.number}
  <button onClick={() => deletePerson(person.id, person.name)} type="submit">Delete</button></li>;
};

export default Person;