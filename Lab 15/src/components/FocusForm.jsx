import React, { useRef } from 'react'

const FocusForm = () => {
  const inputRef = useRef(null)
  
  const handleFocus = () => {
    // Focus the input element
    inputRef.current.focus()
  }
  
  return (
    <div>
      <h3>Auto-Focus Form</h3>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Enter text here" 
      />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default FocusForm