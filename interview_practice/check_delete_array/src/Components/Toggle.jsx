import React, { useState } from "react";

let arr = [
  "Play cricket",
  "Play football",
  "Play vollyball",
  "Play basketball"
];

function Toggle() {
  const [check, setCheck] = useState("");
  const [arrC, setArrC] = useState(arr);
  const handleDelete = (id) => {
    let filteredArr = arrC.filter((el, i) => i !== id);
    setArrC(filteredArr);
  };

  const handleCheck = (val, id) => {
    setCheck(id);
  };
  return (
    <>
      {arrC.map((el, i) => (
        <ul key={el}>
          <li>
            <input
              type="checkbox"
              name="play"
              id=""
              checked={check === i}
              onChange={(e) => handleCheck(e.target.checked, i)}
            />
            {el}
            <button
              style={check !== i ? { visibility: "hidden" } : null}
              onClick={() => handleDelete(i)}
            >
              X
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default Toggle;
