

export const ColorPreview = (props: { color: string; votes: number, maxWidth: number, onVote: Function }) => {

  const barWidth = props.votes / props.maxWidth * 200

  return (
    <section className="color" style={{ backgroundColor: props.color }} onClick={() => props.onVote(props.color)}>
      {/* <div className="color__type">color: {props.color}</div>
      <div className="color__number">votes: {props.votes}</div> */}
      <div className="color__bar" style={{ width: barWidth }}> {props.votes}</div>
    </section>
  );
};

