import React, { Component, useState } from "react";
import axios from 'axios';
import '../../CommonComponents/FIleUploader/style.css';
import FileDrop from '../../CommonComponents/FIleUploader/FileDrop';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useToasts } from 'react-toast-notifications';

import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';


const SwalAlert = withReactContent(Swal)

function OrderEntry() {

    const [files, setFiles] = useState([]);
    const [types, setTypes] = useState([]);
    const { addToast } = useToasts();
    let history = useHistory();
    return(
        <div>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">                        
                        <div className="body">
                            <form id="frm-order-entry">
                                <div className="row clearfix">

                                    <div className="col-md-8">
                                        <div className="step-1">
                                            <h6>Setp 1 :</h6>
                                            <div className="form-group">
                                                <label>Loan Number <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" defaultValue="" name="LoanNumber" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="step-2">
                                            <h6>Setp 2 : Uploading Your Prelim Document</h6>
                                            <FileDrop setFiles={setFiles} setTypes={setTypes} doctype={'Prelim'}/>
                                        </div>
                                    </div>

                                    <div className="col-md-8">
                                        <div className="step-3">
                                            <h6>Setp 3 : Uploading Your Supporting Documents</h6>
                                            <FileDrop setFiles={setFiles} setTypes={setTypes} doctype={'Support'}/>
                                        </div>
                                    </div>

                                    <div className="col-sm-12">
                                        <div className="pull-right">
                                            <button type="submit" className="btn btn-sm btn-primary" >Save</button>
                                            <button type="button" className="btn  btn-sm btn-danger">Cancel</button>
                                        </div>
                                    </div>
                                </div>                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderEntry;
