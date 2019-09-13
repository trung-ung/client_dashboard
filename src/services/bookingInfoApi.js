import axios from 'axios'

let baseURL

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001'
} else {
  baseURL = 'https://mock-database.herokuapp.com'
}

const instance = axios.create({ baseURL })
export default instance
// add auth token via
//instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
