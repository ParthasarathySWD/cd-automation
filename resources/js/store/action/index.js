export const SignIn = () => {
    return {type: "SIGN_IN"};
}

export const SignOut = () => {
    return {type: "SIGN_OUT"};
}

export const setUserDetails = (data) => {
    return {type: "SET_USER", payload: data};
}

export const unsetUserDetails = (data) => {
    return {type: "UNSET_USER", payload: data};
}