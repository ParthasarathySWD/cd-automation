import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

import OrderDocument from './OrderDocuments';
import OrderNotes from './OrderNotes';
import OrderCDPage from '../../Views/CDTabList';
import './style.css';

function OrderSummary(props) {
    const OrderUID = props.match.params.id;
    return(
        <>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">                   
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
                                <div className="row m-2">
                                    <div className="col-md-12">
                                        <OrderCDPage orderid={OrderUID}></OrderCDPage>
                                    </div>
                                </div>
                            </div>
                            {/* end */}

                            {/* Order Documnet Tab */}
                            <div className="tab-pane fade" id="document">
                                <div className="row">
                                    <div className="col-md-12">                               
                                        <div className="p-4">
                                            <div className="header">
                                                <div className="has-search-form has-search">
                                                    <span className="fa fa-search form-control-feedback"></span>
                                                    <input type="text" id="search" className="border rounded pull-right" placeholder="Search" />
                                                </div>
                                                {/* <input className="border rounded pull-right" type="search" name="search" id="search" placeholder="&#61442; Search"/> */}
                                            </div>
                                            <OrderDocument orderid={OrderUID}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end */}

                            {/* Order Note Tab */}
                            <div className="tab-pane fade" id="notes">
                                <div className="row">
                                    <div className="col-md-12">
                                        <OrderNotes orderid={OrderUID}></OrderNotes>
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
