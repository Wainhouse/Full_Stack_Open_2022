import React from "react";

export const Course = ({ course }) => {
  <div>
    <Header name={course.name}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </div>;

  const Header = ({ name }) => {
    return (
      <>
        <h1>{name}</h1>
      </>
    );
  };
  const Content = ({ parts }) => {
    return (
      <>
        {parts.map((part) => (
          <Part key={parts.id} name={parts.name} exercises={parts.exercises} />
        ))}
      </>
    );
  };

  const Part = ({ name, exercises }) => {
    return (
      <>
        <p>
          {name} {exercises}
        </p>
      </>
    );
  };

  const Total = () => {
    return <></>;
  };
  return <div>Course</div>;
};


export default Course;