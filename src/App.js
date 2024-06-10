

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './stores/pages/LandingPage'  
import MobilePage from './stores/pages/MobilePage'
import ComputersPage from './stores/pages/ComputersPage'
import WatchPage from './stores/pages/WatchPage'
import MenPage from './stores/pages/MenPage'
import WomanPage from './stores/pages/WomanPage'
import FurniturePage from './stores/pages/FurniturePage'
import AcPage from './stores/pages/AcPage'
import KitchenPage from './stores/pages/KitchenPage'
import TvPage from './stores/pages/TvPage'
import MobileSingle from './stores/pages/MobileSingle'
import UserCart from './stores/UserCart'
import FridgePage from './stores/pages/FridgePage'
import ComputerSingle from './stores/pages/ComputerSingle'
import FurnitureSingle from './stores/pages/FurnitureSingle'
import KitchenSingle from './stores/pages/KitchenSingle'
import AcSingle from './stores/pages/AcSingle'
import MenSingle from './stores/pages/MenSingle'
import WatchSingle from './stores/pages/WatchSingle'
import WomanSingle from './stores/pages/WomanSingle'
import FridgeSingle from './stores/pages/FridgeSingle'
import TvSingle from './stores/pages/TvSingle'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = { <LandingPage />}/>
        <Route path= '/kitchen' element = {<KitchenPage />} />
        <Route path='/mobiles' element= {<MobilePage />} />
        <Route path='/computers' element= {<ComputersPage />} />
        <Route path='/watch' element= {<WatchPage />} />
        <Route path='/fridge' element={<FridgePage />} />
        <Route path='/men' element= {<MenPage />} /> 
        <Route path='/woman' element= {<WomanPage />} />             
        <Route path='/furniture' element= {<FurniturePage />} />             
        <Route path='/ac' element= {<AcPage />} />     
        <Route path='/tv' element={<TvPage />}></Route>        
           <Route path='/mobiles/:id' element = {<MobileSingle />} />
      <Route path='/cart' element = {<UserCart />} />
      <Route path='/ac/:id' element = {<AcSingle />} />
      <Route path='/computers/:id' element = {<ComputerSingle />} />
      <Route path='/furniture/:id' element = {<FurnitureSingle />} />
      <Route path='/kitchen/:id' element = {<KitchenSingle />} />
      <Route path='/men/:id' element = {<MenSingle />} />
      <Route path='/watch/:id' element = {<WatchSingle />} />
      <Route path='/woman/:id' element = {<WomanSingle />} />
      <Route path='/fridge/:id' element = {<FridgeSingle />} />
      <Route path='/tv:id' element={<TvSingle />}></Route>
      </Routes>
    </div>
  )
}

export default App