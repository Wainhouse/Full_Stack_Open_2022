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

const Statistics = ({ good, neutral, bad }) => {
  return (
    <table>
      <tbody>
        <StatisticText text="good" value={good} />
        <StatisticText text="neutral" value={neutral} />
        <StatisticText text="bad" value={bad} />
      </tbody>
    </table>
  )
}

const StatisticText = ({ text, number }) => {
  <tr>
    <td>{text}</td>
    <td>{number}</td>
  </tr>
}

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
    setNeutral(newNeutral)
  }

  const setToBad = newBad => {
    console.log('Bad now', newBad)
    setBad(newBad)
  }
  return (
    <div>
      <div>
        <Header />
        <Button handleClick={() => setToGood(good + 1)} text="Good" /><Display good={good} />
        <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )

}


export default App