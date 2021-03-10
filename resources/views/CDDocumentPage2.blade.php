<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1{
            font-size: 18px;
        }
        .Heading
        {
            font-size: 18px;
        }
        .theading{
            border-radius: 8px 8px 0px 0px; 
            width:165px; 
            padding:2px;
            background-color: black;
            color: white;
        }
        td{
            border: 1px solid black;
            /* border-top: 1px solid black;
            border-bottom: 1px solid black; */
            width: auto;
            
        }
        table{
            border-top: 1px solid black;
            border-bottom: 1px solid black;
            border-left: none;
            border-right: none;
            /* border: 1px solid black; */
            font-size: 10px;
            width: 100%;
        }   
        
        
    </style>
</head>
<body>
        <div class="Heading mb-0">
            <h1>Closing Costs Details </h5>
        </div>
    <!-- <div class="Page2">
       
        <div class="LoanCostsTableRow">
            <span class="LoanCostsTableCol6">
                Loan Costs
            </span>
            <span class="LoanCostsTableCol3">
                Borrower-Paid <br> At Closing &nbsp; Before Closing
            </span>
            <span class="LoanCostsTableCol2">
                Paid By Others
            </span>
        </div><br>
        <div class="LoanCostsTableRow">
            
        </div><br>        
    </div> -->
    
    
           
                    <table>
                        
                        <thead>
                            <tr>
                                <th><p class="theading mb-0">Loan Costs</p></th>
                                <th class="text-center" colspan="2">Borrower-Paid <br> At Closing Before Closing</th>
                                <th class="text-center">Paid By <br> Others</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A. Origination Charges</td>
                                <td  class="text-center" colspan="2"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>01 % of Loan Amount(Points)</td>
                                <td></td>
                                <td class="text-left">$123.12</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>02 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>03 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            
                            <tr>
                                <td>B. Services Borrower Did Not Shop For</td>
                                <td  class="text-center" colspan="2">$3,970.64</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>01 Flood Determination Fee</td>
                                <td  class="text-right">$18.00</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>02 Mortage Insurance</td>
                                <td  class="text-right">$3147.39</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>03 Tax Related Service Fee</td>
                                <td  class="text-right">$85.00</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>04 Title - Lender's Title Insurance</td>
                                <td  class="text-right">$370.25</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>05 Title - Settlement/Closing Fee</td>
                                <td  class="text-right">$350.00</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>C. Services Borrower Did Shop For </td>
                                <td  class="text-center" colspan="2"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>01 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>02 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>03 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>04 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>05 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>D. TOTAL LOAN COSTS (Borrower-Paid)</td>
                                <td  class="text-center" colspan="2"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Loan Costs Subtotals (A+ B + C)</td>
                                <td  class="text-right">$3970.64</td>
                                <td></td>
                                <td></td>
                            </tr>

                            <tr >
                                <td  colspan="4"><p class="theading mb-0">Other Costs</p></td>
                            </tr>
                            
                            <tr>
                                <td>E. Taxes and Other Government Fees</td>
                                <td  class="text-center" colspan="2"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>01 Recording Fees</td>
                                <td  class="text-right">$3970.64</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>02 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr><tr>
                                <td>F. Prepaids</td>
                                <td  class="text-center" colspan="2">$273.79</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>01  Homeowner's Insurance Premium ( mo.) </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>02 Mortgage Insurance Premium ( mo.).</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>03 Prepaid Interest ($14.41 per day from 8/13/20 to 9/1/20)</td>
                                <td  class="text-right">$273.79</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>04  Property Taxes ( mo.)</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>05 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>G. Initial Escrow Payment at Closing</td>
                                <td  class="text-center" colspan="2">$2,193.25</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>01  Homeowner's Insurance $166.66 per month for 10 mo. </td>
                                <td  class="text-right">$1,666.60</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>02 Mortgage Insurance per month for mo.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>03 Property Taxes $231.08 per month for 4 mo.</td>
                                <td  class="text-right">$924.32</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>04  </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>05 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>06 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>07 Aggregate Adjustment  </td>
                                <td  class="text-right">$-397.67</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>G. Initial Escrow Payment at Closing</td>
                                <td  class="text-center" colspan="2">$2,193.25</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>01  Homeowner's Insurance $166.66 per month for 10 mo. </td>
                                <td  class="text-right">$1,666.60</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>02 Mortgage Insurance per month for mo.</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>03 Property Taxes $231.08 per month for 4 mo.</td>
                                <td  class="text-right">$924.32</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>04  </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>05 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>06 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>07 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>08 </td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>I. TOTAL OTHER COSTS (Borrower-Paid)</td>
                                <td  class="text-center" colspan="2">$2,828.04</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Other Costs Subtotals (E + F + G + H)</td>
                                <td  class="text-right">$2,828.04</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>J. TOTAL CLOSING COSTS (Borrower-Paid)</td>
                                <td  class="text-center" colspan="2">$4,54S.70</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Closing Costs Subtotals (D + I)</td>
                                <td  class="text-right">$6,798.68</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Lender Credits </td>
                                <td>-$2,252.98</td>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
 </body>
</html>