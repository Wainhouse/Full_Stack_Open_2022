import React from 'react'
import { useState } from 'react';

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
    console.log('value now', newValue)
    newGood(newGood)
  }
  return (
    <div>
      <Header />
      <Button handleClick={() => newGood(good + 1)} text="Good" />
      {/* <Button handleClick={() => setToValue(0)} text="Neutral" />
      <Button handleClick={() => setToValue(value + 1)} text="Bad" /> */}
    </div>
  )
}


export default App