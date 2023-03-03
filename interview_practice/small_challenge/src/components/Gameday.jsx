import React, { useState } from "react";

function Gameday() {
  const day = ["weekend", "weekday"];
  const play = ["cricket", "football", "vallyball", "basketball"];

  const [game, setGame] = useState({ day: "", play: "" });

  const handleChange = (e) => {
    let inp = e.target;
    setGame({
      ...game,
      [inp.name]: inp.value
    });
  };

  // console.log(game);
  return (
    <>
      <h3>Which day which game?</h3>

      <h2>Which day?</h2>
      {day.map((el) => {
        return (
          <div key={el}>
            <input
              type="radio"
              name="day"
              id={`${day}`}
              value={el}
              onChange={handleChange}
            />
            <label>{el}</label>
          </div>
        );
      })}
      <br />
      <h2>Which game?</h2>
      {play.map((el) => {
        return (
          <div key={el}>
            <input
              type="radio"
              name="play"
              id={`${play}`}
              value={el}
              onChange={handleChange}
            />
            <label>{el}</label>
          </div>
        );
      })}

      <h1>Play</h1>
      <p>
        In {game.day ? game.day : "Today"} Play{" "}
        {game.play ? game.play : "No game"}{" "}
      </p>
    </>
  );
}
export default Gameday;
