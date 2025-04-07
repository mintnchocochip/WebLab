import React from 'react'
import Counter from './components/Counter'
import CounterWithReducer from './components/CounterWithReducer'
import JokeFetcher from './components/JokeFetcher'
import FocusForm from './components/FocusForm'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggler from './components/ThemeToggler'
import Parent from './components/Parent'
import './App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <h1>React Hooks & Props Demo</h1>
        
        <ThemeToggler />
        
        <section>
          <h2>6. State Hooks</h2>
          <div className="demo-row">
            <div className="demo-box">
              <h3>useState Hook</h3>
              <Counter />
            </div>
            
            <div className="demo-box">
              <h3>useReducer Hook</h3>
              <CounterWithReducer />
            </div>
          </div>
        </section>
        <section>
          <h2>7. Effect Hooks (useEffect)</h2>
          <div className="demo-box">
            <JokeFetcher />
          </div>
        </section>
        
        <section>
          <h2>8. Ref Hooks (useRef)</h2>
          <div className="demo-box">
            <FocusForm />
          </div>
        </section>
        
        <section>
          <h2>9-11. Props & Context</h2>
          <div className="demo-box">
            <Parent />
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}

export default App