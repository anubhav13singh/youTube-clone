import React, { useEffect } from 'react'
import { fetchApi } from '../../utils/Api'
import ReactPlayer from 'react-player'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Box, Stack, Typography } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
import Videos from '../video/Videos'

function VideoDetail() {

  const {id} = useParams();
  const[videoDetail, setVideoDetail]= useState([])
  const[ videos, setVideos] =useState([])
console.log(videoDetail);

  useEffect(() => {
      fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>setVideoDetail(data.items[0]) );

      fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
      }, [id])
  
  return (
    
    <>
    <Box minHeight='92vh' backgroundColor='black' padding='10px'>
      <Stack direction={{xs:'column', md:'row'}}>
        <Box width={{xs:'100%', md:'70%'}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}` } 
          style={{width:'100%', height:'500px'}} controls />

          <Typography color='white' fontSize='20px' padding='10px 0px 0px 10px' fontWeight='400'>
            {videoDetail?.snippet?.title}
          </Typography>

          <Stack direction='row' justifyContent='space-between' alignItems='center' padding='0px 12px'>

              <Typography color='grey' fontSize='15px' fontWeight='300' >
                {videoDetail?.snippet?.channelTitle}
                <AiFillCheckCircle style={{margin:'5px'}} />
              </Typography>

              <Stack direction='row' gap='10px'>
                <Typography color='grey' fontSize='12px' fontWeight='200' >
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>

                <Typography color='grey' fontSize='12px' fontWeight='200' >
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>

          </Stack>
        </Box>


        <Typography color='white' fontSize='18px' fontWeight='200' padding='12px 0px 0px 10px' >
          Related Videos
        </Typography>

        <Box margin='10px'>
          <Stack direction={{xs: 'column', md: 'row'}} justifyContent='center' >
            <Videos videos={videos} />
          </Stack>
        </Box>


      </Stack>

    </Box>
    
    
    </>

  )
}

export default VideoDetail