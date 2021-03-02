import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import OrderDocument from './OrderDocuments';
import './style.css';

function OrderSummary(props) {
    const OrderUID = 32;
    return(
        <>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="header mt-3 mb-3">
                        
                    </div>
                    <div className="card"> 
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <ul className="nav nav-tabs3">
                                    <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#summary">Loan Details</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#document">Documents</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#notes">Notes</a></li>
                                    <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#history">History</a></li>                                   
                                </ul>
                            </div>
                        </div>

                        <div className="tab-content padding-0">
                            {/* Order Summary Tab */}
                            <div className="tab-pane active" id="summary">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="header">
                                            <h6>Order Details</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end */}

                            {/* Order Documnet Tab */}
                            <div className="tab-pane fade" id="document">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="header">
                                            <h6></h6>
                                            <input type="text" class="search-input" placeholder=" search" />
                                        </div>
                                        <br/>
                                        <OrderDocument orderid={OrderUID}/>
                                    </div>
                                </div>
                            </div>
                            {/* end */}

                            {/* Order Note Tab */}
                            <div className="tab-pane fade" id="notes">
                                <div className="row">
                                    <div className="col-md-12">

                                    </div>
                                </div>
                            </div>
                            {/* end */}
                            
                            {/* Order History Tab */}
                            <div className="tab-pane fade" id="history">
                               <div className="row">
                                   <div className="col-md-12">

                                   </div>
                               </div>
                            </div>
                            {/* end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default OrderSummary;
