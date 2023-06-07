import React from "react";
import "../styles/notes.css";
import { MdDelete } from "react-icons/md";

const Notes = (props) => {

  
  let timer = 500,
    timeout;
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };
const updateText=(text, id)=>{
debounce(()=> props.updateText(text, id))
}


  const formatDate = (value) => {
    const monthsName = [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    if (!value) return;
    const date = new Date(value);
    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();

    let month = monthsName[date.getMonth()];
    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea className="note_text"  defaultValue={props.note.text} onChange={(e) => updateText(e.target.value, props.note.id)}>
        
      </textarea>
      <div className="footer_notes">
        <p>{formatDate(props.note.time)}</p>
        <MdDelete
          style={{ fontSize: "25px" }}
          className="delete"
          onClick={() => props.handleDelete(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Notes;
