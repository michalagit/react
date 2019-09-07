import React from 'react'

const SongListElement = ({song, onClick}) => {
  return (
    <div className="item">
      <div className="right floated content">
        <button className="ui button primary" onClick={() => onClick(song)}>select</button>
      </div>
      <div className="content">{song.title}</div>
    </div>
  )
}

export default SongListElement;