import { Data } from "../models/data.models";
import { ColorPreview } from "./ColorPreview";

export const ColorList = ({ dataBase, onVote }: { dataBase: Data[]; onVote: Function }) => {
  const votes = dataBase.map((data: Data) => {
    return data.votes;
  });
  const maxWidth = Math.max(...votes);

  return (
    <section className="color-list">
      {dataBase.map((data: Data) => (
        <ColorPreview key={data._id} data={data} onVote={onVote} maxWidth={maxWidth} />
      ))}
    </section>
  );
};
