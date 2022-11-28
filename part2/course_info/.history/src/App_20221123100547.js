const Header = () => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.name[0]} exercises={props.exercises[0]} />
      <Part part={props.name[1]} exercises={props.exercises[1]} />
      <Part part={props.name[2]} exercises={props.exercises[2]} />
    </div>

  )
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[3]}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];



  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  )
}

export default App