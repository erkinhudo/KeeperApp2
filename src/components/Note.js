import React from "react";

function Note(props) {
  return (
    <div className="note">
     
      <dt> 
      <span>{props.title} </span>
      </dt>
      <dd>{props.content}</dd>
    </div>
  );
}

export default Note;
