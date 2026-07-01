import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  // let counter = 10;

  let [counter, setCounter] = useState(10);

  const addValue = () => {
    counter++;
    setCounter(counter);
  }

  const removeClick = () => {
    counter--;
    setCounter(counter)
  }

  return (

    <>

      <h1>React course with hitesh {counter}</h1>
      <h2>Counter value {counter} </h2>
      <button onClick={addValue}>Add value</button> {" "}
      <button onClick={removeClick}>Remove valur</button>
      <footer>{counter}</footer>
    </>
  )
}

export default App
