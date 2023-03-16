import React, { useEffect } from "react";
import Notes from "./Notes";
import "../styles/noteContainer.css";

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    let newAarr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newAarr.push(arr[i]);
    }
    return newAarr;
  };
  const notes = reverseArray(props.notes);
  return (
    <div className="note-container">
        <h2 className="header">Debu's Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((item) => {
            return (
              <Notes
                key={item.id}
                note={item}
                handleDelete={props.handleDelete}
                updateText={props.updateText}
              />
            );
          })
        ) : (
          <h3>No notes presents</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
