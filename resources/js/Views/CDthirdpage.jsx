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
                               <h5>Calculating Cash to Close <span className="change_input_field"><p>Use this table to see what has changed from your Loan Estimate</p></span></h5>
                            
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
                                       <td>$9,712,10</td>
                                       <td>YES<br/><span className="change_input_field">.See Total loan Cost(D) and Total Other Costs(I)
                                            </span></td>
                                   </tr>
                                   <tr>
                                       <td>Closing Costs Paid Before Closing</td>
                                       <td>$0</td>
                                       <td>-$29,90</td>
                                       <td>YES <br/><span className="change_input_field">You paid these Closing Costs before closing.
                                            </span></td>
                                   </tr>
                                   <tr>
                                       <td>Closing Costs Financed <span className="change_input_field">(Paid fran your Loan Amount)
                                            </span></td>
                                        <td>$0</td>
                                        <td>$0</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                        <td>Down Payment/Funds from Borrower</td>
                                        <td>$18,000.00 </td>
                                        <td>$18,000.00</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                        <td>Deposit</td>
                                        <td>-$10,000.00</td>
                                        <td>-$10,000.00</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                        <td>Funds for Borrower</td>
                                        <td>$0</td>
                                        <td>$0</td>
                                        <td>NO</td>
                                    </tr>
                                    <tr>
                                        <td>Seller Credits</td>
                                        <td>$0</td>
                                        <td>-$2,.500,00</td>
                                        <td>Yes<br/><span className="change_input_field">• See Seller Credits in Section L 
                                            </span></td>
                                    </tr>
                                    <tr>
                                        <td>Adjustment and Other Credits</td>
                                        <td>$0</td>
                                        <td>-$1,035,04</td>
                                        <td>Yes<br/><span className="change_input_field">See details in Section K and L 
                                            </span></td>
                                    </tr>
                                    <tr>
                                        <td>Cash to Close</td>
                                        <td>$16,054,00</td>
                                        <td>$14, 147,26</td>
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
