import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from '../channel/ChannelCard';


function Videos({videos}) {

  console.log(videos);
  return (
    
    <div
     style={{display:'flex', 
      flexWrap:'wrap',    
       flexDirection:'row', 
       gap:'10px'}}>

        {videos.map((item, idx) => (
          <div key={idx} >
           
            {item.id.videoId && <VideoCard card={item}/>}
            {item.id.channelId && <ChannelCard card={item}/>}

          </div>
        ))}
    </div>
  )
}

export default Videos