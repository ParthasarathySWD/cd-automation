import { Button } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import PageTwo from './CDsecondpage';
import CDE from "../../../components/ContentEditable";
import Table from "react-bootstrap/Table";
import * as Icon from 'react-feather';


function CDDetails(props){
    const handleChange = (e) => {
        console.log(e);
    };

    function clickNext(e){
        props.changeTab(2);
   }

    const [state, setstate] = useState({
        DateIssued: '',
        ClosingDate: '',
        DisbursementDate: '',
        SettlementAgent: '',
        File: '',
        Property: '',
        SalePrice: '',
        Borrower: '',
        Lender: '',
        LoanTerm: '',
        Purpose: '',
        Product: '',
        LoanType: '',
        LoanID: '',
        MIC: '',
        LoanAmount: '',
        LoanAmountAvaliable: '',
        InterestRate: '',
        InterestRateAvaliable: '',
        MonthlyPrincipalInterest: '',
        MonthlyPrincipalInterestAvaliable: '',
        PrepaymentPenalty: '',
        PrepaymentPenaltyAvaliable: '',
        BalloonPayment: '',
        BalloonPaymentAvaliable: ''


    });
return(
        <div>                    
            <div class="intro-y flex items-center mt-6">
            <h2 class="text-lg font-medium mr-auto">
                Closing Disclosure
            </h2>
        </div>
        <div className="grid grid-cols-12 gap-3 mt-3">
            <div className="intro-y col-span-12 lg:col-span-12">
                <div className="intro-y box p-5 pt-0">
                    <div className="grid grid-cols-12 gap-3">
                        
                        <div className="col-span-12"> 
                            <div class="intro-y tab-content mt-2">
                                <div id="cd_page_1" class="tab-pane active" role="tabpanel">
                                    <div className="grid grid-cols-12 gap-3">
                                        <div className="col-span-4 lg:col-span-4">
                                            <div class="flex flex-col sm:flex-row items-center">
                                                <h2 class="font-medium text-base mr-auto text-black mb-2">
                                                    Closing Information
                                                </h2>
                                            </div>
                                            <table className="table table-sm table-borderless closing-table">
                                                <tbody>
                                                    <tr>
                                                        <td><label>Date Issued </label></td>
                                                        <td><input type="date"/> </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Closing Date </label></td>
                                                        <td><input type="date"/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Disbursement Date </label></td>
                                                        <td><input type="date"/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Settlement Agent  </label></td>
                                                        <td><CDE className="change_input_field" html="Sourcepoint Fulfillment <br/>Services, Inc." onChange={handleChange}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>File#  </label></td>
                                                        <td><CDE className="change_input_field" html="T206369" onChange={handleChange}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Property  </label></td>
                                                        <td><CDE className="change_input_field" html="6823 Rene St <br/>Shawnee, KS 66216"   onChange={handleChange}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Estimated Prop. Value </label> </td>
                                                        <td><CDE className="change_input_field" html="$ 200,000" onChange={handleChange}/></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-span-4 lg:col-span-4">
                                            <div class="flex flex-col sm:flex-row items-center">
                                                <h2 class="font-medium text-base mr-auto text-black mb-2">
                                                    Transaction Information
                                                </h2>
                                            </div>
                                            <table className="table table-sm table-borderless closing-table">
                                                <tbody>
                                                    <tr>
                                                        <td><label>Borrower </label></td>
                                                        <td><CDE className="change_input_field" html="Kevin Kahlfeldt <br/>6823 Rene St <br/>Shawnee, KS 66216 " onChange={handleChange}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Lender </label></td>
                                                        <td><CDE className="change_input_field" html="Freedom Mortgage Corporation " onChange={handleChange}/></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="col-span-4 lg:col-span-4">
                                            <div class="flex flex-col sm:flex-row items-center">
                                                <h2 class="font-medium text-base mr-auto text-black mb-2">
                                                    Loan Information
                                                </h2>
                                            </div>
                                            <table className="table table-sm table-borderless closing-table">
                                                <tbody>
                                                    <tr>
                                                        <td><label>Loan Term </label> </td>
                                                        <td><CDE className="change_input_field" html="27 yr. 4 mo. " onChange={handleChange}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Purpose  </label></td>
                                                        <td><CDE className="change_input_field" html="Refinance " onChange={handleChange}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Product </label></td>
                                                        <td><CDE className="change_input_field" html="Fixed Rate " onChange={handleChange}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Loan Type </label> </td>
                                                        <td><CDE className="change_input_field" html="Conditional" onChange={handleChange}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>Loan ID# </label> </td>
                                                        <td><CDE className="change_input_field" html="0116000464 "onChange={handleChange}/></td>
                                                    </tr>
                                                    <tr>
                                                        <td><label>MIC# </label></td>
                                                        <td><CDE className="change_input_field" html="182-1492448-70" onChange={handleChange}/></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="col-span-12 lg:col-span-12">

                                            <table className="table table-sm loanterms-table">
                                                <tbody>
                                                    <tr>
                                                        <td className="text-black"><h3>Loan Terms</h3></td>
                                                        <td></td>
                                                        <td>Can this amount increase after closing?</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-black">Loan Amount  </td>
                                                        <td ><CDE className="change_input_field" html="$ 182,998 " onChange={handleChange}/></td>
                                                        <td ><select>
                                                        <option value="volvo">YES</option>
                                                        <option value="saab">NO</option>
                                                        </select> </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-black">Interest Rate  </td>
                                                        <td ><h3><CDE className="change_input_field" html="2.875% " onChange={handleChange}/> </h3>  </td>
                                                        <td><select>
                                                        <option value="volvo">YES</option>
                                                        <option value="saab">NO</option>
                                                        </select>  </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-black">Monthly Principal & Interest<br/><small className="small">See Projected Payments below for your Estimated Total Monthly Payment </small>  </td>
                                                        <td><CDE className="change_input_field" html="$ 806.20 " onChange={handleChange}/>  </td>
                                                        <td><select>
                                                        <option value="volvo">YES</option>
                                                        <option value="saab">NO</option>
                                                        </select>  </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-black">Prepayment Penalty</td>
                                                        <td></td>
                                                        <td>Does the loan have these features?<br/><select>
                                                        <option value="volvo">YES</option>
                                                        <option value="saab">NO</option>
                                                        </select></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-black">Balloon Payment </td>
                                                        <td></td>
                                                        <td><select>
                                                        <option value="volvo">YES</option>
                                                        <option value="saab">NO</option>
                                                        </select>  </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            
                                                                                            <button type="button" className="btn btn-xs btn-primary mr-2 ml-2 float-right btnNext active" onClick={clickNext}>Next<Icon.ArrowRight className="w-4 h-4"/></button>
                                                            <button type="submit" className="btn btn-xs btn-primary mr-2 ml-2 float-right">Submit<Icon.Navigation className="w-4 h-4"/></button>
                                                            {/* <button type="submit" className="btn  btn-xs btn-danger float-left">Previous<Icon.ArrowLeft className="w-4 h-4"/></button>     */}
                                                        </div>
                                        </div>
                                    </div>

                                </div>   
                                
                            </div>                        
                        </div>
                    

                                
                            </div>
                            
                        

                        
                        </div>
                    </div>
        </div>


    )
}
export default CDDetails;
