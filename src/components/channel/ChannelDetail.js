import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../../utils/Api'
import Videos from '../video/Videos'
import ChannelCard from './ChannelCard'

function ChannelDetail() {
  
  const {id} = useParams()
  const [channelDetail, setChannelDetail] = useState()
  const [videos, setVideos] =useState([])
  console.log(channelDetail, videos);

  useEffect(() =>{
    fetchApi(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]) )

    fetchApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items) )
  },[id])

  return (
    <>
    <ChannelCard channnelDetail={channelDetail} />
    {/* cssgradient.io */}
    {/* <Videos videos={Videos} /> */}
    </>
  )
}

export default ChannelDetail