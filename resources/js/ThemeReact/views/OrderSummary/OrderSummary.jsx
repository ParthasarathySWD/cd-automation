import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import OrderDocument from './OrderDocuments';
import OrderNotes from './OrderNotes';
import OrderCDPage from '../CD-Details/CDTabList';
import * as Icon from 'react-feather';
import './style.css';




function OrderSummary(props) {
    const OrderUID = props.match.params.id;
    return(
        <>
          <div className="grid grid-cols-12 gap-3 mt-5">
          <div className="intro-y col-span-12 lg:col-span-12">
          <div className=" box chat p-5">
          
            <div className="col-span-12 border-b border-gray-200">                         
              <div className="chat__tabs nav nav-tabs justify-center" role="tablist"> 
                <a data-toggle="tab" data-target="#LoanDetails" className="flex-1 py-2 rounded-md text-center active" role="tab" aria-selected="true">Loan Details</a> 
                <a data-toggle="tab" data-target="#DocumentTab" className="flex-1 py-2 rounded-md text-center" role="tab" aria-selected="false">Documents</a> 
                <a data-toggle="tab" data-target="#Notes" className="flex-1 py-2 rounded-md text-center" role="tab" aria-selected="false">Notes</a> 
                <a data-toggle="tab" data-target="#History" className="flex-1 py-2 rounded-md text-center" role="tab" aria-selected="false">History</a> 
              </div>
            </div>
            
            <div className="grid grid-cols-12 gap-3 mt-5">
              <div className="col-span-2">
              <div class="ml-4 mr-auto mt-3" style={{marginTop:'35px'}}>
                  <div class="font-medium">ATZ221086</div>
                      <div class="text-gray-600 text-xs mt-0.5">4 November 2020</div>
                  </div>
              </div>
              <div className="col-span-10">
              <div class="w-full py-6">
              <div class="flex">
                <div class="w-1/4">
                  <div class="relative mb-2">
                    <div class="w-10 h-10 mx-auto bg-blue-500 rounded-full text-lg text-white flex items-center">
                      <span class="text-center text-white w-full">
                        <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path class="heroicon-ui" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm14 8V5H5v6h14zm0 2H5v6h14v-6zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div class="text-xs text-center md:text-base">Order Initiated</div>
                </div>

                <div class="w-1/4">
                  <div class="relative mb-2">
                    <div class="absolute flex align-center items-center align-middle content-center" style={{width: "calc(100% - 2.5rem - 1rem)", top: "50%", transform: "translate(-50%, -50%)"}}>
                      <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                        <div class="w-0 bg-blue-300 py-1 rounded" style={{width: "100%"}}></div>
                      </div>
                    </div>

                    <div class="w-10 h-10 mx-auto bg-yellow-500 rounded-full text-lg text-white flex items-center">
                      <span class="text-center text-white w-full">
                        <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path class="heroicon-ui" d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div class="text-xs text-center md:text-base">Prelim CD OCR Inprogress</div>
                </div>

                <div class="w-1/4">
                  <div class="relative mb-2">
                    <div class="absolute flex align-center items-center align-middle content-center" style={{width: "calc(100% - 2.5rem - 1rem)", top: "50%", transform: "translate(-50%, -50%)"}}>
                      <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                        <div class="w-0 bg-yellow-300 py-1 rounded" style={{width: "100%"}}></div>
                      </div>
                    </div>

                    <div class="w-10 h-10 mx-auto bg-purple-500 border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                      <span class="text-center text-white-600 w-full">
                      <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
                        {/* </svg> */}
                      </span>
                    </div>
                  </div>

                  <div class="text-xs text-center md:text-base">Source DOC OCR Inprogress</div>
                </div>

                <div class="w-1/4">
                  <div class="relative mb-2">
                    <div class="absolute flex align-center items-center align-middle content-center" style={{width: "calc(100% - 2.5rem - 1rem)", top: "50%", transform: "translate(-50%, -50%)"}}>
                      <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                      <div class="w-0 bg-purple-300 py-1 rounded" style={{width: "100%"}}></div>
                      </div>
                    </div>

                    <div class="w-10 h-10 mx-auto bg-green-500 border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                      <span class="text-center text-white-600 w-full">
                        <svg class="w-full fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                          <path class="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"/>
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div class="text-xs text-center md:text-base">Order Completed</div>
                </div>
              </div>
            </div>
                          </div>
                          
                        </div>

            




            {/* Progress Steps ends */}



            <div className="col-span-12"> 
              <div className="intro-y tab-content mt-2">
                <div id="LoanDetails" className="tab-pane active" role="tabpanel">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 lg:col-span-12">
                      <OrderCDPage orderid={OrderUID}></OrderCDPage>
                    </div>
                  </div>

                </div>   
                <div id="DocumentTab" className="tab-pane" role="tabpanel">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 lg:col-span-12">
                      <OrderDocument orderid={OrderUID}/>
                    </div>
                  </div>
                </div>   
                <div id="Notes" className="tab-pane" role="tabpanel">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 lg:col-span-12">
                      <OrderNotes orderid={OrderUID}></OrderNotes>
                    </div>
                  </div>
                </div>   
                <div id="History" className="tab-pane" role="tabpanel">
                  <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-12 lg:col-span-12">
                    </div>
                  </div>
                </div>                        
              </div>                        
            </div>
          </div>
          </div>
          </div>
        </>
    );
}
export default OrderSummary;
