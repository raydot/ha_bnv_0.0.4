// NOT USED

import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3005',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  responseType: 'json'
})