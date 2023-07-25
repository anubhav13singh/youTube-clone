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
// console.log(videos);

  useEffect(() => {
      fetchApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>setVideoDetail(data.items[0]) );

      fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data) => setVideos(data.items))
      }, [id])
  
  return (
    
    <>
    
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}gap={{xs:'60px',lg:'10px'}}>
       <Box flex={1}>

          <Box sx={{ width:{xs:'100vw', md:'70vw'},height:{xs:'55vh', md:'60vh'}, position: "sticky", top: "86px" }} >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width='100%'height='100%' controls />

            <Typography color="#fff" fontSize={{md:'27px'}} padding={{xs:'0px 5px', md:'0px 10px'}}>
              {videoDetail?.snippet?.title}
            </Typography>

            <Stack direction="row" padding={{xs:'0px 5px', md:'0px 10px'}} justifyContent="space-between" sx={{ color: "#fff" }}  >
              
              < NavLink to={`/channel/${videoDetail?.snippet?.channelId}`} >
                <Typography   color="#fff" >
                  {videoDetail?.snippet?.channelTitle}
                  <AiFillCheckCircle style={{margin:'5px'}} />
                </Typography>
                </NavLink>

              <Stack direction="row" gap="10px" alignItems="center">
                <Typography sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography  sx={{ opacity: 0.7 }}>
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