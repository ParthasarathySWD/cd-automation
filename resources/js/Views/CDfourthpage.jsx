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
function CDfourthpage(props) {
    

        return(
         <>
         <div className="row clearfix">
           <div className="col-lg-12 col-md-12 col-sm-12">
                           <div className="header mt-3 mb-3">
                               <h5>Additional Information About This Loan <span className="change_input_field"></span></h5>
                            
                           </div>
                <div className="card"> 
                    <div className="row">
                   
                        <CDTab></CDTab>

                        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                            <h5 className="font300 font-16 mt-3 mb-3 pl-3">Loan Disclosures</h5>   

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="body">
                                <p>
                                <b>Assumption</b><br/>
                                If you sell or transfer this property to an other person, your lender <br/>
                                <input type="checkbox"/>  will allow, under certain conditions, this person to assume this<br/>
                                &nbsp; loan on the original terms,<br/>
                                <input type="checkbox"/> will not allow assumption of this loan on the original terms,
                                </p>
                                <p>
                                <b>Demand feature</b><br/>
                                Your loan<br/>
                                <input type="checkbox"/> has a demand feature, which permits your lender to require early<br/>
                                &nbsp; repayment of the loan, You should review your note for details.<br/>
                                <input type="checkbox"/> does not have a demand feature. 
                                </p>
                                <p>
                                <b>Late Payment</b><br/>
                                If your payment is more than 15 days late, your lender will charge a<br/>
                                late fee of 5% the monthly prindpal and interest payment
                                </p>
                                <p>
                                <b>Negative Amortisation</b> (Increase in l oan Amount) <br/>
                                Under your loan terms, you <br/>
                                <input type="checkbox"/> are scheduled to make monthly payments that do not pay all of <br/>
                                &nbsp; the interest due that month. As a result, yourloa n amount will <br/>
                                &nbsp; increase (negatively amortize), and your loan amount will likely <br/>
                                &nbsp; bee om e larger than your origi na I loan amount. Increases in your <br/>
                                &nbsp; I oan amount lower the equity you have in this prope tty, <br/>
                                <input type="checkbox"/> mitf have monthly payments that do not pay all of the interest <br/>
                                &nbsp; due that month. If you do, your loan amount will increase <br/>
                                &nbsp; (negatively amortize1 and, as a result, your loan amount mitf <br/>
                                &nbsp; bee om e larger than your origi na I loan amount. Increases in your <br/>
                                &nbsp; I oan amount lower the equity you have in this prope tty, <br/>
                                <input type="checkbox"/> do not have a negative amortization feature. 
                                </p>
                                <p>
                                <b>Partial Payments</b><br/>
                                Your lender<br/>
                                <input type="checkbox"/> mitf accept pitfments that are less than the full amount due<br/>
                                &nbsp; (partial payments) and apply them to your loan,<br/>
                                <input type="checkbox"/> mitf hold them in a separate account until you pay the rest of the<br/>
                                &nbsp; payment, and then apply the full payment to your loan,<br/>
                                <input type="checkbox"/> does not accept any partial pitfments,<br/>
                                If this loan is sold, your new lend er mil/ have a different pol icy,<br/>
                                </p>
                                <p>
                                <b>Security Interest</b><br/>
                                You are granting a security interest in<br/>
                                4 56 Somewhere Ave., Anytown, ST J ll4S <br/>
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
                                <br/>
                                <br/>
                                <br/>
                                You mitf lose this property if you do not makeywr payments or <br/>
                                satisfy other obi igat ions for this loan. 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="body">
                                <p>
                                <b>Escrow Account</b><br/>
                                For now,. your loan<br/>
                                <input type="checkbox"/> will have an esaow account (also called an•impound"or"trust"<br/>
                                &nbsp; account) to pay the property costs listed below, Without an escrow<br/>
                                &nbsp; account, you wwld Pit/ them directly, possibly in one or two large<br/>
                                &nbsp; payments a year, Your lerder mitf be liable for penalties and <br/>
                                &nbsp; interest for failing to make a payment.
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
                                                Property Cos.ts. <br/>
                                                over Year 1 
                                                </p>
                                            </td>
                                            <td>$8,054.00</td>
                                            <td>
                                                <p>
                                                Estimated total amountO\Efyear 1 for <br/>
                                                your escrowed property cons: <br/>
                                                Homeowner\ hu11ana <br/>
                                                Ptcp,rtyT""" 
                                                </p>
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
                                            <td>$ 1,900.00</td>
                                            <td>
                                                <p>
                                                Estimatedtotalamountcwryear 1 for <br/>
                                                your non-escrtWed propel costs: <br/>
                                                Homeowner\ Association ues <br/>
                                                <br/>
                                                You may ha\e other property costs..
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                Initial Escrow <br/>
                                                Payment 
                                                </p>
                                            </td>
                                            <td>$ 412.25</td>
                                            <td>
                                                <p>
                                                A cushion for the escrow account you <br/>
                                                pay at closing. See Section G on page 2.
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                Monthly Escrow <br/>
                                                Payment 
                                                </p>
                                            </td>
                                            <td>$206.13</td>
                                            <td>
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
                                <input type="checkbox"/> will not have an escrow account because <input type="checkbox"/> you declined it <input type="checkbox"/> your
                                &nbsp;lender does not offer one, 'lbu must directly pitf your prc:perty <br/>
                                &nbsp;costs, such as taxes and homeowner"s insurance. Contact your <br/>
                                &nbsp;lender to ask if your loan can have an escrow account.
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
                                            <td></td>
                                            <td>
                                                <p>
                                                Estimated total amount over year 1. You <br/>
                                                must pay these costs directly, possibly <br/>
                                                in one or two large payments a year, 
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>
                                                Escrow Waiver Fee 
                                                </p>
                                            </td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </Table>  
                                </>
                                <p>
                                <b>In the future</b> <br/>
                                Ywr property costs may change and, as a result, your escrow payment mitf change. You may be able to cancel your escrow account, <br/>
                                but if you do, you must Pit/ your property costs directly, If you fail <br/>
                                to Pit/ your property taxes, your state or local govemm ent mitf ( 1) <br/>
                                impose fines and penalties or (2) place a tax lien on th is property, If <br/>
                                you fai I to pay a "'I of your property costs, your lender m it/ (1 ) add <br/>
                                the amounts to your loan balance, (2) add an esaow account to your <br/>
                                loan, or (3) require you to pay for property insu ranee that the I ender <br/>
                                buys on your behal( which Ii kely would cost more and pro\/i de fewer <br/>
                                benefits than what you cou Id buy on your own,
                                </p>        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
       )
}
export default CDfourthpage;
