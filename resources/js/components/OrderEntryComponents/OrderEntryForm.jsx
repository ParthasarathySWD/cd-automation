import React, { Component } from "react";
import axios from 'axios';
import '../../CommonComponents/FIleUploader/style.css';
import FileDrop from '../../CommonComponents/FIleUploader/FileDrop';

function OrderEntryForm() {
    const OrderFiles = (OrderFile) => {
        console.log(OrderFiles)
    };
    return(
        <div>
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="header">
                            <h5>Order Entry</h5>
                        </div>
                        <div className="body">
                            <div className="row clearfix">
                                <div className="col-sm-6 mb-4">
                                    <div className="row clearfix scroll-div">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Loan Number <span className="text-danger">*</span></label>
                                                <input className="form-control" type="text" defaultValue=""  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="row clearfix">
                                        <div className="col-sm-8 uploader">
                                            <h6>
                                                Upload Documnents
                                            </h6>
                                            <FileDrop/>
                                        </div>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <div className="pull-right">
                                                <button type="submit" className="btn btn-sm btn-primary" >Submit</button>
                                                <button type="submit" className="btn  btn-sm btn-danger">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderEntryForm;
