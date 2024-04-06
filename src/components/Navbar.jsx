import React from 'react'
import { Link } from 'react-router-dom'
import '.././App.css'
function Navbar() {
  return (
    <div className='bar'>
        <Link to={'/food_recipe_finder/'}className='bar_h1'><h3 >HOME</h3></Link>
        <Link to={'/food_recipe_finder/recipe/:id'}className='bar_h1'><h3 >RECIPEDETAILS</h3></Link>
    </div>
  )
}

export default Navbar