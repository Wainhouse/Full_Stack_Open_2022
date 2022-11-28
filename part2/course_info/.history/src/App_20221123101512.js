const Header = (props) => {
  return (
    <div>
      <h1>{props.course.course}</h1>
    </div>
  )
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name} {props.exercises.exercises}</p>
    </div>
  )
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>

  )
};

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts.exercises[0] + props.parts.exercises[1] + props.parts.exercises[3]}</p>
    </div>
  )
}

const App = () => {
  const course = { course: "Half Stack application development" ,
        parts : [
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
  ]};



  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App