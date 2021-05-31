import axios from 'axios'

const axiosApiInstance = axios.create({
  baseURL: 'http://localhost:5000/api'
})

axiosApiInstance.interceptors.request.use(
  async request => {
    const headers = {
      'Content-type': 'application/json'
    }
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.accessToken) {
      headers.Authorization = `Bearer ${user.accessToken}`
    }
    request.headers = headers
    return request;
  },
  error => {
    Promise.reject(error)
})

// axiosApiInstance.interceptors.response.use((response) => {
//   return response
// }, async function (error) {
//   const originalRequest = error.config
//   if (error.response.status === 403 && !originalRequest._retry) {
//     originalRequest._retry = true;
//     const access_token = await refreshAccessToken()          
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token
//     return axiosApiInstance(originalRequest)
//   }
//   return Promise.reject(error)
// })

export default axiosApiInstance