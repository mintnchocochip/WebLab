import React, { useState } from 'react'
import Child from './Child.jsx'

const Parent = () => {
  const [message, setMessage] = useState("Hello from Parent!")
  
  return (
    <div>
      <h3>10 & 11. Props & Prop Validation</h3>
      <p>Parent Component:</p>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message for the child"
      />
      <Child message={message} />
    </div>
  )
}

export default Parent