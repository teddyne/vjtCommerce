import axios from 'axios'

const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user && user.accessToken){
    const token = 'Bearer ' + user.accessToken
    return token
  }
  return null
}

const getHeaders = () => {
  const headers = {
    'Content-type': 'application/json'
  }
  if (getToken()) {
    headers.Authorization = getToken()
  }
  return headers
}

export default axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: getHeaders()
})