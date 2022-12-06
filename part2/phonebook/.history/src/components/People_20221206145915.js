const People = ({ personsSearch, deletePerson }) => {
    return (
      <>
        {personsSearch?.map((person) => (
          <div key={person.name}>
            {person.name} {person.number}{" "}
            <button onClick={() => deletePerson(person.id, person.name)}>Delete</button>
          </div>
        ))}
      </>
    );
  };

export default People;
