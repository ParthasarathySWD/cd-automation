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
            padding:none;
            border-bottom: 1px solid black;  
        }
        .theading{
            border-radius: 8px 8px 0px 0px;
            width:165px;
            padding-top:8px; 
            padding-left:10px;
            padding-bottom:2px;
            margin-top:10px;
            background-color: black;
            color: white;
            font-size: 12px;
        }
        .page4Table{
            
            font-size: 10px;
            width: 100%;
        }

        .page4Table thead{
            border-bottom: 1px solid black;
            font-size: 10px;
            width: 100%;
        }

        .escrowTable{
            border-top: 1px solid black; 
            border-bottom: 1px solid black;
            font-size: 10px;
            width: 100%;
            height: auto;
        }
        
        .escrowTable thead{
            border-bottom: 1px solid black;
        }
        .escrowTable tbody{
            border-top: 1px solid black; 
            border-bottom: 1px solid black;
            border-left: none;
            border-right: none;
        }
        .escrowTable td{
            border-top: 1px solid black; 
            border-bottom: 1px solid black;
            border-left: none;
            border-right: none;
            padding-left:2px;
            text-align: justify;
        }
        .noEscrowTable{
            border-top: 1px solid black; 
            border-bottom: 1px solid black;
            font-size: 10px;
            width: 100%;
            height: auto;
        }
        
        .noEscrowTable thead{
            border-bottom: 1px solid black;
        }
        .noEscrowTable tbody{
            border-top: 1px solid black; 
            border-bottom: 1px solid black;
            border-left: none;
            border-right: none;
        }
        .noEscrowTable td{
            border-top: 1px solid black; 
            border-bottom: 1px solid black;
            border-left: none;
            border-right: none;
            padding-left:2px;
            text-align: justify;
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
        <div class="Heading ">
            <h1>Additional Information About This Loan </h5>
        </div>
    
                    
                    <table class="page4Table">
                        
                        <thead>
                            <tr>
                                <th colspan="2"><p class="theading mb-0" >Loan Disclosures</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <p> <b>Assumption</b> <br>
                                     If you sell or transfer this property to another person, your lender <br>
                                     <input type="checkbox"> will allow, under certain conditions, this person to assume this <br>
                                     loan on the original terms. <br>
                                     <input type="checkbox"> will not allow assumption of this loan on the original terms.</p>

                                     <p>
                                        <b>Demand Feature</b> <br>
                                        Your loan <br>
                                        <input type="checkbox"> has a demand feature, which permits your lender to require early <br>
                                        repayment of the loan. You should review your note for details. <br>
                                        <input type="checkbox"> does not have a demand feature. 
                                     </p>

                                     <p>
                                        <b>Late Payment</b> <br>
                                        If your payment is more than 15 days late, your lender will charge a late <br>
                                        fee of 4% of the overdue payment of principal and interest.
                                     </p>

                                     <p>
                                        <b>Negative Amortization</b> (Increase in Loan Amount) <br>
                                        Under your loan terms, you <br>
                                        <input type="checkbox"> are scheduled to make monthly payments that do not pay all of <br>
                                        the interest due that month. As a result, your loan amount will <br>
                                        increase (negatively amortize), and your loan amount will likely <br>
                                        become larger than your original loan amount. Increases in your <br>
                                        loan amount lower the equity you have in this property. <br>
                                        <input type="checkbox"> may have monthly payments that do not pay all of the interest <br>
                                        due that month. If you do, your loan amount will increase <br>
                                        (negatively amortize), and, as a result, your loan amount may <br>
                                        become larger than your original loan amount. Increases in your <br>
                                        loan amount lower the equity you have in this property. <br>
                                        <input type="checkbox"> do not have a negative amortization feature. 
                                     </p>

                                     <p>
                                        <b>Partial Payments</b> <br>
                                        Your lender <br>
                                        <input type="checkbox"> may accept payments that are less than the full amount due <br>
                                        (partial payments) and apply them to your loan. <br>
                                        <input type="checkbox"> may hold them in a separate account until you pay the rest of the <br>
                                        payment, and then apply the full payment to your loan. <br>
                                        <input type="checkbox">  does not accept any partial payments. <br>
                                        If this loan is sold, your new lender may have a different policy.
                                     </p>

                                     <p>
                                        <b>Security Interest</b> <br>
                                        You are granting a security interest in <br>
                                        6823 Rene St, Shawnee, KS 66216 <br> 
                                        You may lose this property if you do not make your payments or <br>
                                        satisfy other obligations for this loan.
                                     </p>
                                </td>
                                <td>
                                    <p>
                                        <b>Escrow Account</b> <br>
                                        <b><i>For now</i></b>, your loan <br>
                                        <input type="checkbox"> will have an escrow account (also called an "impound" or "trust" <br>
                                        account) to pay the property costs listed below. Without an escrow <br>
                                        account, you would pay them directly, possibly in one or two large <br>
                                        payments a year. Your lender may be liable for penalties and interest <br>
                                        for failing to make a payment. 
                                    </p> <br>                            
                                    <p>
                                        <table class="escrowTable">
                                            <thead>
                                                <tr>
                                                    <th colspan="3"> Escrow </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style="border-right: 1px solid black;">Escrowed <br>
                                                    Property Costs <br>
                                                    over Year 1</td>
                                                    <td style="border-right: 1px solid black;">$6,195.60</td>
                                                    <td>Estimated total amount over year 1 for <br>
                                                    your escrowed property costs: <br>
                                                    Homeowners lnsurance,County Property <br>
                                                    Tax,Mortgage Insurance
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="border-right: 1px solid black;">Non-Escrowed <br>
                                                    Property Costs <br>
                                                    over Year 1 </td>
                                                    <td style="border-right: 1px solid black;">$99.96</td>
                                                    <td>Estimated total amount over year 1 for <br>
                                                    your non-escrowed property costs: <br>
                                                    Homeowners Association Dues <br>
                                                    <br><br>
                                                    You may have other property costs. <br></td>
                                                </tr>
                                                <tr>
                                                    <td style="border-right: 1px solid black;">Initial Escrow <br>
                                                    Payment</td>
                                                    <td style="border-right: 1px solid black;">$2,193.25 </td>
                                                    <td> A cushion for the escrow account you <br>
                                                    pay at closing. See Section G on page 2.</td>
                                                </tr>
                                                <tr>
                                                    <td style="border-right: 1px solid black;">Monthly Escrow <br>
                                                    Payment</td>
                                                    <td style="border-right: 1px solid black;">$516.30 </td>
                                                    <td>The amount included in your total <br>
                                                    monthly payment. </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </p><br>
                                    <p>
                                        <input type="checkbox"> will not have an escrow account because <input type="checkbox">  you declined it <input type="checkbox"> your <br>
                                        lender does not offer one. You must directly pay your property <br>
                                        costs, such as taxes and homeowner's insurance. Contact your <br>
                                        lender to ask if your loan can have an escrow account.
                                    </p><br>
                                    <p>
                                        <table class="noEscrowTable">
                                            <thead>
                                                <tr>
                                                    <th colspan="3">No Escrow </th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style="border-right: 1px solid black;">Estimated <br>
                                                    Property Costs <br>
                                                    over Year 1</td>
                                                    <td style="border-right: 1px solid black;">$0,00.00 </td>
                                                    <td>Estimated total amount over year 1. You <br>
                                                    must pay these costs directly, possibly <br>
                                                    in one or two large payments a year </td>
                                                </tr>
                                                <tr>
                                                    <td style="border-right: 1px solid black;">Escrow Waiver Fee</td>
                                                    <td style="border-right: 1px solid black;">$0,00.00</td>
                                                    <td></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </p><br>
                                    <p>
                                        <b><i>In the future,</i></b> <br>
                                        Your property costs may change ·and, as a result, your escrow pay <br>
                                        ment may change. You may be able to cancel your escrow account, <br>
                                        but if you do, you must pay your property costs directly. If you fail <br>
                                        to pay your property taxes, your state or local government may (1) <br>
                                        impose fines and penalties or (2) place a tax lien on this property. If <br>
                                        you fail to pay any of your property costs, your lender may (1) add <br>
                                        the amounts to your loan balance, (2) add an escrow account to your <br>
                                        loan, or (3) require you to pay for property insurance that the lender <br>
                                        buys on your behalf, which likely would cost more and provide fewer <br>
                                        benefits than what you could buy on your own.
                                    </p>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                    <footer class="page-footer">
                        <span class="float-left">18566.1031 CLOSING DISCLOSURE</span> <span class="float-right">PAGE 4 OF 5 · LOAN ID #0116000464</span>
                    </footer>
 </body>
</html>