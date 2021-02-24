import store from "./store";
import { SignIn, SignOut } from "./action";

function getToken() {
    return localStorage.getItem('access-token');
}

export const getAccessToken = () => {
    return getToken();
}

export const setAccessToken = (token) => {
    localStorage.setItem('access-token', token);
    store.dispatch(SignIn());
    return true;
}

export const removeAccessToken = () => {
    localStorage.removeItem('access-token');
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
