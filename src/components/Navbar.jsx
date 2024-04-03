import React from 'react'
import { Link } from 'react-router-dom'
import '.././App.css'
function Navbar() {
  return (
    <div className='bar'>
        <Link to={'/food_recipe_finder/'}className='bar_h1'><h3 >HOME</h3></Link>
        <Link to={'/favorites'}className='bar_h1'><h3 >FAVORITES</h3></Link>
    </div>
  )
}

export default Navbar