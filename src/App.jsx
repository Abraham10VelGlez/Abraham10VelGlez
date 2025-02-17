import { useState } from 'react'
import './App.css'
import Navigates from './routes/Navigates'
function App() {
  const [count, setCount] = useState(0)
  return <Navigates></Navigates>;
}
export default App