import store from "./store";
import { SignIn, SignOut } from "./action";

function getToken() {
    return localStorage.getItem('loggedin');
}

export const getAccessToken = () => {
    return getToken();
}

export const setAccessToken = (token) => {
    localStorage.setItem('loggedin', 'true');
    // axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
    store.dispatch(SignIn());
    return true;
}

export const removeAccessToken = () => {
    localStorage.removeItem('loggedin');
    store.dispatch(SignOut());
    return true;
}

export const checkUserAuthentication = () => {
    let token = getToken();
    if( token && token != ""){
        console.log(getToken());
        store.dispatch(SignIn());
        return true;
    }
    else{
        store.dispatch(SignOut());
        return false;
    }
    return true;
}
