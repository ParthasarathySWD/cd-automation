import store from "../store/store.js";
import { SignIn, SignOut } from "../store/action";
import axios from "./api.js";

import toastr from 'reactjs-toastr';
import 'reactjs-toastr/lib/toast.css';
import { getAccessToken, setAccessToken, removeAccessToken, checkUserAuthentication } from "../store/localstorage";

class Auth {
    constructor(){
        this.authenticated = false;
    }

    login(formData){
        return new Promise((resolve, reject) => {

            axios.post('login', formData)
                    .then((response) => {
                        resolve(response);
                    })
                    .catch((error) => {
                        reject(error.response);
                    })

        })
/*         let data = response.data;
        toastr.success('Success Message', 'Title', { displayDuration: 3000 });
        store.dispatch(SignIn());
        cb();
 */    }
    
    logout(cb){
        this.authenticated = false;
        removeAccessToken();
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }
}


export default new Auth();