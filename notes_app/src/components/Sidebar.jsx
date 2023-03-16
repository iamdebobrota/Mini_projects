import React, { useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import "../styles/sidebar.css";

const Sidebar = (props) => {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91", "teal", "crimson", "green", "yellow", "light-green"];
  const [listOpen, setlistOpen] = useState(false);
  return (
    <div className="sidebar">
      <BsPlusCircleFill
        style={{ fontSize: "35px", cursor: "pointer" }}
        className="add"
        onClick={() => setlistOpen(!listOpen)}
      />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={()=>props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
