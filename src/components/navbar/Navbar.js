import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'
// import Login from './Login'
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
    {/* <Login /> */}

      </div>
    
    </>
  )
}

export default Navbar