import axios from 'axios'

const instance = axios.create({ baseURL: 'http://localhost:3001' })
export default instance
// add auth token via
//instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
