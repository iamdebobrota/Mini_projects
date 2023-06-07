import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [Status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(password)) {
      setStatus("Your password is strong!");
    } else {
      setStatus("Your password is weak. Please choose a stronger password.");
    }
  }

  function handleInputChange(event) {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input type="password" value={password} onChange={handleInputChange} />
      </label>
      <button type="submit">Check</button>
      <h4>Status: {Status}</h4>
    </form>
  );
}

export default PasswordChecker;
