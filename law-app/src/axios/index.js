import axios from 'axios'
import qs from 'qs';
import Promise from 'promise'

// axios.defaults.baseURL = 'http://129.204.194.44/'
axios.defaults.timeout = 10000
axios.defaults.withCredentials = true
// axios.defaults.headers = {
//   'X-Requested-With': 'XMLHttpRequest',
//   'Content-Type': 'application/json; charset=UTF-8'
// }
// axios.defaults.responseType = 'json'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.response.use((response) => {
    // if (response.data.code !== 0) window.location.href = '/home'
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
