import React, { useState } from "react";

const FormWithState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </form>
  );
};

export default FormWithState;
