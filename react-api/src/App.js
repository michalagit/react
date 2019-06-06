import React from 'react';
import axios from 'axios';

import SearchBar from './Components/SearchBar';

class App extends React.Component {
  
  state = {
    searchTerm: ''
  }

  onSearchSubmit(term) {
    const root = 'https://api.unsplash.com/';
    const KEY = 'c53043a0c7493f2e66e318b5be7a2afc7d513b9368b2220ffb2001fd7004d528';

    axios.get(`${root}/search/photos`, {
      params: {
        query: term
      },
      headers: {
        Authorization: `Client-ID ${KEY}`
      }
    })
  }
  
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
