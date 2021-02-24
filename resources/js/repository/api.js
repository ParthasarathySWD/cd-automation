import axios from 'axios';

let token = '';
axios.defaults.baseURL = 'api/'
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
export default axios;