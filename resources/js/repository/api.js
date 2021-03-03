import axios from 'axios';
import { removeAccessToken } from "../store/localstorage";

let token = '41|1c73BDWIpPAqNW8VDQzdbm4W4AcozHwCDl2bZwdA';
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'
// axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true

axios.interceptors.response.use(undefined, 
  function(error) {
      if (error.response.status === 401 ) {
          removeAccessToken();
      }
  }
);

export default axios;