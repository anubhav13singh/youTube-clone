import React from 'react'
import VideoCard from './VideoCard';


function Videos({videos}) {

  console.log(videos);
  return (
    
    <div
     style={{display:'flex', 
      flexWrap:'wrap',    
       flexDirection:'row', 
       gap:'10px',
       overflowY: '-moz-hidden-unscrollable'
       }}>

        {videos.map((item, idx) => (
          <div key={idx} >
           
            {item.id.videoId && <VideoCard card={item}/>}
            

          </div>
        ))}
    </div>
  )
}

export default Videos