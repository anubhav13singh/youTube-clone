import React from 'react'
import {categories} from '../../utils/constant'
import './sidebar.css'

function Sidebar( {selectedCategory,setSelectedCategory}) {


  return (
    <>
      <div className='sidebar'>

      {categories.map((c) => 
      
         <button className='sidebar-btn' key={c.name}
          onClick={() => (setSelectedCategory(c.name))}
           style={{backgroundColor: c.name === selectedCategory && '#fC1503' }}> 
           {/* focus on this section  */}

            <span className='sidebar-icon'
            style={{color: c.name === selectedCategory && 'whitesmoke'}}>{c.icon}</span>
            
            <span style={{opacity: c.name === selectedCategory ? '1' : '0.8'}}>{c.name}</span>
        </button>
      
      )}
       </div>
    </>
  )
}

export default Sidebar