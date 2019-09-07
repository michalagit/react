import React from 'react'
import { connect } from 'react-redux';

const SongDetails = props => {
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title:{props.song.title}</p>
      <p>Duration:{props.song.duration}</p>
    </div>
  )
}
const mapStateToProps = state => ({
  song: state.selectedSong,
})

export default connect(mapStateToProps)(SongDetails);