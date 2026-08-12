import React from 'react'
import axios from "axios";

async function getData() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/todos");     

  response.data.forEach(elem => {
    console.log(elem.title)
  });
}
const App = () => {
  return (
    <div className=''>
      <button onClick={getData} className='bg-gray-200 p-3 cursor-pointer rounded-lg m-1.5'>GET DATA</button>
    </div>
  )
}

export default App
