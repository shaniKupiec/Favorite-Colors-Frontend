import { useState } from "react";

export const AddColor = ({ onAddColor }: { onAddColor: Function }) => {
  const [input, setInput] = useState<string | null>(null);

  const handleChange = ({ target }: { target: any }) => {
    setInput(target.value);
  };

  const addColor = (ev: any) => {
    ev.preventDefault();
    onAddColor(input);
    setInput(null)
  };

  const startChoosing = () => {
    setInput('#000000')
  }

  return (
    <section className="add-color-cmp">
      {!input && <button className="btn" onClick={startChoosing}>add new color</button>}
      {input && (
        <form className="add-color-cmp__form" onSubmit={addColor}>
          <input type="color" onChange={handleChange} value={input} />
          <button className="btn">add</button>
        </form>
      )}
    </section>
  );
};
