import React, { useState, useEffect } from "react";

function ProgressBar({ value, max }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculatedProgress = (value / max) * 100;
    setProgress(calculatedProgress);
  }, [value, max]);

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  };

  const fillerStyles = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "red",
    borderRadius: "inherit",
    textAlign: "right"
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };
  return (
    <div className="progress-bar" style={containerStyles}>
      <div style={fillerStyles} className="progress-bar-fill">
        <span style={labelStyles}>{progress}%</span>
      </div>
    </div>
  );
}
export default ProgressBar;
