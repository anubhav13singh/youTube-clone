import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {Feed, VideoDetail,ChannelDetail,SearchFeed,Navbar} from './components/Export'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path ='/' element={<Feed/>} />
          <Route path ='/video/:id' element={<VideoDetail/>} />
          <Route path ='/channel/:id' element={<ChannelDetail/>} />
          <Route path ='/search/:searchTerm' element={<SearchFeed/>} />
        </Routes>
      
      </BrowserRouter>
   
    </>
  )
}

export default App
