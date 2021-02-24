import axios from 'axios';

let token = '41|1c73BDWIpPAqNW8VDQzdbm4W4AcozHwCDl2bZwdA';
axios.defaults.baseURL = 'api/'
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;