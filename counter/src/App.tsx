import { useState } from "react";

const App = () => {
  var [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter++);
  }
  
  return (
    <div>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button>Remove value</button>
    </div>
  )
}

export default App
