import axios from 'axios';

let token = '41|1c73BDWIpPAqNW8VDQzdbm4W4AcozHwCDl2bZwdA';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
// axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true

export default axios;