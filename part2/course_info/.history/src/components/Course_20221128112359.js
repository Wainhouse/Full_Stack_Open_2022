import React from "react";

const Header = ({ name }) => <><h2>{name}</h2></>
const Part = ({ name, exercises }) => <><p>{name} {exercises}</p></>

const Content = ({ parts }) => {
    return (
      <>
        {parts.map(part => 
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
      </>
    );
  };
 

const Total = () => {
    return <></>;
  };

const Course = ({ course }) => {

    return (

        <>
       
        </>

    );

    };


export default Course;