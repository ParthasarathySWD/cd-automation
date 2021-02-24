const loggedInReducer = (state = false, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return true;
            break;
    
        case "SIGN_OUT":
            return false;
            break;
    
        default:
            return state;
            break;
    }
}

export default loggedInReducer;