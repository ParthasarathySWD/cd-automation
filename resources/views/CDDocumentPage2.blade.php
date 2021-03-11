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
            border-radius: 12px 12px 0px 0px; 
            width:180px; 
            padding-top:5px; 
            padding-left:10px;
            padding-bottom:2px;
            background-color: black;
            color: white;
            margin-top: 8px;
            font-size: 12px;
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
            font-size: 8px;
            width: 100%;
        }   
        
        #firstTd{
            border-left: none;
        }
        #lastTd{
            border-right: none;
        }
        .page-footer{
            font-size: 12px;
            text-align: justify;
            position: fixed;
            bottom:0;
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
                        
                        <thead class="thead">
                            <tr>
                                <th rowspan="2" style="border-right: 1px solid black;"><p class="theading mb-0">Loan Costs</p></th>
                                <th  class="text-center" colspan="2" style="border-right: 1px solid black;"><b>Borrower-Paid</b></th>
                                <th  class="text-center">Paid By</th>
                            </tr>
                            <tr>
                                <th class="text-center">At Closing</th>
                                <th class="text-center" style="border-right: 1px solid black;">Before Closing</th>
                                <th class="text-center">Others</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td id="firstTd"><b>A. Origination Charges</b></td>
                                <td  class="text-center" colspan="2"></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">01 % of Loan Amount(Points)</td>
                                <td></td>
                                <td class="text-left">$123.12</td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd" id="firstTd">02 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">03 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">04</td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            
                            <tr>
                                <td id="firstTd"><b>B. Services Borrower Did Not Shop For</b></td>
                                <td  class="text-center" colspan="2"><b>$3,970.64</b></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">01 Flood Determination Fee     to Archwell</td>
                                <td  class="text-right">$18.00</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">02 Mortage Insurance       to FHA</td>
                                <td  class="text-right">$3147.39</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">03 Tax Related Service Fee     to Archwell</td>
                                <td  class="text-right">$85.00</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">04 Title - Lender's Title Insurance    to Sourcepoint Fulfillment Service</td>
                                <td  class="text-right">$370.25</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">05 Title - Settlement/Closing Fee      to Sourcepoint Fulfillment Service</td>
                                <td  class="text-right">$350.00</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd"><b>C. Services Borrower Did Shop For </b></td>
                                <td  class="text-center" colspan="2"></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">01 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">02 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">03 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">04 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">05 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd"><b>D. TOTAL LOAN COSTS (Borrower-Paid)</b></td>
                                <td  class="text-center" colspan="2"><b>$3,970.64</b></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">Loan Costs Subtotals (A+ B + C)</td>
                                <td  class="text-right">$3970.64</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>

                            <tr >
                                <td  colspan="4" style="border-left: none; border-right: none;" ><p class="theading mb-0">Other Costs</p></td>
                            </tr>
                            
                            <tr>
                                <td id="firstTd"><b>E. Taxes and Other Government Fees</b></td>
                                <td  class="text-center" colspan="2"><b>$361.00</b></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">01 Recording Fees      Deed:       Mortgage:   $361.00</td>
                                <td  class="text-right">$3970.64</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">02 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr><tr>
                                <td id="firstTd"><b>F. Prepaids</b></td>
                                <td  class="text-center" colspan="2"><b>$273.79</b></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">01  Homeowner's Insurance Premium ( mo.) </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">02 Mortgage Insurance Premium ( mo.).</td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">03 Prepaid Interest ($14.41 per day from 8/13/20 to 9/1/20)</td>
                                <td  class="text-right">$273.79</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">04  Property Taxes ( mo.)</td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">05 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd"><b>G. Initial Escrow Payment at Closing</b></td>
                                <td  class="text-center" colspan="2"><b>$2,193.25</b></td>
                                <td id="lastTd"></td>
                            </tr>   
                            <tr>
                                <td id="firstTd">01  Homeowner's Insurance $166.66 per month for 10 mo. </td>
                                <td  class="text-right">$1,666.60</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">02 Mortgage Insurance per month for mo.</td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">03 Property Taxes $231.08 per month for 4 mo.</td>
                                <td  class="text-right">$924.32</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">04  </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">05 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">06 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">07 Aggregate Adjustment  </td>
                                <td  class="text-right">$-397.67</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd"><b>H. Other</b></td>
                                <td  class="text-center" colspan="2"></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">01  </td>
                                <td  class="text-right"></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">02 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">03 </td>
                                <td  class="text-right"></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">04  </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">05 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">06 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">07 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">08 </td>
                                <td></td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd"><b>I. TOTAL OTHER COSTS (Borrower-Paid)</b></td>
                                <td  class="text-center" colspan="2"><b>$2,828.04</b></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">Other Costs Subtotals (E + F + G + H)</td>
                                <td  class="text-right">$2,828.04</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td colspan="4" style="border-left: none; border-right: none;"></td>
                            </tr>
                            <tr>
                                <td id="firstTd"><b>J. TOTAL CLOSING COSTS (Borrower-Paid)</b></td>
                                <td  class="text-center" colspan="2"><b>$4,545.70</b></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">Closing Costs Subtotals (D + I)</td>
                                <td  class="text-right">$6,798.68</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>
                            <tr>
                                <td id="firstTd">Lender Credits </td>
                                <td class="text-right">-$2,252.98</td>
                                <td></td>
                                <td id="lastTd"></td>
                            </tr>

                        </tbody>
                    </table>
                    <footer class="page-footer">
                        <span class="float-left">18566.1031 CLOSING DISCLOSURE</span> <span class="float-right">PAGE 2 OF 5 · LOAN ID #0116000464</span>
                    </footer>
 </body>
</html>