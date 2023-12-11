// src/api.js
import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API endpoint
});
