import React, { useState, useEffect } from 'react'


const VideoDetail = ({video}) => {
  const videoSrc = video.id ? `https://www.youtube.com/embed/${video.id.videoId}` : '';
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    return () => {
      setLoading(Boolean(!video.snippet))
    };
  }, [video])
  
  if (loading) {
    return <h3>Loading...</h3>
  }
  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} title='video player' />
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

VideoDetail.propTypes = {
  
}

export default VideoDetail;