import React from 'react'

function MyComponent(props) {
    const shortListedCities = props.cityArray.filter(city => city.length > 6)
    
    return (
      <ul>
        {shortListedCities.map(city => <li key={city}> {city} </li>)}
      </ul>
    )
  }


function App () {
  const cityArray1 = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
  const cityArray2 = ['Hyderabad', 'Islamabad', 'Sawat', 'Gawader']

  return (
    <div>
      <MyComponent cityArray={cityArray1} />
      <MyComponent cityArray={cityArray2} />
    </div>
  )
}

export default App
