import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../store/store.js';
import { useToasts } from 'react-toast-notifications';
import auth from '../repository/auth';
import Table from 'react-bootstrap/Table';
import { SignIn, SignOut } from "../store/action";
import { getAccessToken, setAccessToken, removeAccessToken, checkUserAuthentication } from "../store/localstorage";
import { Link } from 'react-router-dom';
import './CDDetails.css';
import './CDsecondpage.jsx';
import './CDthirdpage.jsx';
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
                               <ul className="nav nav-tabs3">
                                   <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#Basic">Page 1</a></li>
                                   
                                   <li className="nav-item" ><Link to="/CDsecondpage" className="nav-link">Page 2</Link></li>
                                   <li className="nav-item"><Link to="/CDthirdpage" className="nav-link" >Page 3</Link></li>
                                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#General">Page 4</a></li>
                                   <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#General">Page 5</a></li>
                               </ul>
                           </div>

                       <div className="col-lg-4 col-md-4 col-sm-4">

                           <div className="body">
                               <h5 className="font300 font-16 mb-3">Closing Information</h5>
                               <table className="table table-sm table-borderless closing-table">
                                <tbody>
                                    <tr>
                                        <td><label>Date Issued </label></td>
                                        <td contentEditable><span className="change_input_field">07/31/2020 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Closing Date </label></td>
                                        <td contentEditable><span className="change_input_field">08/08/2020 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Disbursement Date </label></td>
                                        <td contentEditable><span className="change_input_field">08/13/2020  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Settlement Agent  </label></td>
                                        <td contentEditable><span className="change_input_field">Sourcepoint Fulfillment <br/>Services, Inc. </span> </td>
                                    </tr>
                                    <tr>
                                        <td><label>File#  </label></td>
                                        <td contentEditable><span className="change_input_field">T206369 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Property  </label></td>
                                        <td contentEditable><span className="change_input_field">6823 Rene St <br/>Shawnee, KS 66216 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Estimated Prop. Value </label> </td>
                                        <td contentEditable><span className="change_input_field">$200,000  </span></td>
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
                                        <td ><label>Borrower </label></td>
                                        <td contentEditable><span className="change_input_field">Kevin Kahlfeldt <br/>6823 Rene St <br/>Shawnee, KS 66216  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Lender </label></td>
                                        <td contentEditable><span className="change_input_field">Freedom Mortgage Corporation  </span></td>
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
                                        <td contentEditable><span className="change_input_field">27 yr. 4 mo.  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Purpose  </label></td>
                                        <td contentEditable><span className="change_input_field">Refinance  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Product </label></td>
                                        <td contentEditable><span className="change_input_field">Fixed Rate  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Loan Type </label> </td>
                                        <td contentEditable>Conditional</td>
                                    </tr>
                                    <tr>
                                        <td><label>Loan ID# </label> </td>
                                        <td contentEditable><span className="change_input_field">0116000464  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>MIC# </label></td>
                                        <td contentEditable><span className="change_input_field">182-1492448-703</span></td>
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
                                        <td contentEditable><span className="change_input_field">$182,998 </span>  </td>
                                        <td contentEditable><span className="change_input_field">NO</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Interest Rate  </td>
                                        <td contentEditable><span className="change_input_field">2.875%</span></td>
                                        <td contentEditable><span className="change_input_field">NO</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Monthly Principal & Interest<br/><span className="small">See Projected Payments below for your
                                        Estimated Total Monthly Payment </span>  </td>
                                        <td contentEditable><span className="change_input_field">$806.20</span></td>
                                        <td contentEditable><span className="change_input_field">NO</span></td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Prepayment Penalty</td>
                                        <td></td>
                                        <td>Does the loan have these features?<br/><span contentEditable className="change_input_field">NO</span> </td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Balloon Payment </td>
                                        <td></td>
                                        <td contentEditable><span className="change_input_field">NO</span></td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
                   </div>
                   <div className="col-12">
                   <div className="size">
                   <div className="header mt-3 mb-3">
                               <h5>Projected Payments</h5>
                           </div>
                   <Table >
           <thead>
            <tr>
                <th className="data-heading">Payment calculation </th>
                <th>Years 1-7 </th>
                <th>Year 8-30</th>
            </tr>
        </thead>
        <tbody>
        <tr>
                <td className="data-heading">Prindpal & Interest </td>
                <td contentEditable>$761.78 </td>
                <td contentEditable>$761 .78</td>
     </tr>
    <tr>
            <td className="data-heading">Mortgage Insurance </td>
             <td>+ 82.35</td>
             <td>+  -</td>
    </tr>
    <tr>
           <td className="data-heading">Estimated Escrow <br/><span className="small">Amount can increase over time </span></td>
            <td>+ 206.13 </td>
            <td>+ 206.13 </td>
    </tr>
    <tr>
           <td className="data-heading">Estlmatod Total Monthly Payment </td>
            <td contentEditable><span className="change_input_field">$1,050.26</span></td>
            <td contentEditable> <span className="change_input_field">$967.91</span> </td>
    </tr>
  </tbody>

        <tbody>
            <tr>
            <td className="data-heading"><label>Estimated Taxes, Insurance & Asessments <br/><span className="small">Amount can increase over time
                        See page4 for details </span></label></td>
                <td contentEditable><span className="change_input_field">$356.13
                       a month </span></td>
                 
                <td>
                <tr className="data-heading">This estimate Includes</tr>
                    <tr><label>Property Taxes</label><input type="checkbox"/></tr>
               <tr><label>Homeowner's Insurance </label><input type="checkbox"/></tr> 
               <tr> <label>Other:Homeowner's Association Dues </label> <input type="checkbox"/></tr></td>
                <tr>
                    <tr className="align data-heading"><p>In escrow? </p> </tr>
                    <tr contentEditable>Yes</tr>
                    <tr contentEditable>Yes</tr>
                    <tr contentEditable>NO</tr>
                </tr>
            </tr>
        </tbody>
    </Table>
    
    <Table>
    <h5>Costs at Closing </h5>
    <tbody>
        <tr>
            <td className="data-heading">Closing Costs</td>
            <td><p contentEditable>$9,712.10</p> <br/><span className="change_input_field">Includes $4,694.05 in Loan Costs+ $5,018.05 in Other Costs- $0
in lender Credits. See page 2 for details.</span></td>
        </tr>
        <tr>
            <td className="data-heading">Cash to Close</td>
            <td><p contentEditable> $14,147.26<br/></p><span className="change_input_field">Includes Closing Costs. See Calculating Cash to Close on page 3 for details. 
</span></td>
        </tr>
    </tbody>
</Table>
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
