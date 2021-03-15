import React from "react";
import Table from "react-bootstrap/Table";
import "./CDDetails.css";
import CDTab from "./CDTab.jsx";
import CDE from "../../../components/ContentEditable";


function CDsecondpage(props) {
    const handleChange = (e) => {
        console.log(e);
    };
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
                        <h5>Closing Cost Details</h5>
                    </div>
                    <div className="card">
                        <div className="row">
                            {/* <CDTab></CDTab> */}

                            <div className="col-lg-4 col-md-4 col-sm-4">
                                {/* <h5 className="font300 font-16 mb-3">Loan Costs</h5> */}
                                <Table>
                                    <tr>
                                        <th></th>
                                        <th className="borrower">
                                            <p className="title">
                                                Borrower-Paid
                                            </p>
                                        </th>
                                        <th className="seller">
                                            <p className="title">Seller-Paid</p>
                                        </th>
                                        <th className="paid">
                                            <p className="title">
                                                Paid by others
                                            </p>
                                        </th>
                                    </tr>
                                </Table>
                                <Table>
                                    <thead>
                                        <tr>
                                            <th className="title">
                                                Loan Costs
                                            </th>

                                            <th>At Closing</th>
                                            <th>Before Closing</th>

                                            <th>At Closing &nbsp;</th>
                                            <th>Before Closing</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th className="title">
                                                A.Orgination Charge
                                            </th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 1,802.00" onChange={handleChange}/> 
                                            </th>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                0.25 % of loanAmount(Points.)
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 405.00" onChange={handleChange}/>
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td> Application Fee </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 300.00" onChange={handleChange}/>
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td> Underwriting Fee</td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 1,097.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th className="title">
                                                B.Service Borrower Did Not Shop
                                                For
                                            </th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 236.55" onChange={handleChange}/>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Appraisal Fee to John Smith
                                                Appraisers Inc.{" "}
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 405.00" onChange={handleChange}/>
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Credit Aepon Fee to Information
                                                Inc.
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 29.80" onChange={handleChange}/>
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Flood Determination Fee to Info
                                                Co.
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 20.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Flood Monitoring Fee to Info Co.{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 31.75" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>TaxMonitoring Fee</td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 75.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>Tax Status Agent Fee</td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 80.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th className="title">
                                                C.Service Borrower Did Shop For
                                            </th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 236.55" onChange={handleChange}/>
                                                
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Pest lnspection fee to Pests Co.{" "}
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 405.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td> Survey Fee to Surveys Co. </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 29.80" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Title-lnsuranceBinder to Epsiloo
                                                Title Co.{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 20.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Title - Lender's Title Insurance
                                                to Epsilon title Co.{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 31.75" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Title-Settlement Agent Fee to
                                                Epsilon Title Co.{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 75.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Title-Title Search to Epsilon
                                                Title Co.{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 80.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th className="title">
                                                D. TOTAL LOAN COSTS
                                                (Borrower.Paid){" "}
                                            </th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 4,694.05" onChange={handleChange}/>
                                                
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                Loan Costs Subtotals (A + B + C)
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 4,664.25" onChange={handleChange}/>
                                                
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 29.80" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <div className="title">
                                            Other Costs{" "}
                                        </div>
                                        <tr>
                                            <th className="title">
                                                E. taxes and Other Governnment
                                                fees
                                            </th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 85.00" onChange={handleChange}/>
                                                
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Recording Fees Deed: $40.00
                                                Morgage: $45.00{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 85.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td> TransferTax to state </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 950.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th className="title">
                                                F. Prepaids{" "}
                                            </th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 2,120.80" onChange={handleChange}/>
                                                
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Homeowner's Insurance Premium (
                                                12 mo) to Insurance Co.{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 1,209.96" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Mortgage Insurance Premium (
                                                mo.)
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Prepaid Interest ($ 1744 per day
                                                form 4/15/13 to 5/1/13)
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 279.04" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                PropertyTaxes ( 6 mo)
                                                toAnyCounty USA{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 631.90" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th className="title">
                                                G. Initial Escrow Payment at
                                                Closing{" "}
                                            </th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 412.25" onChange={handleChange}/>
                                                
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Homeowner's Insurance $ 100.83
                                                per month for 2 mo.{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 201.66" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Mortgage Insurance per month for
                                                mo.{" "}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Property Taxes $105.30 per month
                                                for 2 mo.{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 210.60" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td> Aggregate Adjustment </td>
                                            <td ><CDE className="change_input_field" html="-0.01" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th className="title">H. Other</th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 2,400.00" onChange={handleChange}/>
                                                
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                HOA Capital Contribution to HOA
                                                Acre Inc{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 500.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                HOA Processing Fee to HOA Acre
                                                Inc.
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 150.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Home Inspection Fee to Engineers
                                                Inc.{" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 750.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 750.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Home Warranty Fee to XVZ
                                                Warranty Inc.{" "}
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 450.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Real Estate Commision to Alpha
                                                Real Estate Broker
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 5,700.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Real Estate Commisiion to Omega
                                                Real Estate Broker{" "}
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 5,700.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                {" "}
                                                Title-Owner's Title Insurance
                                                (optional) to Epiilon Title Co.
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 1,000.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th className="title">
                                                I. TOTAL OTHER COSTS
                                                (Borrower-Paid){" "}
                                            </th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 5,018.05" onChange={handleChange}/>
                                                
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                OtherCostSubtotals (E + F + G +
                                                H){" "}
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 5,018.05" onChange={handleChange}/>
                                                
                                            </td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                        <tr>
                                            <th className="title">
                                                J. TOTAL CLOSING COSTS
                                                (Borrower-Paid)
                                            </th>
                                            <th className="title align-title">
                                                <CDE className="change_input_field" html="$ 9,712.00" onChange={handleChange}/>
                                                
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>
                                                Closing Costs Subtotals (D + I)
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 9,682.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 29.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 12,900.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 750.00" onChange={handleChange}/>
                                                
                                            </td>
                                            <td>
                                                <CDE className="change_input_field" html="$ 405.00" onChange={handleChange}/>
                                                
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>lender Credits</td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                            <td ><CDE className="change_input_field" html="" onChange={handleChange}/></td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className="col-span-12 lg:col-span-12 sm:col-span-3 mt-3">
                                    <button
                                        type="submit"
                                        className="btn btn-xs btn-primary mr-2 ml-2 float-right"
                                    >
                                        <a
                                            className="active"
                                            data-toggle="tab"
                                            data-target="#PageThree"
                                        >
                                            Next
                                        </a>
                                    </button>
                                    {/* <button
                                        type="submit"
                                        className="btn btn-xs btn-primary mr-2 ml-2 float-right"
                                    >
                                        Submit
                                    </button> */}
                                    <button
                                        type="submit"
                                        className="btn  btn-xs btn-danger float-left"
                                    >
                                        <a
                                            data-toggle="tab"
                                            data-target="#PageOne"
                                        >
                                            Previous
                                        </a>
                                    </button>
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
