import React from 'react'
import PropTypes from 'prop-types';

import './VideoItem.scss';

const VideoItem = ({video, onItemClick}) => (
  <div className={'item video-item'} onClick={() => onItemClick(video)}>
    <img
      className='ui image'
      src={video.snippet.thumbnails.medium.url}
      alt={video.snippet.title}
      />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
  </div>
)

VideoItem.propTypes = {
  video: PropTypes.shape({
    snippet: PropTypes.object,
  })
}

export default VideoItem;