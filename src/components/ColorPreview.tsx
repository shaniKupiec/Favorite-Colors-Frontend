import { Data } from "../models/data.models";


export const ColorPreview = (props: { data: Data, maxWidth: number, onVote: Function }) => {

  const barWidth = props.data.votes / props.maxWidth * 200

  return (
    <section className="color" style={{ backgroundColor: props.data.color }} onClick={() => props.onVote(props.data._id)}>
      <div className="color__bar" style={{ width: barWidth }}> {props.data.votes}</div>
    </section>
  );
};

