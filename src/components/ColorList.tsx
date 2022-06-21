import { ColorPreview } from "./ColorPreview";

export const ColorList = ({ data, onVote }: any) => {
  return (
    <section className="color-list">
      {data.map((cmpData: any) => (
        <ColorPreview key={cmpData.color} color={cmpData.color} votes={cmpData.votes} onVote={onVote} maxWidth={100} />
      ))}
    </section>
  );
};
