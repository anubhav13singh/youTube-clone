import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import './searchbar.css'

function SearchBar() {
    
    const [search, setSearch] = useState()
  return (
    <div  >
        <form className='search-bar' onSubmit={() =>{}}>

            <input type='text'
            placeholder='search...'  
            value={search}
            onChange={(e) => setSearch(e.target.value) } 
            />
            <button className='search'> <BsSearch/></button>
            </form>
        
            
    </div>
  )
}
export default SearchBar

