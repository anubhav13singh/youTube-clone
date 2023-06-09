import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

function VideoCard({card}) {
  return (
    <>
        <Card sx={{width:{xm:'100%', sm:'283px', lg: '360px'} } }>
         <NavLink to={`/video/${card?.id?.videoId}`}>
          <CardMedia 
            sx={{height: '160px'}} 
            image={card?.snippet?.thumbnails?.high?.url}
            alt= {card?.snippet?.title}/>
         </NavLink>

          
          <CardContent
            sx={{height: 55 , backgroundColor: '#1e1e1e'}}>

            <NavLink to={`/video/${card?.id?.videoId}`}>
            <Typography sx={{fontWeight:{xm:'200', sm:'300'}, color:'white',fontSize:{xm:'10px', sm:'14px', lg:'18px'}}} >
             {card?.snippet?.title.slice(0,60)}
            </Typography>
            </NavLink>
         

            <NavLink to={`/channel/${card?.snippet?.channelId}`}>
             <Typography sx={{color: 'grey',fontSize:{xm:'10px', sm:'14px', lg:'18px'}}}>
              {card?.snippet?.channelTitle}
              <AiFillCheckCircle style={{marginLeft:'5px'}}/>
             </Typography> 
            </NavLink>
            
          
          
          </CardContent>
            
           
           
            
          
        </Card>
          
            
        
    </>
  )
}

export default VideoCard