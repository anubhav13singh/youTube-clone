import React from 'react'
import { useState,useEffect } from 'react'
import Sidebar from '../sidebar/Sidebar'
import './feed.css'
import Videos from '../video/Videos'
import {fetchApi} from '../../utils/Api'


function Feed() {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])


useEffect(() =>{
  fetchApi(`search?part=snippet&q=${selectedCategory}`).then((data) => 
  setVideos(data.items) )
},[selectedCategory]);

  return (
    <>
    
    <div className='feed'>
      <div >
       <Sidebar  selectedCategory ={selectedCategory}
           setSelectedCategory ={setSelectedCategory} />
       </div>
       

      <div className='feed-content'> 
        <h4 style={{fontWeight: 'bold',color: 'white'}}> {selectedCategory} 
         <span style={{color: 'red'}}>  Videos </span>
        </h4>


       <Videos videos={videos}/>

      </div>

    </div>
    </>
  )
}

export default Feed
