import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/Table";
import "./CDDetails.css";
import * as Icon from 'react-feather';
import CDTab from "./CDTab.jsx";
import CDE from "../../../components/ContentEditable";


function CDsecondpage(props) {

    const handleChange = (e) => {
        console.log(e);
    };

    function clickPrevious(e){
        props.changeTab(1);
    }


    function clickNext(e){
        props.changeTab(3);
   }

    const [state, setstate] = useState({

        OriginationChargesBorrowerPaid: '',
        OriginationChargesSellerPaid: '',
        OriginationChargesPaidByOthers: '',
        BorrowerLoanAmountPointsAtClosing: '',
        BorrowerLoanAmountPointsBeforeClosing: '',
        SellerLoanAmountPointsAtClosing: '',
        SellerLoanAmountPointsBeforeClosing: '',
        LoanAmountPointsPaidByOthers: '',
        ApplicationFeeBorrowerAtClosing: '',
        ApplicationFeeBorrowerBeforeClosing: '',
        ApplicationFeeSellerAtClosing: '',
        ApplicationFeeSellerBeforeClosing: '',
        ApplicationFeePaidByOthers: '',
        UnderwritingFeeBorrowerAtClosing: '',
        UnderwritingFeeBorrowerBeforeClosing: '',
        UnderwritingFeeSellerAtClosing: '',
        UnderwritingFeeSellerBeforeClosing: '',
        UnderwritingFeePaidByOthers: '',
        ServiceBorrowerDidNotShopBorrowerPaid: '',
        ServiceBorrowerDidNotShopSellerrPaid: '',
        ServiceBorrowerDidNotShopPaidByOthers: '',
        AppraisalFeeBorrowerAtClosing: '',
        AppraisalFeeBorrowerBeforeClosing: '',
        AppraisalFeeSellerAtClosing: '',
        AppraisalFeeSellerBeforeClosing: '',
        AppraisalFeePaidByOthers: '',
        CreditReportFeeBorrowerAtClosing: '',
        CreditReportFeeBorrowerBeforeClosing: '',
        CreditReportFeeSellerAtClosing: '',
        CreditReportFeeSellerBeforeClosing: '',
        CreditReportFeePaidByOthers: '',
        FloodDeterminationFeeBorrowerAtClosing: '',
        FloodDeterminationFeeBorrowerBeforeClosing: '',
        FloodDeterminationFeeSellerAtClosing: '',
        FloodDeterminationFeeSellerBeforeClosing: '',
        FloodDeterminationFeePaidByOthers: '',
        FloodMonitoringFeeBorrowerAtClosing: '',
        FloodMonitoringFeeBorrowerBeforeClosing: '',
        FloodMonitoringFeeSellerAtClosing: '',
        FloodMonitoringFeeSellerBeforeClosing: '',
        FloodMonitoringFeePaidByOthers: '',
        TaxMonitoringFeeBorrowerAtClosing: '',
        TaxMonitoringFeeBorrowerBeforeClosing: '',
        TaxMonitoringFeeSellerAtClosing: '',
        TaxMonitoringFeeSellerBeforeClosing: '',
        TaxMonitoringFeePaidByOthers: '',
        TaxStatusReseachBorrowerAtClosing: '',
        TaxStatusReseachBorrowerBeforeClosing: '',
        TaxStatusReseachSellerAtClosing: '',
        TaxStatusReseachSellerBeforeClosing: '',
        TaxStatusReseachPaidByOthers: '',
        ServiceBorrowerDidNotShopBorrowerPaid: '',
        ServiceBorrowerDidNotShopSellerPaid: '',
        ServiceBorrowerDidNotShopPaidByOthers: '',
        PestInspectionFeeBorrowerAtClosing: '',
        PestInspectionFeeBorrowerBeforeClosing: '',
        PestInspectionFeeSellerAtClosing: '',
        PestInspectionFeeSellerBeforeClosing: '',
        PestInspectionFeePaidByOthers: '',
        SurveyFeeBorrowerAtClosing: '',
        SurveyFeeBorrowerBeforeClosing: '',
        SurveyFeeSellerAtClosing: '',
        SurveyFeeSellerBeforeClosing: '',
        SurveyFeePaidByOthers: '',
        TitlelnsuranceBinderBorrowerAtClosing: '',
        TitlelnsuranceBinderBorrowerBeforeClosing: '',
        TitlelnsuranceBinderSellerAtClosing: '',
        TitlelnsuranceBinderSellerBeforeClosing: '',
        TitlelnsuranceBinderPaidByOthers: '',
        LendersTitleInsuranceBorrowerAtClosing: '',
        LendersTitleInsuranceBorrowerBeforeClosing: '',
        LendersTitleInsuranceSellerAtClosing: '',
        LendersTitleInsuranceSellerBeforeClosing: '',
        LendersTitleInsurancePaidByOthers: '',
        SettlementAgentFeeBorrowerAtClosing: '',
        SettlementAgentFeeBorrowerBeforeClosing: '',
        SettlementAgentFeeSellerAtClosing: '',
        SettlementAgentFeeSellerBeforeClosing: '',
        SettlementAgentFeePaidByOthers: '',
        TitleSearchBorrowerAtClosing: '',
        TitleSearchBorrowerBeforeClosing: '',
        TitleSearchSellerAtClosing: '',
        TitleSearchSellerBeforeClosing: '',
        TitleSearchPaidByOthers: '',
        TotalLoanCostsBorrowerPaid: '',
        TotalLoanCostsSellerPaid: '',
        TotalLoanCostsPaidByOthers: '',
        LoanCostsSubtotalsBorrowerAtClosing: '',
        LoanCostsSubtotalsBorrowerBeforeClosing: '',
        LoanCostsSubtotalsSellerAtClosing: '',
        LoanCostsSubtotalsSellerBeforeClosing: '',
        LoanCostsSubtotalsPaidByOthers: '',
        TaxesandOtherGovernmentFeesBorrowerPaid: '',
        TaxesandOtherGovernmentFeesSellerPaid: '',
        TaxesandOtherGovernmentFeesPaidByOthers: '',
        RecordingFeesBorrowerAtClosing: '',
        RecordingFeesBorrowerBeforeClosing: '',
        RecordingFeesSellerAtClosing: '',
        RecordingFeesSellerBeforeClosing: '',
        RecordingFeesPaidByOthers: '',
        TransferTaxBorrowerAtClosing: '',
        TransferTaxBorrowerBeforeClosing: '',
        TransferTaxSellerAtClosing: '',
        TransferTaxSellerBeforeClosing: '',
        TransferTaxPaidByOthers: '',
        PrepaidsBorrowerPaid: '',
        PrepaidsSellerPaid: '',
        PrepaidsPaidByOthers: '',
        InsurancePremiumBorrowerAtClosing: '',
        InsurancePremiumBorrowerBeforeClosing: '',
        InsurancePremiumSellerAtClosing: '',
        InsurancePremiumSellerBeforeClosing: '',
        InsurancePremiumPaidByOthers: '',
        MortgageInsurancePremiumBorrowerAtClosing: '',
        MortgageInsurancePremiumBorrowerBeforeClosing: '',
        MortgageInsurancePremiumSellerAtClosing: '',
        MortgageInsurancePremiumSellerBeforeClosing: '',
        MortgageInsurancePremiumPaidByOthers: '',
        PrepaidInterestBorrowerAtClosing: '',
        PrepaidInterestBorrowerBeforeClosing: '',
        PrepaidInterestSellerAtClosing: '',
        PrepaidInterestSellerBeforeClosing: '',
        PrepaidInterestPaidByOthers: '',
        PrepaidPropertyTaxesBorrowerAtClosing: '',
        PrepaidPropertyTaxesBorrowerBeforeClosing: '',
        PrepaidPropertyTaxesSellerAtClosing: '',
        PrepaidPropertyTaxesSellerBeforeClosing: '',
        PrepaidPropertyTaxesPaidByOthers: '',
        InitialEscrowPaymentBorrowerPaid: '',
        InitialEscrowPaymentSellerPaid: '',
        InitialEscrowPaymentPaidByOthers: '',
        HomeownersInsuranceBorrowerAtClosing: '',
        HomeownersInsuranceBorrowerBeforeClosing: '',
        HomeownersInsuranceSellerAtClosing: '',
        HomeownersInsuranceBeforeClosing: '',
        HomeownersInsurancePaidByOthers: '',
        MortgagelnsuranceBorrowerAtClosing: '',
        MortgagelnsuranceBorrowerBeforeClosing: '',
        MortgagelnsuranceSellerAtClosing: '',
        MortgagelnsuranceSellerBeforeClosing: '',
        MortgagelnsurancePaidByOthers: '',
        EscrowPropertyTaxesBorrowerAtClosing: '',
        EscrowPropertyTaxesBeforeClosing: '',
        EscrowPropertyTaxesSellerAtClosing: '',
        EscrowPropertyTaxesBeforeClosing: '',
        EscrowPropertyTaxesPaidByOthers: '',
        AggregateAdjustmentBorrowerAtClosing: '',
        AggregateAdjustmentBorrowerBeforeClosing: '',
        AggregateAdjustmentSellerAtClosing: '',
        AggregateAdjustmentBeforeClosing: '',
        AggregateAdjustmentPaidByOthers: '',
        OtherBorrowerPaid: '',
        OtherSellerPaid: '',
        OtherPaidByOthers: '',
        HOACapitalContributionBorrowerAtClosing: '',
        HOACapitalContributionBorrowerBeforeClosing: '',
        HOACapitalContributionSellerAtClosing: '',
        HOACapitalContributionSellerBeforeClosing: '',
        HOACapitalContributionPaidByOthers: '',
        HOAProcessingFeeBorrowerAtClosing: '',
        HOAProcessingFeeBorrowerBeforeClosing: '',
        HOAProcessingFeeSellerAtClosing: '',
        HOAProcessingFeeSellerBeforeClosing: '',
        HOAProcessingFeePaidByOthers: '',
        HomelnspectionFeeBorrowerAtClosing: '',
        HomelnspectionFeeBorrowerBeforeClosing: '',
        HomelnspectionFeeSellerAtClosing: '',
        HomelnspectionFeeSellerBeforeClosing: '',
        HomelnspectionFeePaidByOthers: '',
        HomeWarrantyFeeBorrowerAtClosing: '',
        HomeWarrantyFeeBorrowerBeforeClosing: '',
        HomeWarrantyFeeSellerAtClosing: '',
        HomeWarrantyFeeSellerBeforeClosing: '',
        HomeWarrantyFeePaidByOthers: '',
        RealEstateCommisionToAlphaBorrowerAtClosing: '',
        RealEstateCommisionToAlphaBorrowerBeforeClosing: '',
        RealEstateCommisionToAlphaSellerAtClosing: '',
        RealEstateCommisionToAlphaSellerBeforeClosing: '',
        RealEstateCommisionToAlphaPaidByOthers: '',
        RealEstateCommisionToOmegaBorrowerAtClosing: '',
        RealEstateCommisionToOmegaBorrowerBeforeClosing: '',
        RealEstateCommisionToOmegaSellerAtClosing: '',
        RealEstateCommisionToOmegaSellerBeforeClosing: '',
        RealEstateCommisionToOmegaPaidByOthers: '',
        OwnersTitleInsuranceBorrowerAtClosing: '',
        OwnersTitleInsuranceBorrowerBeforeClosing: '',
        OwnersTitleInsuranceSellerAtClosing: '',
        OwnersTitleInsuranceSellerBeforeClosing: '',
        OwnersTitleInsurancePaidByOthers: '',
        TotalOtherCostsBorrowerPaid: '',
        TotalOtherCostsSellerPaid: '',
        TotalOtherCostsPaidByOthers: '',
        OtherCostSubtotalsBorrowerAtClosing: '',
        OtherCostSubtotalsBorrowerBeforeClosing: '',
        OtherCostSubtotalsSellerAtClosing: '',
        OtherCostSubtotalsSellerBeforeClosing: '',
        OtherCostSubtotalsPaidByOthers: '',
        TotalClosingCostsBorrowerPaid: '',
        TotalClosingCostsSellerPaid: '',
        TotalClosingCostsPaidByOthers: '',
        ClosingCostsSubtotalsBorrowerAtClosing: '',
        ClosingCostsSubtotalsBorrowerBeforeClosing: '',
        ClosingCostsSubtotalsSellerAtClosing: '',
        ClosingCostsSubtotalsSellerBeforeClosing: '',
        ClosingCostsSubtotalsPaidByOthers: '',
        LenderCreditsBorrowerAtClosing: '',
        LenderCreditsBorrowerBeforeClosing: '',
        LenderCreditsSellerAtClosing: '',
        LenderCreditsSellerBeforeClosing: '',
        LenderCreditsPaidByOthers: ''


    });
    return (
        <>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="header mt-3 mb-3">
                        <h5><b>Closing Cost Details</b></h5>
                    </div>
                    <div className="card">
                        <div className="row">
                            {/* <CDTab></CDTab> */}

                            <div className="col-lg-4 col-md-4 col-sm-4">
                                {/* <h5 className="font300 font-16 mb-3">Loan Costs</h5> */}
                            
                                <div className="overflow-x-auto"> 
                                    <table className="table table--sm"> 
                                        <thead> 
                                            <tr> 
                                                <th className="border border-l-0 dark:border-dark-5 whitespace-nowrap" rowspan="2" >Loan Costs</th> 
                                                <th className="border border-b-0 dark:border-dark-5 whitespace-nowrap text-center" colspan="2">Borrower-Paid</th> 
                                                <th className="border border-b-0 dark:border-dark-5 whitespace-nowrap text-center"  colspan="2">Seller-Paid</th> 
                                                <th className="border border-r-0 dark:border-dark-5 whitespace-nowrap text-center" >Paid By</th> 
                                            </tr>
                                            <tr>    
                                                <th className="border border-b-2 dark:border-dark-5 whitespace-nowrap" >At Closing</th>
                                                <th className="border border-b-2 dark:border-dark-5 whitespace-nowrap" >Before Closing</th>

                                                <th className="border border-b-2 dark:border-dark-5 whitespace-nowrap" >At Closing</th>
                                                <th className="border border-b-2 dark:border-dark-5 whitespace-nowrap" >Before Closing</th>

                                                <th className="border border-r-0 dark:border-dark-5 whitespace-nowrap text-center" >Others</th>
                                            </tr> 
                                        </thead> 
                                        <tbody> 
                                            

                                            <tr>
                                                <td className="border border-l-0 dark:border-dark-5 whitespace-nowrap">
                                                    A.Orgination Charge
                                                </td>
                                                <td className="border" colspan="2"><CDE className="change_input_field" html="$ 1,802.00" onChange={handleChange}/></td>
                                                <td className="border" colspan="2"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0 ">
                                                    {" "}
                                                    0.25 % of loanAmount(Points.)
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 405.00" onChange={handleChange}/>
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"> Application Fee </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 300.00" onChange={handleChange}/>
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"> Underwriting Fee</td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 1,097.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0 dark:border-dark-5 whitespace-nowrap">
                                                    B.Service Borrower Did Not Shop
                                                    For
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="$ 236.55" onChange={handleChange}/>
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0" >
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Appraisal Fee to John Smith
                                                    Appraisers Inc.{" "}
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 405.00" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    Credit Aepon Fee to Information
                                                    Inc.
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 29.80" onChange={handleChange}/>
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Flood Determination Fee to Info
                                                    Co.
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 20.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    Flood Monitoring Fee to Info Co.{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 31.75" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">TaxMonitoring Fee</td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 75.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">Tax Status Agent Fee</td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 80.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0  dark:border-dark-5 whitespace-nowrap" colspan="2">
                                                    C.Service Borrower Did Shop For
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="$ 2,655.50" onChange={handleChange}/>
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Pest lnspection fee to Pests Co.{" "}
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 405.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"> Survey Fee to Surveys Co. </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 29.80" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Title-lnsuranceBinder to Epsiloo
                                                    Title Co.{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 20.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Title - Lender's Title Insurance
                                                    to Epsilon title Co.{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 31.75" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Title-Settlement Agent Fee to
                                                    Epsilon Title Co.{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 75.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Title-Title Search to Epsilon
                                                    Title Co.{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 80.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0  dark:border-dark-5 whitespace-nowrap" colspan="2">
                                                    D. TOTAL LOAN COSTS
                                                    (Borrower.Paid){" "}
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="$ 4,694.05" onChange={handleChange}/>
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    Loan Costs Subtotals (A + B + C)
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 4,664.25" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 29.80" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                                <tr>
                                                    <td></td><td></td></tr>
                                            <tr>
                                                <td className="border border-l-0">Other Costs{" "}</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0  dark:border-dark-5 whitespace-nowrap" colspan="2">
                                                    E. taxes and Other Governnment
                                                    fees
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="$ 85.00" onChange={handleChange}/>
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Recording Fees Deed: $40.00
                                                    Morgage: $45.00{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 85.00" onChange={handleChange}/>
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"> TransferTax to state </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 950.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0  dark:border-dark-5 whitespace-nowrap" colspan="2">
                                                    F. Prepaids{" "}
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="$ 2,120.80" onChange={handleChange}/>
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Homeowner's Insurance Premium (
                                                    12 mo) to Insurance Co.{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 1,209.96" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Mortgage Insurance Premium (
                                                    mo.)
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    Prepaid Interest ($ 1744 per day
                                                    form 4/15/13 to 5/1/13)
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 279.04" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    PropertyTaxes ( 6 mo)
                                                    toAnyCounty USA{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 631.90" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0  dark:border-dark-5 whitespace-nowrap" colspan="2">
                                                    G. Initial Escrow Payment at
                                                    Closing{" "}
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="$ 412.25" onChange={handleChange}/>
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Homeowner's Insurance $ 100.83
                                                    per month for 2 mo.{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 201.66" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Mortgage Insurance per month for
                                                    mo.{" "}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Property Taxes $105.30 per month
                                                    for 2 mo.{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 210.60" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"> Aggregate Adjustment </td>
                                                <td className="border"><CDE className="change_input_field" html="-0.01" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0  dark:border-dark-5 whitespace-nowrap" colspan="2">H. Other</td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="$ 2,400.00" onChange={handleChange}/>
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    HOA Capital Contribution to HOA
                                                    Acre Inc{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 500.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    HOA Processing Fee to HOA Acre
                                                    Inc.
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 150.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Home Inspection Fee to Engineers
                                                    Inc.{" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 750.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 750.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Home Warranty Fee to XVZ
                                                    Warranty Inc.{" "}
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 450.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    Real Estate Commision to Alpha
                                                    Real Estate Broker
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 5,700.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    Real Estate Commisiion to Omega
                                                    Real Estate Broker{" "}
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 5,700.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    {" "}
                                                    Title-Owner's Title Insurance
                                                    (optional) to Epiilon Title Co.
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 1,000.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0  dark:border-dark-5 whitespace-nowrap" colspan="2">
                                                    I. TOTAL OTHER COSTS
                                                    (Borrower-Paid){" "}
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="$ 5,018.05" onChange={handleChange}/>
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0" >
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    OtherCostSubtotals (E + F + G +
                                                    H){" "}
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 5,018.05" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0  dark:border-dark-5 whitespace-nowrap" colspan="2">
                                                    J. TOTAL CLOSING COSTS
                                                    (Borrower-Paid)
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="$ 9,712.00" onChange={handleChange}/>
                                                </td>
                                                <td className="border" colspan="2">
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                                <td className="border border-r-0" >
                                                    <CDE className="change_input_field" html="" onChange={handleChange}/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">
                                                    Closing Costs Subtotals (D + I)
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 9,682.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 29.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 12,900.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border">
                                                    <CDE className="change_input_field" html="$ 750.00" onChange={handleChange}/>
                                                    
                                                </td>
                                                <td className="border border-r-0">
                                                    <CDE className="change_input_field" html="$ 405.00" onChange={handleChange}/>
                                                    
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="border border-l-0">Lender Credits</td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                                <td className="border border-r-0"><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            </tr> 
                                        </tbody> 
                                    </table> 
                                </div> 
                                <div className="col-span-12 lg:col-span-12 sm:col-span-3 mt-3">
                                    <button type="button" className="btn btn-xs btn-primary mr-2 ml-2 float-right btnNext active" onClick={clickNext}>Next<Icon.ArrowRight className="w-4 h-4"/></button>
                                    <button type="button" className="btn  btn-xs btn-danger float-left" onClick={clickPrevious}><Icon.ArrowLeft className="w-4 h-4"/>Previous</button>    
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default CDsecondpage;
