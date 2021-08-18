import React, { useReducer } from 'react'
import Reducer from './myReducer'


function App() {
  const [state, dispatch] = useReducer(Reducer, { count: 1, oddEven: "Odd" });        // Or Intial State //
  return (
    <div>
      <h1> {state.count} </h1>
      <h1> {state.oddEven} </h1>
      <button onClick={() => dispatch({ type: "check" })}> Check Count </button>
    </div>
  )
}

export default App
