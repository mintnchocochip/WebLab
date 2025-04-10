import React, { useRef } from "react";

const InputFocus = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <h2>Input Focus Example</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};

export default InputFocus;