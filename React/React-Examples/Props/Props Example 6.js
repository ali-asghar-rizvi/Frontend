import React from 'react';

function MyFunctionalComponent (props) {
  const { heading } = props
  return <h1>{heading}</h1>
}

function App () {
  return (
    <div>
      <MyFunctionalComponent heading='Todo App' />
    </div>
  )
}

export default App
