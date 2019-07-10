import axios from 'axios';

const API_KEY = 'AIzaSyDZ-aCBkckPytwMHRgQfAp68f6eILRRxyY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  }
})