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
import './CDDetails.css';
import CDTab from './CDTab.jsx';
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
                           
                           {/* <CDTab></CDTab> */}

                       {/* <div className="col-lg-4 col-md-4 col-sm-4"> */}
                       {/* <h5 className="font300 font-16 mb-3">Loan Costs</h5> */}
                       <div className="">
                           <Table >
                               <thead>
                                   <tr>
                                       <td></td>
                                   <th>Loan Estimate</th>
                                   <th>Final</th>
                                   <th>Did this Change? </th>
                                   </tr>
                               </thead>
                               <tbody>
                                   <tr>
                                       <td>Total Closing Costs(J)</td>
                                       <td>$<span contentEditable>8,054.00</span></td>
                                       <td>$<span contentEditable>9,712,10</span></td>
                                       <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select><br/><span className="change_input_field">.See Total loan Cost(D) and Total Other Costs(I)
                                            </span></td>
                                   </tr>
                                   <tr>
                                       <td>Closing Costs Paid Before Closing</td>
                                       <td>$<span contentEditable> 0</span></td>
                                       <td>$<span contentEditable> 29,90</span></td>
                                       <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select><br/><span className="change_input_field">You paid these Closing Costs before closing.
                                            </span></td>
                                   </tr>
                                   <tr>
                                       <td>Closing Costs Financed <span className="change_input_field">(Paid fran your Loan Amount)
                                            </span></td>
                                        <td>$<span contentEditable> 0</span></td>
                                        <td>$<span contentEditable> 0</span></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td>Down Payment/Funds from Borrower</td>
                                        <td>$<span contentEditable> 18,000.00</span></td>
                                        <td>$<span contentEditable> 18,000.00</span></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td>Deposit</td>
                                        <td>$<span contentEditable> 10,000.00</span></td>
                                        <td>$<span contentEditable> 10,000.00</span></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td>Funds for Borrower</td>
                                        <td>$<span contentEditable> 0</span></td>
                                        <td>$<span contentEditable> 0</span></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td>Seller Credits</td>
                                        <td>$<span contentEditable> 0</span></td>
                                        <td>$<span contentEditable> 2,500.00</span></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select><br/><span className="change_input_field">• See Seller Credits in Section L 
                                            </span></td>
                                    </tr>
                                    <tr>
                                        <td>Adjustment and Other Credits</td>
                                        <td>$<span contentEditable> 0</span></td>
                                        <td>$<span contentEditable> 1,035.04</span></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select><br/><span className="change_input_field">See details in Section K and L 
                                            </span></td>
                                    </tr>
                                    <tr>
                                        <td>Cash to Close</td>
                                        <td>$<span contentEditable> 16,054,00</span></td>
                                        <td>$<span contentEditable> 14, 147,26</span></td>
                                    </tr>
                               </tbody>
                           </Table>
                           </div>
                            
                           
                           
                            <div className="col-6">
                                <div className="title">Summaries of Transactions </div>
                                            <div className="title">BORROWER TRANSACTION</div>
                                        <Table>
                                             <thead>
                                               <tr>
                                                   <th>K. Due from Borrower at Closing</th>
                                                   <th>$<span contentEditable> 189,762.50</span></th>
                                                   </tr> 
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Sale Price of Property</td>
                                                    <td>$<span contentEditable> 180,000,00</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Sale Price of Any Personal I Property Included in Sale </td>
                                                </tr>
                                                <tr>
                                                    <td>Closing Costs Paid at Closing (J) </td>
                                                    <td>$<span contentEditable> 9,682,30</span></td>
                                                </tr>
                                                <tr>
                                                    <th>Adjustments</th>
                                                </tr>
                                                <tr>
                                                    <th contentEditable></th>
                                                    <th contentEditable></th>
                                                </tr>
                                                <tr>
                                                    <th contentEditable></th>
                                                    <th contentEditable></th>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th>Adjustments for Items Paid by Seller in Advance</th>
                                                </tr>
                                                <tr>
                                                    <td>Oty/Town Taxes to </td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td>CountyTaxes to </td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td>Assessments to</td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                <td>HOA Dues 4/5/13 to 4/30/13</td>
                                                <td>$<span contentEditable>80.00</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <td>L. Paid Already by or on Behalf of Borrower at Closing</td>
                                                    <td>$<span contentEditable> 175,615.04</span></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Deposit</td>
                                                    <td>$<span contentEditable> 10,000,00 </span></td>
                                                </tr>
                                                <tr>
                                                    <td>LoanAmount</td>
                                                    <td>$<span contentEditable> 162,000,00</span></td>
                                                </tr>
                                                <tr>
                                                    <td> Existing loan(s) Assumed or Taken Subject to </td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <th>Adjustments</th>
                                                </tr>
                                                <tr>
                                                    <th contentEditable></th>
                                                    <th contentEditable></th>
                                                </tr>
                                                <tr>
                                                    <th contentEditable></th>
                                                    <th contentEditable></th>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th>Adjustments for Items Unpaid by Seller </th>
                                                </tr>
                                                <tr>
                                                    <td>City/Town Taxes 1/1/13 to 4/ 14/ 13</td>
                                                    <td>$<span contentEditable> 365.04</span></td>
                                                </tr>
                                                <tr>
                                                    <td>CountyTaxes to</td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td>Assessments to</td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <th className="title">CALCULATION</th>
                                                </tr>
                                                <tr>
                                                    <td>Total Due from Borrower at Closing (k)</td>
                                                    <td>$<span contentEditable> 189,762,30</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Total Paid Aleady by oron Behalf of Borrower at Closing (L)</td>
                                                    <td>$<span contentEditable> 175,615,04</span></td>
                                                </tr>
                                                <tr>
                                                    <td>Cash to Close<input type="checkbox"/>From<input type="checkbox"/>To Borrower</td>
                                                    <td>$<span contentEditable> 14,147.26</span></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    
                                    <div className="col-6">
                                    <div className="title">SELLER'S TRANSACTION</div>
                                    <br/>
                                    
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>M.Due to Seller at Closing</th>
                                                    <td>$<span contentEditable> 180,080.00</span></td>
                                                </tr>
                                                
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Sale Price of Property</td>
                                                    <td>$<span contentEditable> 180,000,00</span></td>                                                   
                                                </tr>
                                                <tr>
                                                    <td>Sale Price of Any Personal Property Included in Sale</td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                   
                                                </tr>
                                                <tr>
                                                    <th>Adjustment for Items Paid by Seller In Advance</th>
                                                </tr>
                                                <tr>
                                                    <td>City/Town Taxes to</td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td>CountyTaxes to</td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td>Assessments to </td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td>HOA Dues 4/15/13 to 4/30/13</td>
                                                    <td>$<span contentEditable> 80,00</span></td>   
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>N, Due from Seller at Closing</th>
                                                    <td>$<span contentEditable> 1,15,665.04</span></td>  
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Excess Deposit </td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td>Closing Costs Paid at Closing (J)</td>
                                                    <td>$<span contentEditable> 12,800.00</span></td>  
                                                </tr>
                                                <tr>
                                                    <td>Existing loan(s) Assumed or Tak.en Subject to</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Payoff of First Mon gage Loan </td>
                                                    <td>$<span contentEditable> 100,00000</span></td>   
                                                </tr>
                                                <tr>
                                                    <td> Payoff of Second Mortgage loan</td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td>Seller Credit </td>
                                                    <td>$<span contentEditable> 2,50000</span></td>     
                                                </tr>
                                                <tr>
                                                    <th>Adjustment for Items Unpaid by Seller</th>
                                                </tr>
                                                <tr>
                                                    <td>City/TownTaxes 1/1/13 to 4/4/13</td>
                                                    <td>$<span contentEditable> 365.04</span></td>     
                                                </tr>
                                                <tr>
                                                    <td> CountyTaxes to </td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <td>Assessments to</td>
                                                    <td contentEditable></td>
                                                </tr>
                                                <tr>
                                                    <th className="title">CALCULATION</th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <td>Total Due to Seller at Closing (M) </td>
                                                    <td>$<span contentEditable> 180,09000</span></td>   
                                                </tr>
                                                <tr>
                                                    <td>Total Due from Seller at Oosing (N)</td>
                                                    <td>$<span contentEditable> 115,665.04</span></td> 
                                                </tr>
                                                <tr>
                                                    <td>Cash to Close<input type="checkbox"/>From<input type="checkbox"/>To Borrower</td>
                                                    <td>$<span contentEditable> 64,414.96</span></td> 
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
