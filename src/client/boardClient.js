import axios from 'axios'

const boardClient = axios.create({
  baseURL: 'http://localhost:8088/board',
  headers: {
    'Content-Type': 'application/json'
  }
})

boardClient.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

boardClient.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response && error.response.data) {
    console.log(JSON.stringify(error.config))
    console.log(JSON.stringify(error.response.data))
  }
  return Promise.reject(error.response)
})

export default boardClient