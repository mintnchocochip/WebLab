import React, { Component } from 'react'

class LifecycleDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    console.log('1. Constructor: Component is being initialized')
  }

  componentDidMount() {
    console.log('3. ComponentDidMount: Component has been mounted to the DOM')
    // You could make API calls or set up subscriptions here
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('4. ComponentDidUpdate: Component has been updated')
    console.log('Previous state:', prevState)
    console.log('Current state:', this.state)
  }

  componentWillUnmount() {
    console.log('5. ComponentWillUnmount: Component is about to be unmounted')
    // Clean up subscriptions, timers, etc. here
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render() {
    console.log('2. Render: Component is being rendered (or re-rendered)')
    return (
      <div style={{ 
        padding: '20px',
        border: '2px solid #4a90e2',
        borderRadius: '8px',
        margin: '20px 0'
      }}>
        <h2>Lifecycle Demo Component</h2>
        <p>Count: {this.state.count}</p>
        <button 
          onClick={this.handleIncrement}
          style={{
            background: '#4a90e2',
            color: 'white',
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Update State
        </button>
        <p style={{ marginTop: '15px' }}>
          Please check the console to see the lifecycle method logs
        </p>
      </div>
    )
  }
}

export default LifecycleDemo