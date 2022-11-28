import React from "react";

const Header = ({ name }) => <><h1>{name}</h1></>
const Part = ({ name, exercises }) => <><p>{name} {exercises}</p></>

const Content = ({ parts }) => {
    return (
      <>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </>
    );
  };
 

const Total = () => {
    return <></>;
  };

const Course = ({ course }) => {

    return (

        <>
        <Header name={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </>

    );

    };


export default Course;