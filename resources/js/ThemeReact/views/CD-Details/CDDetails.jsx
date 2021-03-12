import React from 'react';

function CDDetails(){
return(
<div>                    <div class="intro-y flex items-center mt-6">
    <h2 class="text-lg font-medium mr-auto">
        Closing Disclosure
    </h2>
</div>
<div className="grid grid-cols-12 gap-3 mt-3">
    <div className="intro-y col-span-12 lg:col-span-12">
        <div className="intro-y box p-5 pt-0">
            <div className="grid grid-cols-12 gap-3">
                {/* <div className="col-span-12 border-b border-gray-200">                         
                    <div class="nav nav-tabs flex-col sm:flex-row justify-center lg:justify-start" role="tablist"> 
                        <a data-toggle="tab" data-target="#cd_page_1" href="javascript:;" class="py-4 sm:mr-8 active" role="tab" aria-selected="true">Page 1</a> 
                        <a data-toggle="tab" data-target="#cd_page_2" href="javascript:;" class="py-4 sm:mr-8" role="tab" aria-selected="false">Page 2</a> 
                        <a data-toggle="tab" data-target="#cd_page_3" href="javascript:;" class="py-4 sm:mr-8" role="tab" aria-selected="false">Page 3</a> 
                        <a data-toggle="tab" data-target="#cd_page_4" href="javascript:;" class="py-4 sm:mr-8" role="tab" aria-selected="false">Page 4</a> 
                    </div>
                </div> */}
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
                                                <td><span className="change_input_field">07/31/2020 </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>Closing Date </label></td>
                                                <td><span className="change_input_field">08/08/2020 </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>Disbursement Date </label></td>
                                                <td><span className="change_input_field">08/13/2020  </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>Settlement Agent  </label></td>
                                                <td><span className="change_input_field">Sourcepoint Fulfillment <br/>Services, Inc. </span> </td>
                                            </tr>
                                            <tr>
                                                <td><label>File#  </label></td>
                                                <td><span className="change_input_field">T206369 </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>Property  </label></td>
                                                <td><span className="change_input_field">6823 Rene St <br/>Shawnee, KS 66216 </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>Estimated Prop. Value </label> </td>
                                                <td><span className="change_input_field">$200,000  </span></td>
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
                                                <td><span className="change_input_field">Kevin Kahlfeldt <br/>6823 Rene St <br/>Shawnee, KS 66216  </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>Lender </label></td>
                                                <td><span className="change_input_field">Freedom Mortgage Corporation  </span></td>
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
                                                <td><span className="change_input_field">27 yr. 4 mo.  </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>Purpose  </label></td>
                                                <td><span className="change_input_field">Refinance  </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>Product </label></td>
                                                <td><span className="change_input_field">Fixed Rate  </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>Loan Type </label> </td>
                                                <td>Conditional</td>
                                            </tr>
                                            <tr>
                                                <td><label>Loan ID# </label> </td>
                                                <td><span className="change_input_field">0116000464  </span></td>
                                            </tr>
                                            <tr>
                                                <td><label>MIC# </label></td>
                                                <td><span className="change_input_field">182-1492448-703</span></td>
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
                                                <td><h3>$182,998 </h3>  </td>
                                                <td><h3>No </h3>  </td>
                                            </tr>
                                            <tr>
                                                <td className="text-black">Interest Rate  </td>
                                                <td><h3>2.875%  </h3>  </td>
                                                <td><h3>No </h3>  </td>
                                            </tr>
                                            <tr>
                                                <td className="text-black">Monthly Principal & Interest<br/><small className="small">See Projected Payments below for your Estimated Total Monthly Payment </small>  </td>
                                                <td><h3>$806.20 </h3>  </td>
                                                <td><h3>No </h3>  </td>
                                            </tr>
                                            <tr>
                                                <td className="text-black">Prepayment Penalty</td>
                                                <td></td>
                                                <td>Does the loan have these features?<br/><h3>No</h3>  </td>
                                            </tr>
                                            <tr>
                                                <td className="text-black">Balloon Payment </td>
                                                <td></td>
                                                <td><h3>No</h3>  </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>   
                        {/* <div id="cd_page_2" class="tab-pane" role="tabpanel">Acc
                        </div>   
                        <div id="cd_page_3" class="tab-pane" role="tabpanel">act
                        </div>   
                        <div id="cd_page_4" class="tab-pane" role="tabpanel">task
                        </div>                         */}
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