import React from 'react'
import { useState,useEffect } from 'react'
import Videos from '../../video/Videos'
import {fetchApi} from '../../../utils/Api'
import { useParams } from 'react-router-dom'


function SearchFeed() {

  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

useEffect(() =>{
  fetchApi(`search?part=snippet&q=${searchTerm}`).then((data) => 
  setVideos(data.items) )
},[searchTerm]);

  return (
    <>
    <div style={{overflowY:'auto', height:'90vh',flex:'2', padding:'2'}}> 
        <h4 style={{fontWeight: 'bold',color: 'white'}}>        
         Search Result for {searchTerm}
         <span style={{color: 'red'}}>  Videos </span>
        </h4>


       <Videos videos={videos}/>

      </div>
    </>
  )
}

export default SearchFeed