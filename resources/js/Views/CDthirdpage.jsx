import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store.js';
import { useToasts } from 'react-toast-notifications';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import auth from '../repository/auth';
import { SignIn, SignOut } from "../store/action";
import { getAccessToken, setAccessToken, removeAccessToken, checkUserAuthentication } from "../store/localstorage";
import { Link } from 'react-router-dom';
import './style.css';
function CDthirdpage(props) {
    

        return(
         <>
         <div className="row clearfix">
           <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="header mt-3 mb-3">
                               <h5>Calculating Cash to Close</h5>
                           </div>
               <div className="card"> 
                   <div className="row">
                           <div className="col-lg-12 col-md-12 col-sm-12">
                               <ul className="nav nav-tabs3">
                               <li className="nav-item" ><Link to={'/CDDetails'} className="nav-link">Page 1</Link></li>
                                   
                                   <li className="nav-item" className="nav-link">Page 2</li>
                                   <li className="nav-item"><a className="nav-link" data-toggle="tab">Page 3</a></li>
                                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#General">Page 4</a></li>
                                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#General">Page 5</a></li>
                               </ul>
                           </div>

                       <div className="col-lg-4 col-md-4 col-sm-4">
                       {/* <h5 className="font300 font-16 mb-3">Loan Costs</h5> */}
                           <Table >
                               <thead>
                                   <tr>
                                       <td></td>
                                   <td>Loan Estimate</td>
                                   <td>Final</td>
                                   <td>Did this Change? </td>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                       <td>Total Closing Costs(J)</td>
                                       <td>$8,054.00</td>
                                   </tr>
                               </tbody>
                           </Table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
       )
}
export default CDthirdpage;
