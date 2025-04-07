import React from 'react'
import PropTypes from 'prop-types'

const Child = ({ message }) => {
  return (
    <div style={{ marginTop: '10px', padding: '10px', border: '1px dashed #999', borderRadius: '5px' }}>
      <p>Child Component:</p>
      <p>Message received: <strong>{message}</strong></p>
    </div>
  )
}

// Prop validation
Child.propTypes = {
  message: PropTypes.string.isRequired
}

export default Child