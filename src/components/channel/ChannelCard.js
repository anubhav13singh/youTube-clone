import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {  Box, CardContent, CardMedia, Typography } from '@mui/material'
import { demoProfilePicture } from '../../utils/constant'

function ChannelCard({channelDetail}) {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
      alignitem:'center'
    }}>

      
      <CardContent sx={{display:'flex',   
            flexDirection:'column',  
            justifyContent:'center',
            textAlign:'center' ,
            width:'200px',
            marginTop:'-120px'
        }}  >

         <CardMedia 
           image={channelDetail?.snippet?.thumbnails?.high?.url ||   demoProfilePicture } 
            alt ={channelDetail?.snippet?.title}
           sx={{borderRadius: '50%', height:'200px', width:'200px', border:'1px solid #e3e3e3'}} />

           <Typography sx={{color:'grey',marginTop:'8px',fontWeight:'500'}} >
             {channelDetail?.snippet?.title}
             <AiFillCheckCircle style={{marginLeft:'5px'}}/>
           </Typography>

           <Typography sx={{color:'grey',fontWeight:'200',fontSize:'13px'}}>
            {channelDetail?.statistics?.subscriberCount} Subscribers
           </Typography>

 
         </CardContent>
      
         
        
    </div>
  )
}

export default ChannelCard