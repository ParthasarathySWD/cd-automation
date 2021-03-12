import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import OrderDocument from './OrderDocuments';
import OrderNotes from './OrderNotes';
import OrderCDPage from '../CD-Details/CDTabList';
// import './style.css';
function OrderSummary(props) {
    const OrderUID = props.match.params.id;
    return(
        <>
          <div className="grid grid-cols-12 gap-3">

            <div className="col-span-12 border-b border-gray-200">                         
              <div className="nav nav-tabs flex-col sm:flex-row justify-center lg:justify-start" role="tablist"> 
                <a data-toggle="tab" data-target="#LoanDetails" className="py-4 sm:mr-8 active" role="tab" aria-selected="true">Loan Details</a> 
                <a data-toggle="tab" data-target="#DocumentTab" className="py-4 sm:mr-8" role="tab" aria-selected="false">Documents</a> 
                <a data-toggle="tab" data-target="#Notes" className="py-4 sm:mr-8" role="tab" aria-selected="false">Notes</a> 
                <a data-toggle="tab" data-target="#History" className="py-4 sm:mr-8" role="tab" aria-selected="false">History</a> 
              </div>
            </div>
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
        </>
    );
}
export default OrderSummary;
