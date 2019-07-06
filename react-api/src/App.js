import React from 'react';

import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import { searchImages } from './api/unsplash';

class App extends React.Component {
  
  state = {
    results: []
  }

  onSearchSubmit = term => {
    searchImages(term, this.setResults);
  }

  setResults = results => {
    this.setState({
      results
    })
  }
  
  render() {
    const {results} = this.state;
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {results.length} images
        <ImageList data={results}/>
      </div>
    );
  }
}

export default App;
