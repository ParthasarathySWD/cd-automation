import store from "../store/store.js";
import { SignIn, SignOut } from "../store/action";
import axios from "./api.js";

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
   }
    
    logout(cb){
        this.authenticated = false;
        removeAccessToken();


        axios.get('logout')
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                reject(error.response);
            })
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }
}


export default new Auth();