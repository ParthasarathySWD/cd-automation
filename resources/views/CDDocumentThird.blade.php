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

      .second
      {
          position:absolute;
          left:300px;
          top:-30px;
      }
      /* table, td, th {
  border: 1px solid black;
} */
      .firstalign
      {
        min-height: 300px;
        position:absolute;
        left:390px;
        bottom:-22px;
      } 
      table
      {
        width:100%;
      }
      td{
          font-size:10px;
          color:black;
          border-bottom:1px solid #c5c5c5;
         
      }
      .secondalign{
        position:absolute;
          left:600px;
      }
      th{
          font-size:12px;
         
      }
      h5{
          font-size:12px;   
        
      } 
     .bgstyle
     {
        border-radius: 8px 8px 0px 0px; 
        width:165px; 
        padding:2px;
     }
    h6
     {
        font-family: 'Lato-Italic';
     }
     .align
     {
        position:absolute;
          left:350px;
          top:300px;
         
     }
     /* .firsttable
     {
       position:absolute;
       right:10px;
     } */
     .secondtable
     {
      position:absolute;
          left:350px;
          top:200px;
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
<h5 class="bgstyle" style="position:absolute;top:4px;background-color:black;color:white;"><b>Calculating Cash to Close</b></h5>
<h5 style="float:right;position:absolute;top:2px;"><b>Use this table to see what has changed from your Loan Estimate</b></h5>
<hr style="background-color:black;">
<table> 
  <thead>
    <tr>
      <td></td>
      <td><b>Loan Estimate</b>	</td>
      <td><b>Final</b></td>
      <td><b>Did this Change?</b></td>
    </tr>
  </thead>
  <tbody>
    <tr style="width: 3%;">
      <td >Total Closing Costs(J)</td>
      <td>$8,054.00</td>
      <td>$9,712,10</td>
      <td><b>YES</b> &nbsp; See Total loan Cost(D) and Total Other Costs(I)</td>
    </tr>
    <tr style="width: 3%;">
      <td>Closing Costs Paid Before Closing</td>
      <td>$0</td>
      <td>$29,90</td>
      <td><b>YES</b> &nbsp; You paid these Closing Costs before closing.</td>
    </tr>
    <tr>
      <td>Closing Costs Financed (Paid fran your Loan Amount)</td>
      <td>$0</td>
      <td>$0</td>
      <td><b>NO</b></td>
    </tr>
    <tr>
      <td>Down Payment/Funds from Borrower</td>
      <td>$18,000.00</td>
      <td>$18,000.00</td>
      <td><b>NO</b></td>
    </tr>
    <tr>
      <td>Deposit</td>
      <td>$10,000.00</td>
      <td>$10,000.00</td>
      <td><b>NO</b></td>
    </tr>
    <tr>
      <td>Funds for Borrower</td>
      <td>$0</td>
      <td>$0</td>
      <td><b>NO</b></td>
    </tr>
    <tr>
      <td>Seller Credits</td>
      <td>$0</td>
      <td>$2,500.00</td>
      <td><b>NO</b> &nbsp;See Seller Credits in Section L</td>
    </tr>
    <tr>
      <td>Adjustment and Other Credits</td>
      <td>$0</td>
      <td>$1,035.04</td>
      <td><b>NO </b> &nbsp; See details in Section K and L</td>
    </tr>
    <tr>
      <td>Cash to Close</td>
      <td>$16,054,00</td>
      <td>$ 14,147,26</td>
    </tr>
  </tbody>
</table>
  <h5 class="bgstyle" style="background-color:black;color:white;"><b>Summaries of Transactions</b></h5>
    <h5 style="float:right;"><b style="font-size:12px">Use this table to See a summary of your transaction.</b> </h5>
<div class="row">
      <div class="col-6">
      <h5 style="font-size:12px"><b>BORROWER'S TRANSACTION</b></h5>
      <table class="">
        <thead>
          <tr>
          <!-- <th></th> -->
            <th colspan="2">K. Due from Borrower Closing</th>
            
            <th>$189,762.50</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">01
            Sale Price of Property</td>
            <td>$180,000,00</td>
          </tr>
          <tr>
            <td colspan="2">02
            Sale Price of Any Personal Property Included in Sale</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">03
            Closing Costs Paid at Closing (J) </td>
            <td>$9,682,30</td>
          </tr>
          <tr>
            <td colspan="2">04
            </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2"><b>Adjustments</b></td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">05</td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">06</td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">07</td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2"><b>Adjustments for Items Paid by Seller In Advance</b></td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">08 City/Town Taxes  to</td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">09 CountyTaxes  to</td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">10 Assessments   to</td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">11 HOA Dues 4/5/13 to 4/30/13  to</td>
            <td>$80,00</td>
          </tr>
          <tr>
            <td  colspan="2">12 </td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">13 </td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">14 </td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">15 </td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2"><b>L. Paid Already by or on Behalf of Borrower at Closing</b></td>
            <td>$175,615.04</td>
          </tr>
          <tr>
            <td  colspan="2">01 Deposit</td>
            <td>$10,000,00</td>
          </tr>
          <tr>
            <td  colspan="2">02 LoanAmount</td>
            <td>$162,000,00 </td>
          </tr>
          <tr>
            <td  colspan="2">03  Existing loan(s) Assumed or Taken Subject to</td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">04 </td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">05 Seller Credit</td>
            <td>$2,500,00</td>
          </tr>
          <tr>
            <td  colspan="2"><b>Other Credits </b> </td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">06  Rebate from Epsilon Title Co.</td>
            <td>$750,00</td>
          </tr>
          <tr>
            <td  colspan="2"> <b>Adjustments</b> </td>
            <td></td>
          </tr>
          <tr>
            <td  colspan="2">08 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">09 </td>
            <td></td>
          </tr>
          <!-- <tr>
            <td colspan="2">10 </td>
            <td></td>
          </tr> -->
          <tr>
            <td colspan="2"><b>Adjustments for Items Unpaid by Seller </b></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">10 City/Town Taxes 1/1/13 to 4/ 14/ 13</td>   
            <td>$365,04</td>
          </tr>
          <tr>
            <td colspan="2">11 CountyTaxes to</td>   
            <td></td>
          </tr>
          <tr>
            <td colspan="2">12 Assessments to</td>   
            <td></td>
          </tr>
        <!-- <tr>
            <td colspan="2">14 </td>   
            <td></td>
          </tr>  -->
          <tr>
            <td colspan="2"><b>CALCULATION</b></td>   
            <td></td>
          </tr>
          <tr>
            <td colspan="2">Total Due from Borrower at Closing (k)</td>
            <td>$189,762,30</td>
          </tr>
          <tr>
            <td colspan="2">Total Paid Aleady by oron Behalf of Borrower at Closing (L)</td>
            <td>-$175,615,04</td>
          </tr>
          <tr>
            <td colspan="2"><b>Cash to Close</b><input type="checkbox"><b>From</b><input type="checkbox"><b>To Borrower</b></td>
            <td><b>$14,147,26</b></td>
          </tr>
  </tbody>
    </table>
      </div>
      <div class="col-6 ">
      <table class="firstalign">
        <thead>
          <tr>
            <th colspan="2"><b>M.Due to Seller at Closing</b></th>
            <th>$180,080.00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2">01 Sale Price of Property</td>
            <td>$180,000,00</td>
          </tr>
          <tr>
            <td colspan="2">02 Sale Price of Any Personal Property Included in Sale</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">03 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">04 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">05 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">06 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">07 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">08 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2"><b>Adjustment for Items Paid by Seller In Advance </b></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">09 City/Town Taxes to</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">10 CountyTaxes to</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">11 Assessments to</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">12 HOA Dues 4/15/13 to 4/30/13</td>
            <td>$80,00</td>
          </tr>
          <tr>
            <td colspan="2">13 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">14 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">15 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">16 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2"><b>N.Due from Seller at Closing </b></td>
            <td>$1,15,665.04</td>
          </tr>
          <tr>
            <td colspan="2">01 Excess Deposit</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">02 Closing Costs Paid at Closing (J)</td>
            <td>$12,800.00</td>
          </tr>
          <tr>
            <td colspan="2">03</td>
            <td> Existing loan(s) Assumed or Tak.en Subject to</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">04 Payoff of First Mon gage Loan</td>
            <td>$100,00000</td>
          </tr>
          <tr>
            <td colspan="2">05 Payoff of Second Mortgage loan</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">06 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">07 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">08 Seller Credit</td>
            <td>$2,50000</td>
          </tr>
          <tr>
            <td colspan="2">09 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">10 </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">11 </td>
            <td></td>
          </tr>
          <!-- <tr>
            <td>12</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13</td>
            <td></td>
            <td></td>
          </tr> -->
          <tr>
            <td colspan="2"><b>Adjustment for Items Unpaid by Seller </b></td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">12 City/TownTaxes 1/1/13 to 4/4/13</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">13  CountyTaxes to</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">14 Assessments to</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2"> <b>CALCULATION </b> </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">Total Due to Seller at Closing (M)</td>
            <td>$180,09000</td>
            </tr>
          <tr>
            <td colspan="2">Total Due from Seller at Oosing (N)</td>
            <td>$115,665.04</td>
          </tr>
          <tr>
            <td colspan="2"><b>Cash to Close</b><input type="checkbox"><b>From</b><input type="checkbox"><b>To Borrower</b></td>
            <td><b>$ 64,414.96</b></td>
          </tr>
        </tbody>
    </table>
      </div>  
    </div>
    <footer class="page-footer">
        <span class="float-left">CLOSING DISCLOSURE</span> <span class="float-right">PAGE 3 OF 5 · LOAN ID #123-456789</span>
                    </footer>
 </body>
</html>