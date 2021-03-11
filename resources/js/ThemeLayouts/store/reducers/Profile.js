const ProfileReducer = (state = false, action) => {
    switch (action.type) {
        case "SET_USER":
            return action.payload;
            break;
    
        case "UNSET_USER":
            return {};
            break;
            
        default:
            return state;
            break;
    }
}

export default ProfileReducer;