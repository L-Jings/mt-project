import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com'

axios.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    appkey: 'Drama67_1602512135000'
  }
  return config
}, (error) => Promise.reject(error))

export default axios
