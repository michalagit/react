import React from 'react'
import { connect } from 'react-redux';

import SongListElement from './SongListElement';
import { selectSong } from '../actions';
const SongList = (props) => {
  return(
    <div className="ui divided list">
      {props.songs.map(song => <SongListElement song={song} key={song.title} onClick={props.selectSong}/>)}
    </div>
  )
}

const mapStateToProps = state => ({
  songs: state.songs,
})
const mapDispatchToProps = {
  selectSong,
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)
