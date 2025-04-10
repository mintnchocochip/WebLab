import React from "react";

function ChildComponent({ msg }) {
  return (
    <div>
      <h3>Message from Parent:</h3>
      <p>{msg}</p>
    </div>
  );
}

export default ChildComponent;