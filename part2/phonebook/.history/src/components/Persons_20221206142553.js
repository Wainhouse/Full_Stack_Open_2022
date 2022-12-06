import deletePerson from '../App'

const Person = ({ person }) => {

  return <li>{person.name} {person.number}
  <div key={person.name}>
            {person.name}{person.number}
            <button onClick={() => deletePerson(person.id, person.name)} type="delete">Delete</button>
        </div>
  </li>;
};

export default Person;