import React from "react";

const Header = ({name}) => <div><h2>{name}</h2></div>
const Part = ({name, exercises}) => <div><p>{name} {exercises}</p></div>

const Content = ({ parts }) => {
    return (
      <>
        {parts?.map(part => 
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        )}
      </>
    );
  };

const Total = ({ parts }) => {
    return (
      <>
          <p>Number of exercises {parts?.reduce((sum, part) => sum + part.exercises, 0)}</p>
      </>
    );
  };  

const Course = ({ course }) => {

    return (

        <div>
       <Header name={course.name}/>
       <Content parts={course.parts} />
       <Total parts={course.parts}/>
        </div>

    );

    };


export default Course;