import React, { useRef, useState } from "react";

function FormWithRef() {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const nameValue = nameInputRef.current.value;
    const emailValue = emailInputRef.current.value;

    setFormData({ name: nameValue, email: emailValue });
  };

  return (
    <div>
      <h2>Form Using useRef</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" ref={nameInputRef} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" ref={emailInputRef} />
        </div>
        <button type="submit">Submit</button>
      </form>

      {formData && (
        <div>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      )}
    </div>
  );
}

export default FormWithRef;