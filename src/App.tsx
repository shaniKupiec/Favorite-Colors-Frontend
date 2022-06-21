import { useEffect, useState } from "react";
import { ColorList } from "./components/ColorList";
import { Data } from "./models/data.models";

function App() {
  const [dataBase, setDataBase] = useState<Data[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const newData: Data[] = [
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
    setDataBase(newData);
  };

  const onVote = (color: string) => {
    setDataBase((dataBase) =>
      dataBase.map((d) => {
        if (d.color === color) d.votes++;
        return d;
      })
    );
  };

  return (
    <section className="app">
      <div className="app__title">favorite colors</div>
      <ColorList dataBase={dataBase} onVote={onVote} />
    </section>
  );
}

export default App;
