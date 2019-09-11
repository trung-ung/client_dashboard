import axios from 'axios'

export default instance = axios.create({ baseURL: 'localhost:3001' })

// add auth token via
//instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
