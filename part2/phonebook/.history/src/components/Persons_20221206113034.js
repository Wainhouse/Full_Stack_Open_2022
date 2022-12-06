import deletePerson from '../App'

const Person = ({ person }) => {


  
  return <li>{person.name} {person.number}
  <button onClick={deletePerson} type="submit">add</button></li>;
};

export default Person;