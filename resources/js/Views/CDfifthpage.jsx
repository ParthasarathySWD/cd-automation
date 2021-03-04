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
function CDfifthpage(props) {
    

        return(
         <>
         <div className="row clearfix">
           <div className="col-lg-12 col-md-12 col-sm-12">
                           {/* <div className="header mt-3 mb-3">
                               <h5>Closing Cost Details</h5>
                           </div> */}
               <div className="card"> 
                   <div className="row">
                        {/* <CDTab></CDTab>    */}
                    </div>
                      
                       {/* <h5 className="font300 font-16 mb-3">Loan Costs</h5> */}
                    
                    <div className="row">
                       <div className="col-6">
                          <Table>
                            <div className="title">Loan Calculations </div>
                            <tbody>
                                <tr>
                                    <td><b>Total of Payments.</b><p>Total you will have paid after <br/>
                                        you make all payments of principal interest,<br/>
                                    mortgage insurance, and loan costs, as scheduled  </p></td>
                                    <td contentEditable>$285,803.36</td>
                                </tr>
                                <tr>
                                    <td><b>Finance Charge.</b><p> The dollar amount the loan will<br/>
                                        cost you. </p> </td>
                                    <td contentEditable>$118,830.27</td>
                                </tr>
                                <tr>
                                    <td><b>Amount Financed.</b><p> The loan amount available after<br/>
                                    paying your upfront finance charge. </p> </td>
                                    <td contentEditable>$162,000.00</td>
                                </tr>
                                <tr>
                                    <td><b>Annual Percent.age Rate (APR).</b><p> Your costs over<br/>
                                    the loan term expressed as a rate. This is not your<br/>
                                    interest rate,</p></td>
                                        <td contentEditable>4.174%</td>
                                </tr>
                                <tr>
                                    <td><b>Total lnterest Percent.age (TIP).The total amount</b><p><br/>
                                of interest that you will pay aver the loan term as a<br/>
                                percentage of your loan amount.</p> </td>
                                        <td contentEditable>69.46%</td>
                                </tr>
                                <tr>
                                    <td><b>Questions? </b>If you have questions about the<br/>
                                    loan terms or costs on this form, use the contact<br/>
                                    information below. To get more information<br/>
                                    or make a complaint, contact the Consumer<br/>
                                    Financial Protection Bureau at<br/>
                                    www.consumerfinance.gov/mortgage-closing 
                                      </td>
                                </tr>
                            </tbody>
                          </Table>
                       </div>
                      <div className="col-6">
                        <Table>
                            <div className="title">Loan Calculations </div>
                            <tbody>
                                <tr>
                                   <td><b>Appraisal</b>
                               <p>If the property was appraised for your loan, your lender is required to<br/>
                                give you a COPY at no additional cost at least 3 days before closing,<br/>
                                If you have not yet received it, please contact your lender at the<br/>
                                information listed below. </p></td>
                                </tr>
                                <tr>
                                    <td><b>Contract Details</b>
                           <p> See your note and security instrument for information about<br/>
                            • what happens if you fail to make your payments,<br/>
                            • what is a default on the loan,<br/>
                            • situations in which your lender can require early repayment of the loan,and<br/>
                            • the rules for making payments before they are due. </p></td>
                                </tr>
                                <tr>
                                    <td>
                                   <b> Liability after Foreclosure</b>
                                  <p>  If your lender forecloses on this property and the foreclosure does not<br/>
                                    cover the amount of unpaid balance on th is loan, <br/>
                            <input type="checkbox"/> state law may protect you from liability for the unpaid balance. If you<br/>
                            refinance or take on any additional debt on this property, you may<br/>
                            lose this protection and have to pay any debt remaining even after<br/>
                            foreclosure, You may want to consult a lawyer for more information,<br/>
                            <input type="checkbox"/>state law does not protect you from liability for the unpaid balance, </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td><b>Refinance</b>
                                   <p> Refinancing this loan will depend on your future financial situation,<br/>
                                    the property value, and market conditions. You may not be able to<br/>
                                    refinance this loan, </p> </td>
                                </tr>
                                <tr>
                                    <td><b>Tax Deducttons</b>
                                   <p> If you borrow more than this property is worth, the interest on the<br/>
                                    loan a mount above this property's fair market value is not deductible<br/>
                                    from your federal income taxes. You should consult a tax advisor for<br/>
                                    more information.</p> </td>
                                </tr>
                            </tbody>
                            
                          </Table>
                          </div>
                      <div className="col-8">
                          <Table className="align">
                         <thead>
                     <tr>
                      <th></th>
                      <th className="title">Lender</th>
                      <th className="title">Mortgage Broker</th>
                      <th className="title">RealEstate Broker(B)</th>
                      <th className="title">RealEstate Broker(S)</th>
                      <th className="title">Settlement Agent </th>
                 </tr>
                </thead>
             <tbody>
          <tr>
               <td>Name </td>
              <td contentEditable>Ficus Bank </td>
               <td></td>
              <td contentEditable>Omega Real Estate <br/>Broker Inc</td>
              <td contentEditable>Alpha Real Estate <br/>Broker Inc</td>
              <td contentEditable>Epsilon Title Co.</td>
          </tr>
          <tr>
               <td>Address</td>
                <td contentEditable>4321 Random Blvd,
                Somecity, ST 12340</td>
               <td></td>
               <td contentEditable>789 LocalLane <br/>Sometow, ST 12345</td>
               <td contentEditable>98 7 Suburb Ct. <br/>Someplace, ST 12340 </td>
               <td contentEditable>123 Commerce Pl. <br/>  Somecity,ST 12344</td>
         </tr>
        <tr>
                 <td>NMLSID </td>
                <td></td>
                <td></td>
                <td></td>
          </tr>
          <tr>
                 <td>ST LicenseID </td>
                <td></td>
                <td></td>
                <td contentEditable>Z765416 </td>
                <td contentEditable>Z61456</td>
                <td contentEditable>Z61616 </td>
          </tr>
          <tr>
                 <td>Contact</td>
                <td contentEditable>Joe Smith</td>
                <td></td>
                <td contentEditable>Samuel Green </td>
                <td contentEditable>Joseph Cain</td>
                <td contentEditable>Sarah Arnold  </td>
          </tr>
          <tr>
                 <td>Contact NMLS 10</td>
                <td contentEditable>12345 </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
          </tr>
          <tr>
                 <td>Contact ST Lecense ID</td>
                <td> </td>
                <td></td>
                <td contentEditable>P16415 </td>
                <td contentEditable>P51461 </td>
                <td contentEditable>PT1234</td>
          </tr>
          <tr>
                 <td>Email</td>
                <td contentEditable> joesmith@ficusbank.com </td>
                <td></td>
                <td contentEditable>sam@omegare.biz </td>
                <td contentEditable>joe@alphare.biz</td>
                <td contentEditable>sarah@epsilontitle.com</td>
          </tr>
          <tr>
                 <td>Phone</td>
                <td contentEditable> 123456-7890 </td>
                <td></td>
                <td contentEditable> 123-555-1717  </td>
                <td contentEditable>321-555-7171 </td>
                <td contentEditable>1987-555-4321 </td>
          </tr>
  </tbody>
</Table>
<div className="title">
Conform Receipt
</div>
<p className="align">By signing, you are onlyconfirming that you have received this form, You do not have to accept this loan because you have signed or received
this form.</p>
</div>

                          </div>
                       </div>
                    </div>
                   </div>     
                    
                

            
        </>
        
       )
}
export default CDfifthpage;
