import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function App() {
  const [value, setValue] = useState(0);
  const [max, setMax] = useState(100);
  const [txt, setTxt] = useState(0);

  const handleIncrement = (e) => {
    let inp = e.target.value;
    // setValue(value + 1);
    setTxt(inp);
  };
  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      setValue(txt);
    }
  };
  return (
    <div>
      <h1>PROGRESS BAR</h1>
      <input
        type="number"
        placeholder="write the percentage of progress bar..."
        onChange={handleIncrement}
        onKeyDown={handleKeyDown}
      />
      {/* <button onClick={handleIncrement}>Increment</button> */}
      <ProgressBar value={value} max={max} />
    </div>
  );
}
