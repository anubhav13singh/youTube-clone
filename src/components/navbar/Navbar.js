import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'

import './navbar.css'
import SearchBar from './searchbar/SearchBar'

function Navbar() {
  return (
    <>

      <div className='navbar'>
      <NavLink to='/'> 
      <div className='youtube'>
      <span className='youtube-icon'><AiFillYoutube/></span>
      <p>YouTube</p>
      </div>
      </NavLink>
      
    <SearchBar/>
      </div>
    
    </>
  )
}

export default Navbar