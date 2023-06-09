import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiFillCheckCircle} from 'react-icons/ai'
import { Box, CardContent, CardMedia } from '@mui/material'
import ChannelDetail from './ChannelDetail'
import { demoProfilePicture } from '../../utils/constant'

function ChannelCard({channel}) {
  return (
    <>
      <div>
        <NavLink to= {`/channel/${channel?.id?.channelId} ` }>
          
         
         
        </NavLink>
      </div>
    </>
  )
}

export default ChannelCard