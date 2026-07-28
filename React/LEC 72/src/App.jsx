import React from 'react'
import { useState } from 'react'
import "./index.css";

const App = () => {
  const [num, setNum] = useState(0)
  function incCounter() {
    setNum(num+1)
  }
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-white bg-blue-700 p-10'>{num}</h1>
      <button className='text-white p-10 cursor-pointer h-10 w-fit rounded-xl bg-amber-600 m-20' onClick={incCounter}>INC</button>
    </div>
  )
}

export default App
