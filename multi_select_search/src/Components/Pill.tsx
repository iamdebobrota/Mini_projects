import React from "react";

const Pill = ({ image, text, onClick }: any) => {
  return (
    <span className="user-pill" onClick={onClick}>
      <img src={image} alt={text} />
      <span>{text}</span>
    </span>
  );
};

export default Pill;
