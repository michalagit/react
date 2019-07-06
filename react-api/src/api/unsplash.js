import axios from 'axios';

const root = 'https://api.unsplash.com/';
const KEY = 'c53043a0c7493f2e66e318b5be7a2afc7d513b9368b2220ffb2001fd7004d528';


export const searchImages = async (term, callback) => {
  const response = await axios.get(`${root}/search/photos`, {
    params: {
      query: term
    },
    headers: {
      Authorization: `Client-ID ${KEY}`
    }
  });
  callback(response.data.results);
}