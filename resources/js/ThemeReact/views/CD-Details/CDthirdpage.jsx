import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './CDDetails.css';
import CDTab from './CDTab.jsx';
import CDE from "../../../components/ContentEditable";
import * as Icon from 'react-feather';


function CDthirdpage(props) {
    
    const handleChange = (e) => {
        console.log(e);
    };
    const [state, setstate] = useState({
        
        TotalClosingCostsLoanEstimate: '',
        TotalClosingCostsFinal: '',
        TotalClosingCostsDidChange: '',
        ClosingCostsPaidLoanEstimate: '',
        ClosingCostsPaidFinal: '',
        ClosingCostsPaidDidChange: '',
        ClosingCostsFinancedLoanEstimate: '',
        ClosingCostsFinancedFinal: '',
        ClosingCostsFinancedDidChange: '',
        DownPaymentLoanEstimate: '',
        DownPaymentFinal: '',
        DownPaymentDidChange: '',
        DepositLoanEstimate: '',
        DepositFinal: '',
        DepositDidChange: '',
        FundsLoanEstimate: '',
        FundsFinal: '',
        FundsDidChange: '',
        SellerCreditsLoanEstimate: '',
        SellerCreditsFinal: '',
        SellerCreditsDidChange: '',
        SellerCreditsLoanEstimate: '',
        SellerCreditsFinal: '',
        SellerCreditsDidChange: '',
        AdjustmentAndOtherCreditsLoanEstimate: '',
        AdjustmentAndOtherCreditsFinal: '',
        AdjustmentAndOtherCreditsDidChange: '',
        BorrowerClosingDue: '',
        SellerClosingDue: '',
        BorrowerSalePrice: '',
        SellerSalePrice: '',
        PersonalPropertySale: '',

    });
    function clickPrevious(e){
        props.changeTab(2);
    }


    function clickNext(e){
        props.changeTab(4);
   }
    

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
                                       <td><CDE className="change_input_field" html="$ 8,054.00" onChange={handleChange}/></td>
                                       <td><CDE className="change_input_field" html="$ 9,712,10" onChange={handleChange}/></td>
                                       <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select><br/><span className="change_input_field">.See Total loan Cost(D) and Total Other Costs(I)
                                            </span></td>
                                   </tr>
                                   <tr>
                                       <td>Closing Costs Paid Before Closing</td>
                                       <td><CDE className="change_input_field" html="$ 0" onChange={handleChange}/> </td>
                                       <td><CDE className="change_input_field" html="$ 29,90" onChange={handleChange}/></td>
                                       <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select><br/><span className="change_input_field">You paid these Closing Costs before closing.
                                            </span></td>
                                   </tr>
                                   <tr>
                                       <td>Closing Costs Financed <span className="change_input_field">(Paid fran your Loan Amount)
                                            </span></td>
                                        <td><CDE className="change_input_field" html="$ 0" onChange={handleChange}/> </td>
                                        <td><CDE className="change_input_field" html="$ 0" onChange={handleChange}/> </td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td>Down Payment/Funds from Borrower</td>
                                        <td><CDE className="change_input_field" html="$ 18,000.00" onChange={handleChange}/></td>
                                        <td><CDE className="change_input_field" html="$ 18,000.00" onChange={handleChange}/></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td>Deposit</td>
                                        <td><CDE className="change_input_field" html="$ 10.000.00" onChange={handleChange}/></td>
                                        <td><CDE className="change_input_field" html="$ 10.000.00" onChange={handleChange}/></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td>Funds for Borrower</td>
                                        <td><CDE className="change_input_field" html="$ 0" onChange={handleChange}/> </td>
                                        <td><CDE className="change_input_field" html="$ 0" onChange={handleChange}/> </td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td>Seller Credits</td>
                                        <td><CDE className="change_input_field" html="$ 0" onChange={handleChange}/> </td>
                                        <td><CDE className="change_input_field" html="$ 2,500.00" onChange={handleChange}/></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select><br/><span className="change_input_field">• See Seller Credits in Section L 
                                            </span></td>
                                    </tr>
                                    <tr>
                                        <td>Adjustment and Other Credits</td>
                                        <td><CDE className="change_input_field" html="$ 0" onChange={handleChange}/> </td>
                                        <td><CDE className="change_input_field" html="$ 1,035.04" onChange={handleChange}/></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select><br/><span className="change_input_field">See details in Section K and L 
                                            </span></td>
                                    </tr>
                                    <tr>
                                        <td>Cash to Close</td>
                                        <td><CDE className="change_input_field" html="$ 16,054.00" onChange={handleChange}/></td>
                                        <td><CDE className="change_input_field" html="$ 14,147.26" onChange={handleChange}/></td>
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
                                                   <th><CDE className="change_input_field" html="$ 189,762.50" onChange={handleChange}/></th>
                                                   </tr> 
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Sale Price of Property</td>
                                                    <td><CDE className="change_input_field" html="$ 180,000.00" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Sale Price of Any Personal I Property Included in Sale </td>
                                                </tr>
                                                <tr>
                                                    <td>Closing Costs Paid at Closing (J) </td>
                                                    <td><CDE className="change_input_field" html="$  9,682.30" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Adjustments</th>
                                                </tr>
                                                <tr>
                                                    <th ><CDE className="change_input_field" html="" onChange={handleChange}/></th>
                                                    <th ><CDE className="change_input_field" html="" onChange={handleChange}/></th>
                                                </tr>
                                                <tr>
                                                    <th ><CDE className="change_input_field" html="" onChange={handleChange}/></th>
                                                    <th ><CDE className="change_input_field" html="" onChange={handleChange}/></th>
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
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>CountyTaxes to </td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Assessments to</td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                <td>HOA Dues 4/5/13 to 4/30/13</td>
                                                <td><CDE className="change_input_field" html="$ 80.00" onChange={handleChange}/></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <td>L. Paid Already by or on Behalf of Borrower at Closing</td>
                                                    <td><CDE className="change_input_field" html="$  175,615.04" onChange={handleChange}/></td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Deposit</td>
                                                    <td><CDE className="change_input_field" html="$  10,000.00" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>LoanAmount</td>
                                                    <td><CDE className="change_input_field" html="$  162,000.00" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td> Existing loan(s) Assumed or Taken Subject to </td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td> </td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Seller Credit  </td>
                                                    <td><CDE className="change_input_field" html="$ 2,500.00" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Other Credit</th>
                                                </tr>
                                                <tr>
                                                    <td>Rebate from Epsilon Title Co.  </td>
                                                    <td><CDE className="change_input_field" html="$ 750.00" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <th>Adjustments</th>
                                                </tr>
                                                <tr>
                                                    <th ><CDE className="change_input_field" html="" onChange={handleChange}/></th>
                                                    <th ><CDE className="change_input_field" html="" onChange={handleChange}/></th>
                                                </tr>
                                                <tr>
                                                    <th ><CDE className="change_input_field" html="" onChange={handleChange}/></th>
                                                    <th ><CDE className="change_input_field" html="" onChange={handleChange}/></th>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <th>Adjustments for Items Unpaid by Seller </th>
                                                </tr>
                                                <tr>
                                                    <td>City/Town Taxes 1/1/13 to 4/ 14/ 13</td>
                                                    <td><CDE className="change_input_field" html="$  365.04" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>CountyTaxes to</td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Assessments to</td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <th className="title">CALCULATION</th>
                                                </tr>
                                                <tr>
                                                    <td>Total Due from Borrower at Closing (k)</td>
                                                    <td><CDE className="change_input_field" html="$  189,762.30" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Total Paid Aleady by oron Behalf of Borrower at Closing (L)</td>
                                                    <td><CDE className="change_input_field" html="$  175,615.04" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Cash to Close<input type="checkbox"/>From<input type="checkbox"/>To Borrower</td>
                                                    <td><CDE className="change_input_field" html="$  14,147.26" onChange={handleChange}/></td>
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
                                                    <td><CDE className="change_input_field" html="$  180,080.00" onChange={handleChange}/></td>
                                                </tr>
                                                
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Sale Price of Property</td>
                                                    <td><CDE className="change_input_field" html="$  180.000.00" onChange={handleChange}/></td>                                                   
                                                </tr>
                                                <tr>
                                                    <td>Sale Price of Any Personal Property Included in Sale</td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                   
                                                </tr>
                                                <tr>
                                                    <th>Adjustment for Items Paid by Seller In Advance</th>
                                                </tr>
                                                <tr>
                                                    <td>City/Town Taxes to</td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>CountyTaxes to</td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Assessments to </td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>HOA Dues 4/15/13 to 4/30/13</td>
                                                    <td><CDE className="change_input_field" html="$  80.00" onChange={handleChange}/></td>   
                                                </tr>
                                            </tbody>
                                        </Table>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>N, Due from Seller at Closing</th>
                                                    <td><CDE className="change_input_field" html="$ 115,665.04" onChange={handleChange}/> </td>  
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Excess Deposit </td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Closing Costs Paid at Closing (J)</td>
                                                    <td><CDE className="change_input_field" html="$  12,800.00" onChange={handleChange}/></td>  
                                                </tr>
                                                <tr>
                                                    <td>Existing loan(s) Assumed or Taken Subject to</td>
                                                    <td></td>
                                                </tr>
                                                <tr>
                                                    <td>Payoff of First Mon gage Loan </td>
                                                    <td><CDE className="change_input_field" html="$  100.000.00" onChange={handleChange}/></td>   
                                                </tr>
                                                <tr>
                                                    <td> Payoff of Second Mortgage loan</td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Seller Credit </td>
                                                    <td><CDE className="change_input_field" html="$  2,500.00" onChange={handleChange}/></td>     
                                                </tr>
                                                <tr>
                                                    <th>Adjustment for Items Unpaid by Seller</th>
                                                </tr>
                                                <tr>
                                                    <td>City/TownTaxes 1/1/13 to 4/4/13</td>
                                                    <td><CDE className="change_input_field" html="$  365.04" onChange={handleChange}/></td>     
                                                </tr>
                                                <tr>
                                                    <td> CountyTaxes to </td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <td>Assessments to</td>
                                                    <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                </tr>
                                                <tr>
                                                    <th className="title">CALCULATION</th>
                                                    <th></th>
                                                </tr>
                                                <tr>
                                                    <td>Total Due to Seller at Closing (M) </td>
                                                    <td><CDE className="change_input_field" html="$  180,09000" onChange={handleChange}/></td>   
                                                </tr>
                                                <tr>
                                                    <td>Total Due from Seller at Oosing (N)</td>
                                                    <td><CDE className="change_input_field" html="$  115,665.04" onChange={handleChange}/></td> 
                                                </tr>
                                                <tr>
                                                    <td>Cash to Close<input type="checkbox"/>From<input type="checkbox"/>To Borrower</td>
                                                    <td><CDE className="change_input_field" html="$  64,414.96" onChange={handleChange}/></td> 
                                                </tr>
                                            </tbody>
                                        </Table>
                                        
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-12 sm:col-span-3 mt-3">
                  <button type="button" className="btn btn-xs btn-primary mr-2 ml-2 float-right btnNext active" onClick={clickNext}>Next<Icon.ArrowRight className="w-4 h-4"/></button>
                  <button type="button" className="btn  btn-xs btn-danger float-left" onClick={clickPrevious}><Icon.ArrowLeft className="w-4 h-4"/>Previous</button>    
                 </div>
        
        </>
        
       )
}
export default CDthirdpage;
