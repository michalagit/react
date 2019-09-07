import React from 'react'

import VideoItem from './VideoItem';

const VidoList = ({videos, onVideoClick})=> (
  <div className="ui relaxed divided list">
    {videos.map(video => 
      <VideoItem
        key={video.id.videoId}
        video={video}
        onItemClick={onVideoClick}
      />
    )}
  </div>
)

VidoList.propTypes = {
  
}

export default VidoList;