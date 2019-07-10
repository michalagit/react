import React from 'react'

import SearchBar from './SearchBar';
import youtube from '../apis/yotube';

const App = props => {
  const onFormSubmit = async term => {
    const result = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    console.log(result)
    return result
  }
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default App;