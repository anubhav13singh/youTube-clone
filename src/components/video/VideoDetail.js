import  React, { useEffect } from 'react'
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
// console.log(videoDetail);

  useEffect(() => {
      fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>setVideoDetail(data.items[0]) );

      fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
      }, [id])
  
  return (
    
    <>
    
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {videoDetail?.snippet?.title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} >
              
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {videoDetail?.snippet?.channelTitle}
                  <AiFillCheckCircle style={{margin:'5px'}} />
                </Typography>
              
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box  py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
    
    
    </>

  )
}

export default VideoDetail