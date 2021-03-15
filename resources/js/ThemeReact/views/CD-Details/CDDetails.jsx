import { Button } from 'bootstrap';
import React from 'react';
import PageTwo from './CDsecondpage';
import CDE from "../../../components/ContentEditable";
function CDDetails(){
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
                                                <td><CDE className="change_input_field" value="" />Sourcepoint Fulfillment <br/>Services, Inc.</td>
                                            </tr>
                                            <tr>
                                                <td><label>File#  </label></td>
                                                <td><CDE className="change_input_field" value="" />T206369</td>
                                            </tr>
                                            <tr>
                                                <td><label>Property  </label></td>
                                                <td><CDE className="change_input_field" html="6823 Rene St <br/>Shawnee, KS 66216"   onChange={handleChange}/></td>
                                            </tr>
                                            <tr>
                                                <td><label>Estimated Prop. Value </label> </td>
                                                <td>$<span contentEditable>200,000  </span></td>
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
                                                <td><CDE className="change_input_field" value="" />Kevin Kahlfeldt <br/>6823 Rene St <br/>Shawnee, KS 66216 </td>
                                            </tr>
                                            <tr>
                                                <td><label>Lender </label></td>
                                                <td><CDE className="change_input_field" value="" />Freedom Mortgage Corporation </td>
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
                                                <td><CDE className="change_input_field" value="" />27 yr. 4 mo. </td>
                                            </tr>
                                            <tr>
                                                <td><label>Purpose  </label></td>
                                                <td><CDE className="change_input_field" value="" />Refinance </td>
                                            </tr>
                                            <tr>
                                                <td><label>Product </label></td>
                                                <td><CDE className="change_input_field" value="" />Fixed Rate </td>
                                            </tr>
                                            <tr>
                                                <td><label>Loan Type </label> </td>
                                                <td contentEditable>Conditional</td>
                                            </tr>
                                            <tr>
                                                <td><label>Loan ID# </label> </td>
                                                <td><CDE className="change_input_field" value="" />0116000464 </td>
                                            </tr>
                                            <tr>
                                                <td><label>MIC# </label></td>
                                                <td><CDE className="change_input_field" value="" />182-1492448-70</td>
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
                                                <td >$<span contentEditable>182,998 </span>  </td>
                                                <td ><select>
                                                  <option value="volvo">YES</option>
                                                <option value="saab">NO</option>
                                                </select> </td>
                                            </tr>
                                            <tr>
                                                <td className="text-black">Interest Rate  </td>
                                                <td contentEditable><h3>2.875%  </h3>  </td>
                                                <td><select>
                                                  <option value="volvo">YES</option>
                                                <option value="saab">NO</option>
                                                </select>  </td>
                                            </tr>
                                            <tr>
                                                <td className="text-black">Monthly Principal & Interest<br/><small className="small">See Projected Payments below for your Estimated Total Monthly Payment </small>  </td>
                                                <td>$<span contentEditable>806.20 </span>  </td>
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
                                    
                                 <div className="col-span-12 lg:col-span-12 sm:col-span-3 mt-3">
                                 <button type="submit" className="btn btn-xs btn-primary mr-2 ml-2 float-right" ><a data-toggle="tab" data-target="#PageTow">Next</a></button>
                                <button type="submit" className="btn btn-xs btn-primary mr-2 ml-2 float-right">Submit</button>
                                {/* <button type="submit" className="btn  btn-xs btn-danger float-left">Previous</button>                                 */}
                            </div>
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
              

                           <div className="body">
                               <h5 className="font300 font-16 mb-3">Closing Information</h5>
                               <table className="table table-sm table-borderless closing-table">
                                <tbody>
                                    <tr>
                                        <td><label>Date Issued </label></td>
                                        <td><input type="date"/></td>
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
                                        
                                        <td>
                                            <ContentEditable html={html} onChange={handleContentEditableChange} />
                                        </td>
                                    </tr>
                                    <tr>    
                                        <td><label>File#  </label></td>
                                        <td contentEditable onChange={changedata}><span className="change_input_field">T206369 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Property  </label></td>
                                        <td contentEditable onChange={changedata}><span className="change_input_field">6823 Rene St <br/>Shawnee, KS 66216 </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Estimated Prop. Value </label> </td>
                                       <td>$<span contentEditable onChange={changedata}> 200,000</span></td>
                                    </tr>
                                </tbody>
                            </table>    
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">

                       <div className="body">
                           <h5 className="font300 font-16 mb-3">Transaction Information</h5>
                               <table className="table table-sm table-borderless closing-table">
                                <tbody>
                                    <tr>
                                        <td ><label>Borrower </label></td>
                                        <td contentEditable onChange={changedata}><span className="change_input_field">Kevin Kahlfeldt <br/>6823 Rene St <br/>Shawnee, KS 66216  </span></td>
                                    </tr>
                                    <tr>
                                        <td><label>Lender</label></td>
                                        <td contentEditable><span className="change_input_field">Freedom Mortgage Corporation  </span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <span></span>
                           
                       </div>
                       <div>
                           {/*  <Button id="PopoverLegacy" type="button">
                                <i className="fa fa-circle fa-sm text-danger" style={{boxShadow: '0px 0px 10px 0px rgba(255, 0, 0, 0.46)',fontSize:'12px',padding:'0px'}}></i>
                            </Button>
                            <UncontrolledPopover trigger="legacy" placement="right" target="PopoverLegacy">
                                <PopoverHeader>Templates</PopoverHeader>
                                <PopoverBody> {selectedVal.map((item) => {
                                    return <label><input type="checkbox"/><label className="p-1">{item}</label></label>
                                })}
                                </PopoverBody>
                            </UncontrolledPopover> */}
                        </div>
                     
                    </div>
                   <div className="col-lg-4 col-md-4 col-sm-4">

                       <div className="body">
                           <h5 className="font300 font-16 mb-3">Loan Information</h5>
                               <table className="table table-sm table-borderless closing-table">
                                    <tbody>
                                        <tr>
                                            <td><label>Loan Term </label> </td>
                                            <td contentEditable><span className="change_input_field">27 yr. 4 mo.  </span></td>
                                        </tr>
                                        <tr>
                                            <td><label>Purpose  </label></td>
                                            <td contentEditable><span className="change_input_field">Refinance  </span></td>
                                        </tr>
                                        <tr>
                                            <td><label>Product </label></td>
                                            <td contentEditable><span className="change_input_field">Fixed Rate  </span></td>
                                        </tr>
                                        <tr>
                                            <td><label>Loan Type </label> </td>
                                            <td contentEditable>Conditional</td>
                                        </tr>
                                        <tr>
                                            <td><label>Loan ID# </label> </td>
                                            <td contentEditable><span className="change_input_field">0116000464  </span></td>
                                        </tr>
                                        <tr>
                                            <td><label>MIC# </label></td>
                                            <td contentEditable><span className="change_input_field">182-1492448-703</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                   </div>

                   <div className="col-lg-12 col-md-12 col-sm-12">

                       <div className="body">
                            <table className="table table-sm loanterms-table">
                                <tbody>
                                    <tr>
                                        <td><h5>Loan Terms</h5></td>
                                        <td></td>
                                        <td>Can this amount increase after closing?</td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Loan Amount</td>
                                        <td >$<span contentEditable> 182,998</span></td>
                                        <td><select id="value">
                                            <option>YES</option>
                                            <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Interest Rate  </td>
                                        <td contentEditable><span className="change_input_field">2.875%</span></td>
                                        <td><select id="Value">
                                            <option>YES</option>
                                            <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Monthly Principal & Interest<br/><span className="small">See Projected Payments below for your
                                        Estimated Total Monthly Payment </span>  </td>
                                        <td >$<span contentEditable> 806.20</span></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Prepayment Penalty</td>
                                        <td></td>
                                        <td>Does the loan have these features?<br/><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select> </td>
                                    </tr>
                                    <tr>
                                        <td className="text-black">Balloon Payment </td>
                                        <td></td>
                                        <td><select id="Value">
                                        <option>YES</option>
                                        <option>NO</option>
                                        </select></td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
                   </div>
                   <div className="col-12">
                        <div className="size">
                            <div >
                                <h5>Projected Payments</h5>
                           </div>
                            <Table >
                                <thead>
                                    <tr>
                                        <th className="data-heading">Payment calculation </th>
                                        <th className="data-heading">Years 1-7 </th>
                                        <th className="data-heading">Year 8-30</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="data-heading">Principal & Interest </td>
                                        <td>$<span contentEditable> 761.78</span></td>
                                        <td>$<span contentEditable> 761 .78</span></td>
                                    </tr>
                                    <tr>
                                            <td className="data-heading">Mortgage Insurance </td>
                                            <td contentEditable>+ 82.35</td>
                                            <td contentEditable>+  -</td>
                                    </tr>
                                    <tr>
                                        <td className="data-heading">Estimated Escrow <br/><span className="small">Amount can increase over time </span></td>
                                            <td contentEditable>+ 206.13 </td>
                                            <td contentEditable>+ 206.13 </td>
                                    </tr>
                                    <tr>
                                        <td className="data-heading">Estlmatod Total Monthly Payment </td>
                                            <td >$<span className="change_input_field" contentEditable> 1,050.26</span></td>
                                            <td>$<span className="change_input_field" contentEditable> 967.91</span> </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className="data-heading"><label>Estimated Taxes, Insurance & Asessments <br/><span className="small">Amount can increase over time
                                                    See page4 for details </span></label></td>
                                        <td >$<span className="change_input_field" contentEditable> 356.13
                                                </span><p>a month</p></td>
                                        
                                         <td>
                                            <tr className="data-heading">This estimate Includes</tr>
                                                <tr><label>Property Taxes</label><input type="checkbox"/></tr>
                                            <tr><label>Homeowner's Insurance </label><input type="checkbox"/></tr> 
                                            <tr> <label>Other:Homeowner's Association Dues </label> <input type="checkbox"/></tr></td>
                                            <tr>
                                                <tr className="align data-heading"><p>In escrow? </p> </tr>
                                                <tr><select id="Value">
                                                                    <option>YES</option>
                                                                    <option>NO</option>
                                                                    </select></tr>
                                                <tr><select id="Value">
                                                                    <option>YES</option>
                                                                    <option>NO</option>
                                                                    </select></tr>
                                                <tr><select id="Value">
                                                                    <option>YES</option>
                                                                    <option>NO</option>
                                                                    </select></tr>
                                                </tr>
                                    </tr>
                                </tbody>
                            </Table>
    
                            <Table>
                                <h5>Costs at Closing </h5>
                                <tbody>
                                    <tr>
                                        <td className="data-heading">Closing Costs</td>
                                        <td>$<span contentEditable> 9,712.10</span> <br/><span className="change_input_field">Includes $4,694.05 in Loan Costs+ $5,018.05 in Other Costs- $0
                                            in lender Credits. See page 2 for details.</span></td>
                                    </tr>
                                    <tr>
                                        <td className="data-heading">Cash to Close</td>
                                        <td>$<span contentEditable> 14,147.26<br/></span><span className="change_input_field">Includes Closing Costs. See Calculating Cash to Close on page 3 for details. 
                                        </span></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


)
}
export default CDDetails;
