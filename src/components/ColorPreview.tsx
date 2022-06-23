import { Data } from "../models/data.models";


export const ColorPreview = ({data, maxWidth, onVote, onRemoveColor}: { data: Data, maxWidth: number, onVote: Function, onRemoveColor: Function }) => {

  const barWidth = data.votes / maxWidth * 200

  const removeColor = (ev: React.FormEvent<EventTarget>) => {
    ev.stopPropagation()
    onRemoveColor(data._id)
  }

  return (
    <section className="color" style={{ backgroundColor: '#' + data.color }} onClick={() => onVote(data._id)}>
      <div className="color__bar" style={{ width: barWidth }}> {data.votes}</div>
      <button className="color__delete" onClick={removeColor}>X</button>
    </section>
  );
};

