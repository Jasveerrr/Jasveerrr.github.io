import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../Components/Home';
import About from '../Components/About';


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />} > </Route>
      </Routes>
    </div>
  )
}

export default App
