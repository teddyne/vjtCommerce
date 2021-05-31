import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-type': 'multipart/form-data'
  }
})