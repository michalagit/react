import { combineReducers } from 'redux';
const songsReducer = () => {
  return [
    {title: 'No no no', duration: '5:02'},
    {title: 'Macarena', duration: '2:22'},
    {title: 'hajos', duration: '2:42'},
  ]
}

const selectedSongReducer = (selectedSong = {}, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default: 
      return selectedSong;
  }
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
})