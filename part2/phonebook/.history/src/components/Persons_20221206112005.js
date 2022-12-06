const Person = ({ person }) => {
  return <li>{person.name} {person.number}
  <button type="submit">add</button></li>;
};

export default Person;