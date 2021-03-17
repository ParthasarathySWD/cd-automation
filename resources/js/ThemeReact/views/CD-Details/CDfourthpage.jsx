import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './CDDetails.css';
import CDTab from './CDTab.jsx';
import CDE from "../../../components/ContentEditable";
import * as Icon from 'react-feather';

function CDfourthpage(props) {

    const handleChange = (e) => {
        console.log(e);
    };

    const [state, setstate] = useState({
        
        Assumption: '',
        AssumptionAvaliable: '',
        DemandFeature: '',
        DemandFeatureAvaliable: '',
        NegativeAmortization: '',
        NegativeAmortizationSecond: '',
        NegativeAmortizationThird: '',
        PartialPayments: '',
        PartialPaymentsSecond: '',
        PartialPaymentsThird: '',
        EscrowAccount: '',
        EscrowedPropertyCostsoverYear1: '',
        NonEscrowedPropertyCostsoverYear1: '',
        InitialEscrowPayment: '',
        MonthlyEscrowPayment: '',
        EscrowActive: '',
        EscrowActiveTwo: '',
        EscrowActiveThree: '',
        NoEscrowOne: '',
        EscrowWaiverFee: '',
        

    });

    function clickPrevious(e){
        props.changeTab(3);
    }


    function clickNext(e){
        props.changeTab(5);
   }

        return(
         <>
         <div className="row clearfix">
           <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="header mt-3 mb-3">
                               <h5>Additional Information About This Loan <span className="change_input_field"></span></h5>
                            
                           </div>
                <div className="card"> 
                    <div className="row">
                   
                        {/* <CDTab></CDTab> */}

                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <h5 className="font300 font-16 mt-3 mb-3 pl-3">Loan Disclosures</h5>   

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="body">
                                <p>
                                <b>Assumption</b><br/>
                                If you sell or transfer this property to another person, your lender <br/>
                                <input type="checkbox"/> will allow,under certain conditions, this person to assume this<br/>
                                &nbsp; loan on the original terms,<br/>
                                <input type="checkbox"/> will not allow assumption of this loan on the original terms.
                                </p>
                                <p>
                                <b>Demand Feature</b><br/>
                                Your loan<br/>
                                <input type="checkbox"/> has a demand feature, which permits your lender to require early repayment of the loan, You should review your note for details. <br/>  
                                <input type="checkbox"/> does not have a demand feature. 
                                </p>
                                <p>
                                <b>Late Payment</b><br/>
                                If your payment is more than rs days late, your lender will charge a late fee of 5% cl the monthly principal and interest payment. 
                                </p>
                                <p>
                                <b>Negative Amortisation</b> (Increase in loan Amount) <br/>
                                Under your loan terms, you <br/>
                                <input type="checkbox"/> are scheduled to make monthly payments that do not pay all of the interest due that month.
                                 As a result, your loan amount will increase (negatively amortize), and your loan amount will likely become larger than your original loan amount.
                                 Increases in your Ioan amount lower the equity you have in this property. <br/>
                                <input type="checkbox"/> may have monthly payments that do not pay all of the interest due that month.
                                 If you do, your loan amount will increase(negatively amortize) and, as a result, your loan amount may become larger than your original loan amount.
                                 Increases in your Ioan amount lower the equity you have in this property. <br/>
                                <input type="checkbox"/> do not have a negative amortization feature.  
                                </p>
                                <p>
                                <b>Partial Payments</b><br/>
                                Your lender<br/>
                                <input type="checkbox"/> may accept payments that are less than the full amount due (partial payments) and apply them to your loan. <br/> 
                                <input type="checkbox"/> may hold them in a separate account until you pay the rest of the payment, and then apply the full payment to your loan. <br/> 
                                <input type="checkbox"/>  does not accept any partial payments. <br/> If this loan is sold, your new lender may/ have a different policy. 
                                </p>
                                <p>
                                <b>Security Interest</b><br/>
                                You are granting a security interest in 456 Somewhere Ave., Anytown, ST 12345
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                                You may lose this property if you do not make your payments or satisfy other obligations for this loan.  
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="body">
                                <p>
                                <b>Escrow Account</b><br/>
                                For now, your loan<br/>
                                <input type="checkbox"/> your loan  will have an escrow account (also called an impound" or"trust" account) to pay the property costs listed below, 
                                Without an escrow account, you will Pit/ them directly, possibly in one or two large payments a year, Your lender may be liable for penalties and interest
                                for failing to make a payment. 
                                </p>
                                <>
                                <Table >
                                    <thead>
                                        <tr>
                                            <td>Escrow</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>
                                                Escrowed <br/>
                                                Property Costs. <br/>
                                                over Year 1 
                                                </p>
                                            </td>
                                            <td><CDE className="change_input_field" html="$ 8,054.00" onChange={handleChange}/></td>  
                                            <td  ><CDE className="change_input_field" html="<p>
                                                Estimated total amount over year 1 for <br/>
                                                your escrowed property cons: <br/>
                                                Homeowner Insurance <br/>
                                                Property taxes <br/>
                                                </p>" onChange={handleChange}/>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                Non-Escrowed <br/>
                                                Property Costs <br/>
                                                over Year 1
                                                </p>
                                            </td>
                                            <td><CDE className="change_input_field" html="$ 1,900.00" onChange={handleChange}/></td>  
                                            <td ><CDE className="change_input_field" html="<p>
                                                Estimated total amount over year 1 for <br/> 
                                                your non-escrowed property costs: <br/>
                                                Homeowner's  Association Dues: <br/> <br/>
                                                You may have other property costs.
                                                </p>" onChange={handleChange}/>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                Initial Escrow <br/>
                                                Payment 
                                                </p>
                                            </td>
                                            <td><CDE className="change_input_field" html="$ 412.25" onChange={handleChange}/></td>  
                                            <td ><CDE className="change_input_field" html="<p>
                                                A cushion for the escrow account you <br/>
                                                pay at closing. See Section G on page 2.
                                                </p>" onChange={handleChange}/>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                Monthly Escrow <br/>
                                                Payment 
                                                </p>
                                            </td>
                                            <td><CDE className="change_input_field" html="$ 206.13" onChange={handleChange}/></td>     
                                            <td ><CDE className="change_input_field" html="<p>
                                                The amount included in your total <br/>
                                                monthly payment
                                                </p>" onChange={handleChange}/>
                                                <p>
                                                The amount included in your total <br/>
                                                monthly payment
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>  
                                </>
                                <p>
                                <input type="checkbox"/> will not have an escrow account because  
                                 <input type="checkbox"/> you declined it  
                                <input type="checkbox"/> your lender does not offer one, You must directly pay your property costs, such as taxes and homeowner"s insurance.
                                 Contact your lender to ask if your loan can have an escrow account. 
                                </p>
                                <>
                                <Table >
                                    <thead>
                                        <tr>
                                            <td>No Escrow</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <p>
                                                Estimated <br/>
                                                Property Costs. <br/>
                                                over Year 1 
                                                </p>
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="<p>
                                                Estimated total amount over year 1. You <br/>
                                                must pay these costs directly, possibly <br/>
                                                in one or two large payments a year, 
                                                </p>" onChange={handleChange}/>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                Escrow Waiver Fee 
                                                </p>
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                    </tbody>
                                </Table>  
                                </>
                                <p>
                                <b>In the future</b> <br/>
                                Your property costs may change and, as a result, your escrow payment may change.
                                 You may be able to cancel your escrow account, but if you do, you must Pit/ your property costs directly, 
                                 If you fail to pay your property taxes, your state or local government may( 1) impose fines and penalties or (2) place a tax lien on this property, 
                                 If you fail to pay any of your property costs, your lender may/ (1 ) add the amounts to your loan balance, 
                                 (2) add an escrow account to your loan, or (3) require you to pay for property insurance that the lender buys on your behalf
                                 (which Likely would cost more and provide fewer benefits than what you could buy on your own, 
                                </p>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-12 lg:col-span-12 sm:col-span-3 mt-3">
     <button type="button" className="btn btn-xs btn-primary mr-2 ml-2 float-right btnNext active" onClick={clickNext}>Next<Icon.ArrowRight className="w-4 h-4"/></button>
     <button type="submit" className="btn btn-xs btn-primary mr-2 ml-2 float-right">Submit<Icon.Navigation className="w-4 h-4"/></button>
     <button type="submit" className="btn  btn-xs btn-danger float-left" onClick={clickPrevious}><Icon.ArrowLeft className="w-4 h-4"/>Previous</button>    
       </div>
        </>
        
       )
}
export default CDfourthpage;
