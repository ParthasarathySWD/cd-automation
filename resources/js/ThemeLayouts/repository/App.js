import wrapPromise from "../utilze/wrapPromise";
import axios from "./api";

export function fetchProfileData() {

  return Promise.all([fetchUser()])
        .then(([user])=>{
          return {user};
        })
        .catch((err)=>{
          return [];
        })
}

function fetchUser() {
    
    return new Promise(function (resolve, reject) {
        
        axios.get('profile')
        .then((response)=>{
            resolve(response);      
        })
        .catch((err)=>{
            reject(err);
        })
    })

}


