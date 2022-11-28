import React from 'react'
import { useState } from 'react';

const Header = () => {
  return (
    <h2>Give Feedback</h2>
  );
};

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
);

const Statistics = ({ good, neutral, bad }) => {
  const result = good + neutral + bad;
  const avr = (good - bad) / result;
  const pos = good / result * 100;
  

  if (result === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <table>
      <tbody>
        <StatisticText text="good" number={good} />
        <StatisticText text="neutral" number={neutral} />
        <StatisticText text="bad" number={bad} />
        <StatisticText text="all" number={result} />
        <StatisticText text="avr" number={avr} />
        <StatisticText text="positive" number={pos} />
      </tbody>
    </table>
  );
};

const StatisticText = ({ text, number }) => (
  <tr>
    <td>{text}</td>
    <td>{number}</td>
  </tr>
);

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>
        <Header />
        <Button handleClick={() => setGood(good + 1)} text="Good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="Bad" />
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );

};


export default App