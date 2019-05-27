import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

class App extends React.Component {
  state = {
    position: {
      lat: null,
      lon: null
    },
    errorMsg: '',
    loading: true
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.updatePosition(position),
      (error) => this.setState({
        errorMsg: error.message
      })
    )
  }
  updatePosition(res){
    this.setState({
      position: {
        lon: res.coords.longitude,
        lat: res.coords.latitude
      },
      loading: false
    })
  }

  render() {
    const appContent = <div>
        {this.state.errorMsg
              ? <h1>Error: {this.state.errorMsg}</h1>
              : <SeasonDisplay position={this.state.position}/>
              }
          </div>
    return (
      <div>
        {
          this.state.loading 
          ? <Loader loadingText={'Please accept the location request :)'}/>
          : appContent
        }
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.querySelector('#root'));