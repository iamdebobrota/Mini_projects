import "./styles.css";
import { useState } from "react";
export default function App() {
  const [inputs, setInputs] = useState([{ id: 1 }]);
  const addNewInput = () => {
    setInputs((prevInputs) => [...prevInputs, { id: inputs.length + 1 }]);
  };
  const deleteHandler = (id) => {
    setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
  };
  return (
    <div className="App">
      {inputs.map((input) => (
        <div key={input.id}>
          <input defaultValue={input.id} />
          <button onClick={() => deleteHandler(input.id)}>X</button>
          <br />
        </div>
      ))}
      <button onClick={addNewInput}>Add</button>
    </div>
  );
}
