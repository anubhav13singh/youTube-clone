import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../../utils/Api'
import ChannelCard from './ChannelCard'
import { Box } from '@mui/material'
import Videos from '../video/Videos'


function ChannelDetail() {
  
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] =useState([])
  // console.log(channelDetail,videos);

  useEffect(() =>{
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data.items[0]) )

    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items) )
  },[id])

  return (
    <>
    <Box minHeight='95vh' backgroundColor= 'black'>
      
        <Box>
           <div style={{background: 'radial-gradient(circle, rgba(238,174,202,1) 2%, rgba(148,207,233,0.8015581232492998) 100%)',
           zIndex: 10,
           height:' 250px'
          }} />
        <ChannelCard channelDetail={channelDetail} /> 
     
        </Box>

        <Box display='flex' padding='3' mb='10' >

            <Box sx={{mr:{sm:'110px'}}} />
            <Videos videos={videos} />
          {/* research it */}
           
        </Box>

    

    </Box>
    
 
    </>
  )
}

export default ChannelDetail