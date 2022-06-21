import React from "react";

export const Color = (props: { color: string; votes: number }) => {
  return (
    <section className="color" style={{backgroundColor: props.color}}>
      <div className="color__type">color: {props.color}</div>
      <div className="color__number">votes: {props.votes}</div>
    </section>
  );
};
