Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@Wainhouse 
cassianocaron
/
full-stack-open-2022
Public
Code
Issues
Pull requests
Actions
Projects
Security
Insights
full-stack-open-2022/part1/anecdotes/src/App.js /
@cassianocaron
cassianocaron Format code with prettier code formatter
Latest commit b692559 on Mar 15
 History
 1 contributor
49 lines (41 sloc)  1.81 KB

import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const addVote = () => {
    const pointsCopy = [...points];
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  };

  const bestAnecdoteIndex = points.indexOf(Math.max(...points));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} points</div>
      <Button handleClick={() => addVote()} text="vote" />
      <Button
        handleClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
        text="next anecdote"
      />
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[bestAnecdoteIndex]}</div>
      <div>has {points[bestAnecdoteIndex]} votes</div>
    </div>
  );
};

export default App;
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
full-stack-open-2022/App.js at main · cassianocaron/full-stack-open-2022