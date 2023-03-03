import React, { useState } from "react";

function CountrySelect() {
  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai", "Kolkata", "UP", "Gujrat"],
    },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
  ];
  const [state, setState] = useState(0);

  return (
    <>
      <h2>Country Select</h2>
      <div>
        <select
          name="Country"
          onChange={(e) => setState(Number(e.target.value))}>
          {countries.map((el, index) => {
            return (
              <option value={index} key={el.name}>
                {el.name}
              </option>
            );
          })}
        </select>
        <select name="city">
          {countries[state].cities.map((el, index) => (
            <option value={index} key={index}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default CountrySelect;
