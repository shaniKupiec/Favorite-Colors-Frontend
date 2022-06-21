import React from "react";
import { Color } from "./components/Color";

function App() {
  const data = [
    {
      color: 'red',
      votes: 20
    },
    {
      color: 'green',
      votes: 100
    },
    {
      color: 'blue',
      votes: 5
    },
  ]
  return <section className="app">
    <div className="app__title">favorite colors</div>
    {data.map((cmpData) => (
          <Color key={cmpData.color} color={cmpData.color} votes={cmpData.votes}/>
        ))}
  </section>;
}

export default App;
