import { SetStateAction, useEffect, useState } from "react";
import { ColorList } from "./components/ColorList";
import { Data } from "./models/data.models";
import axios from "axios";

export const App = () => {
  const [dataBase, setDataBase] = useState<Data[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await axios
      .get("/colors")
      .then((res) => res.data)
      .then((colors) => setDataBase(colors));
  };

  const onVote = async (id: string) => {
    await axios.put(`/colors/${id}`);

    setDataBase((dataBase: Data[]) =>
      dataBase.map((d: Data) => {
        if (d._id === id) d.votes++;
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
};
