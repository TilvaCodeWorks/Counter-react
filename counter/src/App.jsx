import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addValue = ()=>{
      setCount(count+1);
  }

  const subValue = ()=>{
      setCount(count-1);
  }

  return (
    <>
      <h2>Value : {count}</h2>
        <button onClick={addValue}>Add value</button>
        <button button onClick={subValue}>Sub value</button>
    </>
  )
}

export default App
