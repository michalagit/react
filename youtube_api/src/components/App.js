import React, { useState, useEffect } from 'react'

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/yotube';

const App = props => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({});
  const onFormSubmit = async term => {
    const result = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    return setVideos(result.data.items);
  }

  return (
    <div className="ui container">
      <h2>{selectedVideo.snippet && selectedVideo.snippet.title}</h2>
      <SearchBar onFormSubmit={onFormSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onVideoClick={setSelectedVideo}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;