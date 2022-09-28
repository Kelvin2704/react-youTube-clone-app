// import axios from "axios";
// export const BASE_URL = "https://youtube-v31.p.rapidapi.com";
// // const API_KEY='AIzaSyDLeLRBBrFU9iL4FO7rODBS1X-RofTvmnw'
// const options = {
//   url: BASE_URL,
//   params: {
//     maxResults: "50",
//     // keys: API_KEY
//   },
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
//     "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
//   },
// };

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };

import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    // q: 'music',
    // part: 'snippet,id',
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '6a2aa3c93emsh4b0ed6e9aaf1821p1236bejsn1ab5d0fb2d55',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};