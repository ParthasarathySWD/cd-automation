import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './CDDetails.css';
import CDTab from './CDTab.jsx';   
import CDE from "../../../components/ContentEditable";
import * as Icon from 'react-feather';

const handleChange = (e) => {
    console.log(e);
};
function CDfifthpage(props) {
    function clickPrevious(e){
        props.changeTab(4);
    }


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
                                    <td><CDE className="change_input_field" html="$ 285,803.36" onChange={handleChange}/></td>   
                                </tr>
                                <tr>
                                    <td><b>Finance Charge.</b><p> The dollar amount the loan will<br/>
                                        cost you. </p> </td>
                                        <td><CDE className="change_input_field" html="$ 118,830.27" onChange={handleChange}/></td>    
                                </tr>
                                <tr>
                                    <td><b>Amount Financed.</b><p> The loan amount available after<br/>
                                    paying your upfront finance charge. </p> </td>
                                    <td><CDE className="change_input_field" html="$ 162,000.00" onChange={handleChange}/></td>   
                                </tr>
                                <tr>
                                    <td><b>Annual Percent.age Rate (APR).</b><p> Your costs over<br/>
                                    the loan term expressed as a rate. This is not your<br/>
                                    interest rate,</p></td>
                                    
                                        <td ><CDE className="change_input_field" html="4.174%" onChange={handleChange}/></td>
                                </tr>
                                <tr>
                                    <td><b>Total lnterest Percent.age (TIP).The total amount</b><p><br/>
                                of interest that you will pay aver the loan term as a<br/>
                                percentage of your loan amount.</p> </td>
                                        <td ><CDE className="change_input_field" html="69.46%" onChange={handleChange}/></td>
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
              <td ><CDE className="change_input_field" html="Ficus Bank " onChange={handleChange}/></td>
               <td></td>
              <td ><CDE className="change_input_field" html="Omega Real Estate <br/>Broker Inc" onChange={handleChange}/></td>
              <td ><CDE className="change_input_field" html="Alpha Real Estate <br/>Broker Inc" onChange={handleChange}/></td>
              <td ><CDE className="change_input_field" html="Epsilon Title Co." onChange={handleChange}/></td>
          </tr>
          <tr>
               <td>Address</td>
                <td ><CDE className="change_input_field" html="4321 Random Blvd,
                Somecity, ST 12340" onChange={handleChange}/></td>
               <td></td>
               <td ><CDE className="change_input_field" html="789 LocalLane <br/>Sometow, ST 12345" onChange={handleChange}/></td>
               <td ><CDE className="change_input_field" html="98 7 Suburb Ct. <br/>Someplace, ST 12340 " onChange={handleChange}/></td>
               <td ><CDE className="change_input_field" html="123 Commerce Pl. <br/>  Somecity,ST 12344" onChange={handleChange}/></td>
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
                <td ><CDE className="change_input_field" html="Z765416" onChange={handleChange}/> </td>
                <td ><CDE className="change_input_field" html="Z61456" onChange={handleChange}/></td>
                <td ><CDE className="change_input_field" html="Z61616" onChange={handleChange}/> </td>
          </tr>
          <tr>
                 <td>Contact</td>
                <td ><CDE className="change_input_field" html="Joe Smith" onChange={handleChange}/></td>
                <td></td>
                <td ><CDE className="change_input_field" html="Samuel Green " onChange={handleChange}/></td>
                <td ><CDE className="change_input_field" html="Joseph Cain" onChange={handleChange}/></td>
                <td ><CDE className="change_input_field" html="Sarah Arnold  " onChange={handleChange}/></td>
          </tr>
          <tr>
                 <td>Contact NMLS 10</td>
                <td ><CDE className="change_input_field" html="12345 " onChange={handleChange}/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
          </tr>
          <tr>
                 <td>Contact ST Lecense ID</td>
                <td> </td>
                <td></td>
                <td ><CDE className="change_input_field" html="P16415 " onChange={handleChange}/></td>
                <td ><CDE className="change_input_field" html="P51461 " onChange={handleChange}/> </td>
                <td ><CDE className="change_input_field" html="PT1234 " onChange={handleChange}/></td>
          </tr>
          <tr>
                 <td>Email</td>
                <td ><CDE className="change_input_field" html=" joesmith@ficusbank.com " onChange={handleChange}/></td>
                <td></td>
                <td ><CDE className="change_input_field" html="sam@omegare.biz " onChange={handleChange}/></td>
                <td ><CDE className="change_input_field" html="joe@alphare.biz" onChange={handleChange}/></td>
                <td ><CDE className="change_input_field" html="sarah@epsilontitle.com" onChange={handleChange}/></td>
          </tr>
          <tr>
                 <td>Phone</td>
                <td ><CDE className="change_input_field" html=" 123456-7890 " onChange={handleChange}/></td>
                <td></td>
                <td ><CDE className="change_input_field" html=" 123-555-1717  " onChange={handleChange}/></td>
                <td ><CDE className="change_input_field" html="321-555-7171 " onChange={handleChange}/></td>
                <td ><CDE className="change_input_field" html="1987-555-4321 " onChange={handleChange}/></td>
          </tr>
  </tbody>
</Table>
<div className="title">
Conform Receipt
</div>
<p className="align">By signing, you are onlyconfirming that you have received this form, You do not have to accept this loan because you have signed or received
this form.</p>
</div>
<div className="col-span-12 lg:col-span-12 sm:col-span-3 mt-3">
{/* <button type="button" className="btn btn-xs btn-primary mr-2 ml-2 float-right btnNext active" onClick={clickNext}>Next<Icon.ArrowRight className="w-4 h-4"/></button> */}
 <button type="submit" className="btn btn-xs btn-primary mr-2 ml-2 float-right">Submit<Icon.Navigation className="w-4 h-4"/></button>
  <button type="submit" className="btn  btn-xs btn-danger float-left" onClick={clickPrevious}><Icon.ArrowLeft className="w-4 h-4"/>Previous</button>    
                                                </div>
            </div>
           </div>
        </div>
       </div>     
                    
                

            
        </>
        
       )
}
export default CDfifthpage;
