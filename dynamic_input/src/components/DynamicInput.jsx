import React, { useState } from "react";

export const DynamicInput = () => {
  const [hobbies, setHobbies] = useState([""]);

  const handleHobbyChange = (index, event) => {
    const newHobbies = [...hobbies];
    newHobbies[index] = event.target.value;
    setHobbies(newHobbies);
  };

  const handleAddHobby = () => {
    setHobbies([...hobbies, ""]);
  };

  const handleRemoveHobby = (index) => {
    const newHobbies = hobbies.filter((_, i) => i !== index);
    setHobbies(newHobbies);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(hobbies);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {hobbies.map((hobby, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={hobby}
              onChange={(event) => handleHobbyChange(index, event)}
              placeholder={`Hobby ${index + 1}`}
              style={{ marginRight: "10px" }}
            />
            {index > 0 && (
              <button type="button" onClick={() => handleRemoveHobby(index)}>
                Remove
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAddHobby}>
          Add Hobby
        </button>
        <button type="submit" style={{ display: "block", marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};
