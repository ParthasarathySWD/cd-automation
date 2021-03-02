import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store.js';
import { useToasts } from 'react-toast-notifications';


import auth from '../repository/auth';
import { SignIn, SignOut } from "../store/action";
import { getAccessToken, setAccessToken, removeAccessToken, checkUserAuthentication } from "../store/localstorage";


import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
function CDDetails(props) {
    

        return(
         <>
         <div className="row clearfix">
           <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="header mt-3 mb-3">
                               <h5>Closing Disclosure</h5>
                           </div>
               <div className="card"> 
                   <div className="row">
                           <div className="col-lg-12 col-md-12 col-sm-12">
                               <ul class="nav nav-tabs3">
                                   <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#Basic">Page 1</a></li>
                                   <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#Account">Page 2</a></li>
                                   <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#General">Page 3</a></li>
                                   <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#General">Page 4</a></li>
                                   <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#General">Page 5</a></li>
                               </ul>
                           </div>

                       <div className="col-lg-4 col-md-4 col-sm-4">

                           <div className="body">
                               <h5 className="font300 font-16 mb-3">Closing Information</h5>
                               <table className="table table-sm table-borderless closing-table">
                                <tbody>
                                    <tr>
                                        <td><label>Date Issued </label></td>
                                        <td><span className="change_input_field">07/31/2020 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Closing Date </label></td>
                                        <td><span className="change_input_field">08/08/2020 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Disbursement Date </label></td>
                                        <td><span className="change_input_field">08/13/2020  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Settlement Agent  </label></td>
                                        <td><span className="change_input_field">Sourcepoint Fulfillment <br/>Services, Inc. </span> </td>
                                    </tr>
                                    <tr>
                                        <td><label>File#  </label></td>
                                        <td><span className="change_input_field">T206369 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Property  </label></td>
                                        <td><span className="change_input_field">6823 Rene St <br/>Shawnee, KS 66216 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Estimated Prop. Value </label> </td>
                                        <td><span className="change_input_field">$200,000  </span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">

                       <div className="body">
                           <h5 className="font300 font-16 mb-3">Transaction Information</h5>
                               <table className="table table-sm table-borderless closing-table">
                                <tbody>
                                    <tr>
                                        <td><label>Borrower </label></td>
                                        <td><span className="change_input_field">Kevin Kahlfeldt <br/>6823 Rene St <br/>Shawnee, KS 66216  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Lender </label></td>
                                        <td><span className="change_input_field">Freedom Mortgage Corporation  </span></td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
                   </div>
                   <div className="col-lg-4 col-md-4 col-sm-4">

                       <div className="body">
                           <h5 className="font300 font-16 mb-3">Loan Information</h5>
                               <table className="table table-sm table-borderless closing-table">
                                <tbody>
                                    <tr>
                                        <td><label>Loan Term </label> </td>
                                        <td><span className="change_input_field">27 yr. 4 mo.  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Purpose  </label></td>
                                        <td><span className="change_input_field">Refinance  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Product </label></td>
                                        <td><span className="change_input_field">Fixed Rate  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Loan Type </label> </td>
                                        <td>Conditional</td>
                                    </tr>
                                    <tr>
                                        <td><label>Loan ID# </label> </td>
                                        <td><span className="change_input_field">0116000464  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>MIC# </label></td>
                                        <td><span className="change_input_field">182-1492448-703</span></td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
                   </div>

                   <div className="col-lg-12 col-md-12 col-sm-12">

                       <div className="body">
                               <table className="table table-sm loanterms-table">
                                <tbody>
                                    <tr>
                                        <td className="text-black"><h5>Loan Terms</h5></td>
                                        <td></td>
                                        <td>Can this amount increase after closing?</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Loan Amount  </td>
                                        <td><h5>$182,998 </h5>  </td>
                                        <td><h5>No </h5>  </td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Interest Rate  </td>
                                        <td><h5>2.875%  </h5>  </td>
                                        <td><h5>No </h5>  </td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Monthly Principal & Interest<br/><span className="small">See Projected Payments below for your
Estimated Total Monthly Payment </span>  </td>
                                        <td><h5>$806.20 </h5>  </td>
                                        <td><h5>No </h5>  </td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Prepayment Penalty</td>
                                        <td></td>
                                        <td>Does the loan have these features?<br/><h5>No</h5>  </td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Balloon Payment </td>
                                        <td></td>
                                        <td><h5>No</h5>  </td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
                   </div>


               </div>

           </div>
       </div>
   </div>

         
        </>
        
       )
}
export default CDDetails;
