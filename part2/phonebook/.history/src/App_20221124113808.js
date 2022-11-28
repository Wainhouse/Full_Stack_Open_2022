import React from 'react'
import { useState } from 'react';

const Display = props => <div>{props.good}</div>

const Header = () => {
    return (
        <h1>Give Feedback</h1>
    );
};

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const setToGood = newGood => {
    console.log('good now', newGood)
    setGood(newGood)
  }

  const setToNeutral = newNeutral => {
    console.log('Neutral now', newNeutral)
    setToNeutral(newNeutral)
  }
  return (
    <div>
      <Header />
      <Button handleClick={() => setToGood(good + 1)} text="Good" /><Display good={good} />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      {/* <Button handleClick={() => setToValue(0)} text="Neutral" />
      <Button handleClick={() => setToValue(value + 1)} text="Bad" /> */}
    </div>
  )
}


export default App