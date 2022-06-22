import { useEffect, useState } from "react";
import { ColorList } from "./components/ColorList";
import { Data } from "./models/data.models";
import axios from "axios";
import { AddColor } from "./components/AddColor";

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

  const onAddColor = async (color: string) => {
    color = color.substring(1);
    const data = await axios.post(`/colors/${color}`).then((res) => res.data);
    setDataBase((prevState) => [...prevState, data]);
  };

  const onRemoveColor = async (id: string) => {
    await axios.delete(`/colors/${id}`);
    setDataBase((prevState) => prevState.filter((d) => d._id !== id));
  };

  return (
    <section className="app">
      <div className="app__title">favorite colors</div>
      <ColorList dataBase={dataBase} onVote={onVote} onRemoveColor={onRemoveColor} />
      <AddColor onAddColor={onAddColor} />
    </section>
  );
};
