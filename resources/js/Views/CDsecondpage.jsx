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
function CDsecondpage(props) {
    

        return(
         <>
         <div className="row clearfix">
           <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="header mt-3 mb-3">
                               <h5>Closing Cost Details</h5>
                           </div>
               <div className="card"> 
                   <div className="row">
                           
                           <CDTab></CDTab>

                       <div className="col-lg-4 col-md-4 col-sm-4">
                       {/* <h5 className="font300 font-16 mb-3">Loan Costs</h5> */}
                       <Table>
                       <tr>
                                       <th></th>
                                       <th className="borrower"><p className="title">Borrower-Paid</p></th>
                                       <th className="seller"><p className="title">Seller-Paid</p></th>
                                       <th className="paid"><p className="title">Paid by others</p></th>
                                   </tr>
                       </Table>
                           <Table >
                               <thead>
                                   
                                <tr>
                                    <th className="title">Loan Costs</th>
                                   
                                    <th>At Closing</th>
                                    <th>Before Closing</th>
                                    
                                  
                                    <th>At Closing &nbsp;</th>
                                    <th>Before Closing</th>
                                   
                                 </tr>
                               </thead>
                               <tbody>
                            <tr>
                                <th className="title">A.Orgination Charge</th> 
                               <th className="title align-title" contentEditable>$1,802.00</th>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                            </tr>
                            <tr>
                                <td> 0.25 % of loanAmount(Points.)</td>
                                <td contentEditable>$405.00</td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                            </tr>
                            <tr>
                                <td> Application Fee </td>
                                <td contentEditable>$300.00</td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                            </tr>
                            <tr>
                                <td> Underwriting Fee</td>
                                <td contentEditable>$1,097.00</td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                            </tr>
                           <tr>
                                 <th className="title">B.Service Borrower Did Not Shop For</th>
                                  <th contentEditable className="title align-title">$236.55</th>
                                   </tr>
                                   <tr>
                                <td> Appraisal Fee to John Smith Appraisers Inc. </td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable></td>
                                <td contentEditable>$405,00</td>
                                <td contentEditable></td>
                               </tr>
                               <tr>
                                   <td>Credit Aepon Fee to Information Inc.</td>
                                   <td contentEditable></td>
                                   <td contentEditable>$29,80</td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>    
                               </tr>
                               <tr>
                                   <td> Flood Determination Fee to Info Co,</td>
                                   <td contentEditable>$20,00</td>
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                               </tr>
                               <tr>
                                   <td>Flood Monitoring Fee to Info Co. </td>
                                   <td contentEditable>$31,75</td>
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                               </tr>
                               <tr>
                                   <td>TaxMonitoring Fee</td>
                                   <td contentEditable>$75,00</td>
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                               </tr>
                               <tr>
                                   <td>Tax Status Agent Fee</td>
                                   <td contentEditable>$80.00</td>
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                                   <td contentEditable></td>    
                                   <td contentEditable></td>  
                               </tr>
                               <tr>

                                <th className="title">D. TOTAL LOAN COSTS (Borrower.Paid) </th>
                                <th  className="title align-title" contentEditable>$4,694.05</th>
                                </tr>
                                <tr>
                                    <td>Loan Costs Subtotals (A+ B + c)</td>
                                    <td contentEditable>$4,664,25 </td>
                                    <td contentEditable>$29,80 </td>
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                </tr>
                                <div className="title">Other Costs </div>
                                <tr>
                                <th className="title">E. taxes and Other Governnment fees</th>
                                <th className="title align-title" contentEditable>$85.00</th>

                                </tr>
                                <tr>
                                    <td> Recording Fees Deed: $40,00 Mongage: $45,00 </td>
                                    <td contentEditable>$85.00</td>
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                </tr>
                                <tr>
                                    <td> TransferTax  to state  </td>
                                    <td contentEditable></td>
                                    <td contentEditable></td>
                                    <td contentEditable>$950.00 </td>
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                </tr>
                                <tr>
                                    <th className="title">F. Prepaids </th>
                                    <th className="title align-title" contentEditable>$2,120.80</th>
                                </tr>
                                <tr>
                                    <td> Homeowner's Insurance Premium ( 12 mo) to Insurance Co, </td>
                                    <td contentEditable>$1,209.96</td>
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                </tr>
                                <tr>
                                    <td> Mortgage Insurance Premium ( mo.)</td>
                                    <td contentEditable> </td>
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                </tr>
                                <tr>
                                    <td>Prepaid Interest ($ 1744 per day form 4/15/13 to 5/1/13)</td>
                                    <td contentEditable>$279,04 </td>
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                  </tr>
                                  <tr>
                                    <td>PropertyTaxes ( 6 mo) toAnyCounty USA </td>
                                    <td contentEditable>$631.90 </td>
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                    <td contentEditable></td>  
                                  </tr>
                                  <tr>
                                  <th className="title">G Initial Escrow Payment at Closing </th>
                                    <th className="title align-title" contentEditable>$412.25</th>
                                  </tr>
                                  <tr>
                                      <td> Horneowner's Insurance S 100,83 per month for 2 mo, </td>
                                      <td contentEditable>$201,66</td>
                                      <td contentEditable></td>  
                                      <td contentEditable></td>  
                                      <td contentEditable></td>  
                                      <td contentEditable></td>  
                                  </tr>
                                  <tr>
                                      <td> Mortgage Insurance per month for mo.  </td>
                                     
                                  </tr>
                                  <tr>
                                      <td>Property Taxes $105,30 per month for 2 mo,  </td>
                                      <td contentEditable>$210,60</td>
                                      <td contentEditable></td>  
                                      <td contentEditable></td>  
                                      <td contentEditable></td>  
                                      <td contentEditable></td>  
                                  </tr>
                                  <tr>
                                      <td>Aggregate Adjustment </td>
                                      <td contentEditable>-0.01</td>
                                      <td contentEditable></td>  
                                      <td contentEditable></td>  
                                      <td contentEditable></td>  
                                      <td contentEditable></td>  
                                  </tr>
                                  <tr>
                                      <th className="title">H. Other</th>
                                      <th className="title align-title" contentEditable>$2,400.00 </th>
                                  </tr>
                                    <tr>
                                   <td> HOA Capital Contribution to HOA Acre Inc</td>
                                   <td contentEditable>$500,00</td>
                                   <td contentEditable></td>  
                                   <td contentEditable></td>  
                                   <td contentEditable></td>  
                                   <td contentEditable></td>  
                                    </tr>
                                    <tr>
                                   <td>HOA Processing Fee to HOA Acre Inc.</td>
                                   <td contentEditable>$150,00 </td>
                                   <td contentEditable></td>  
                                   <td contentEditable></td>  
                                   <td contentEditable></td>  
                                   <td contentEditable></td>  

                                    </tr>
                                    <tr>
                                   <td>Home Inspection Fee to Engineers Inc. </td>
                                   <td contentEditable>$750,00 </td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                   <td contentEditable>$750,00</td>
                                   <td contentEditable></td>
                                    </tr>
                                    <tr>
                                   <td> Home Warranty Fee to XVZ Warranty Inc, </td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                   <td contentEditable>$450.00</td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                    </tr>
                                    <tr>
                                   <td>Real Estate Commision to Alpha Real Estate Broker</td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                   <td contentEditable>$5,700.00</td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                    </tr>
                                    <tr>
                                   <td>Real Estate Commisiion  to Omega Real Estate Broker </td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                   <td contentEditable>$5,700.00</td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                    </tr>
                                    <tr>
                                   <td> Title-Owner's Title Insurance (optional) to Epiilon Title Co.</td>
                                   <td contentEditable>$1,000,00 </td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                    </tr>
                                    <tr>
                                        <th className="title">I TOTAL OTHER COSTS (Borrower-Paid) </th>
                                        <th contentEditable className="title align-title">$5,018.05</th>
                                    </tr>
                                    <tr>
                                        <td >OtherCoihSubtotali (E + F + G + H) </td>
                                        <td contentEditable>$5,018.05</td>
                                        <td contentEditable></td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                   <td contentEditable></td>
                                    </tr>
                                    <tr>
                                        <th className="title">J. TOTAL CLOSING COSTS (Borrower-Paid)</th>
                                        <th className="title align-title" contentEditable>$9,712,10</th>
                                    </tr>
                                    <tr>
                                        <td>Closing Costs Subtotals (D + I)</td>
                                        <td contentEditable>$9,682,30</td>
                                        <td contentEditable>$29,80</td>
                                        <td contentEditable>$12900.00</td>
                                        <td contentEditable>$750.00</td>
                                        <td contentEditable>$405.00</td>
                                    </tr>
                                    <tr>
                                        <td>lender Credits</td>
                                        <td contentEditable></td>
                                        <td contentEditable></td>
                                        <td contentEditable></td>
                                        <td contentEditable></td>
                                        <td contentEditable></td>
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
export default CDsecondpage;
