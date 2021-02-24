import store from "../store/store.js";
import { SignIn, SignOut } from "../store/action";
import axios from "./api.js";
class Auth {
    constructor(){
        this.authenticated = false;
    }

    login(cb){
        this.authenticated = true;
        axios.post('api/login', formData).then((response) => {
            let data = response.data;
            
        })
        store.dispatch(SignIn());
        cb();
    }
    
    logout(cb){
        this.authenticated = false;
        store.dispatch(SignOut());
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }
}


export default new Auth();