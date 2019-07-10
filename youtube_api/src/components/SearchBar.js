import React, { useState } from 'react'

const SearchBar = props => {
  const [ inputValue, setInputValue ] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    props.onFormSubmit(inputValue)
    // call callback from parent
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Search for video: </label>
          <input type='text' value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
        </div>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  
}

export default SearchBar;