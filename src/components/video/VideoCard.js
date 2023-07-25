import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

function VideoCard({card}) {
  return (
    <>
        <Card sx={{width:{xs:'100vw',sm:'250px',md:'280px',lg:'310px'} } }>
         <NavLink to={`/video/${card?.id?.videoId}`}>
          <CardMedia 
            sx={{height: '160px'}} 
            image={card?.snippet?.thumbnails?.high?.url}
            alt= {card?.snippet?.title}/>
         </NavLink>

          
          <CardContent
            sx={{height: 55 , backgroundColor: '#1e1e1e'}}>

            <NavLink to={`/video/${card?.id?.videoId}`}>
            <Typography sx={{fontWeight:{xs:'200', sm:'300',md:'400'}, color:'white',fontSize:{xm:'10px', sm:'14px', lg:'18px'}}} >
             {card?.snippet?.title.slice(0,50)}
            </Typography>
            </NavLink>
         

            <NavLink to={`/channel/${card?.snippet?.channelId}`}>
             <Typography sx={{color: 'grey',fontSize:{xs:'12px', sm:'14px', lg:'18px'}}}>
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