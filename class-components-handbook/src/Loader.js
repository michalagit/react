import React from 'react';

const Loader = ({loadingText = "Loading..."}) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{loadingText}</div>
    </div>
  )
}

export default Loader;