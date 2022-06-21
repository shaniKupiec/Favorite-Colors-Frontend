import { ColorList } from "./components/ColorList";

function App() {
  const data = [
    {
      color: "red",
      votes: 20,
    },
    {
      color: "green",
      votes: 100,
    },
    {
      color: "blue",
      votes: 5,
    },
  ];
  
  const onVote = (color: string) => {
    console.log("clicked! color", color);
    data.map((d) => {
      if (d.color === color) d.votes++;
    });
    console.log('data',data)
  };

  return (
    <section className="app">
      <div className="app__title">favorite colors</div>
      <ColorList data={data} onVote={onVote} />
    </section>
  );
}

export default App;
