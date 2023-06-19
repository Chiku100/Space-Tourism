import './App.css'
import Header from "./Components/Header"
import { Routes, Route } from "react-router-dom"
import { Home } from './Components/Home'
import { Destination } from './Components/Destination'
import { Moons } from './Components/Moons'
import { Mars } from './Components/Mars'
import { Europa } from "./Components/Europa"
import { Titans } from "./Components/Titans"
import { Crew } from './Components/Crew'
import { Technology } from './Components/Technology'
import { Mobilenav } from './Components/Mobilenav'
function App() {

  return (
    <><Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} >

          <Route index element={<Moons />} />
          <Route path='/destination/Mars' element={<Mars />} />
          <Route path='/destination/Europa' element={<Europa />} />
          <Route path='/destination/Titans' element={<Titans />} />
        </Route>
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
      <Mobilenav />
    </>
  )
}

export default App
