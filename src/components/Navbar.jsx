import React from 'react'
import { Link } from 'react-router-dom'
import '.././App.css'
function Navbar() {
  return (
    <div className='bar'>
        <Link to={'/'}><h3 className='bar_h1'>HOME</h3></Link>
        <Link to={'/favorites'}><h3 className='bar_h1'>FAVORITES</h3></Link>
    </div>
  )
}

export default Navbar