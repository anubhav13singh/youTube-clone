import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import './searchbar.css'
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate()

    const handleSubmit =(e) => {
      e.preventDefault();

      if(searchTerm) {
          navigate(`/search/${searchTerm}`);
          setSearchTerm('')
      }
    }

  return (
    <div  >
        <form className='search-bar' onSubmit={handleSubmit}>

            <input type='text'
            placeholder='search...'  
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value) } 
            />
            <button className='search'> <BsSearch/></button>
            </form>
        
            
    </div>
  )
}
export default SearchBar

