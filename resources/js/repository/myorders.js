import wrapPromise from "../utilze/wrapPromise";
import axios from "../repository/api";

export function fetchOrderCountData() {

  return Promise.all([fetchOrderCounts()])
        .then(([count])=>{
          return {count};
        })
        .catch((err)=>{
          return [];
        })
}

function fetchOrderCounts() {

    return new Promise(function (resolve, reject) {
        
        axios.get('myorders/fetchCount')
        .then((response)=>{
            resolve(response);      
        })
        .catch((err)=>{
            reject(err);
        })
    })
    
}