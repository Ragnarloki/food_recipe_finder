import React from 'react'
import Favorites from './components/Favorites'
import Home from './components/Home'
import { Route,BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Recipe from './components/Recipe'
import Globalstate from './components/GlobalContext'
function App() {
  return (
    <div>
      
       <BrowserRouter>
        <Globalstate>
         <Navbar/>
           <Routes>
             <Route path='/food_recipe_finder/' element={<Home/>}/>
             <Route path='/favorites' element={<Favorites/>}/>
             <Route path='/food_recipe_finder/recipe/:id' element={<Recipe/>}/>
           
           </Routes>
        </Globalstate>  
       </BrowserRouter>
    </div>
  )
}

export default App