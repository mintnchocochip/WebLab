import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LifecycleDemo from './components/LifeCycleDemo.jsx'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <App />,
  <LifecycleDemo />,
  document.getElementById('root')
)
