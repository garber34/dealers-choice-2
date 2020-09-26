import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () =>{

  return (
    <nav>
    <Link className='nav' to='/'>Home</Link>
    <Link className='nav' to='/games'>Games</Link>
    </nav>
  )

}

export default NavBar
