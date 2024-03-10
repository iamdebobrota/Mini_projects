import React, { useRef, useState } from "react";

const Timer = () => {
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);
  const intervalId = useRef<any>(null);

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setSecond((prevSecond: number) => {
        if (prevSecond === 59) {
          setMinute((prevMinute: number) => {
            if (prevMinute === 59) {
              setHour((prevHour: any) => prevHour + 1);
              return 0;
            } else {
              return prevMinute + 1;
            }
          });
          return 0;
        } else {
          return prevSecond + 1;
        }
      });
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
  };

  const handleReset = () => {
    setHour(0);
    setMinute(0);
    setSecond(0);
    clearInterval(intervalId.current);
  };

  const formatTime = (value: number) => (value < 10 ? `0${value}` : value);

  const timeString = () => {
    return `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;
  };

  return (
    <div>
      <h1>Timer</h1>
      <h1>{timeString()}</h1>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
