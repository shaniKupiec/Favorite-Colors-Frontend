import { Data } from "../models/data.models";
import { ColorPreview } from "./ColorPreview";

export const ColorList = ({ dataBase, onVote }: any) => {
  console.log('dataBase',dataBase)
  const votes = dataBase.map((data: Data) => {
    return data.votes;
  });
  const maxWidth = Math.max(...votes);
  console.log('maxWidth',maxWidth)

  return (
    <section className="color-list">
      {dataBase.map((data: Data) => (
        <ColorPreview key={data.color} color={data.color} votes={data.votes} onVote={onVote} maxWidth={maxWidth} />
      ))}
    </section>
  );
};
