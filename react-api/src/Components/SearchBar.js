import React from 'react';

class SearchBar extends React.Component {
  state = {
    inputValue: ''
  }
  updateinputValue(e){
    this.setState({
      inputValue: e.target.value
    })
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue)
  }
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Search image:</label>
            <input value={this.state.inputValue} type='text' onChange={e => this.updateinputValue(e)}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;