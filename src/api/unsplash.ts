import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;
const accessKey = process.env.REACT_APP_ACCESS_KEY || '';

export default axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: accessKey,
  },
});
