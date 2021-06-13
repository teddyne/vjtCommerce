import axios from 'axios'

export default axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'multipart/form-data'
  }
})