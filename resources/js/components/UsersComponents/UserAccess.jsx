import React, { Component } from 'react';
import Tab from './AddUserTab';

class UserAccess extends Component {
    render() {
        return (
            <>

                    <div className="block-header">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <h1>Add User</h1>
                                <span></span>
                            </div>
                            <div className="col-lg-8 col-md-12 col-sm-12 text-lg-right">
                                <div className="d-flex align-items-center justify-content-lg-end mt-4 mt-lg-0 flex-wrap vivify pullUp delay-550">
                                    <div className="mb-3 mb-xl-0">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <Tab/>
                <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Username <span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" defaultValue=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Password <span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" defaultValue=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    {/* <div className="col-sm-3">
                                        <div className="form-group c_form_group">
                                            <label>Date of Birth <span className="text-danger">*</span></label>
                                            <input type="text" data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group c_form_group">
                                            <label>Phone <span className="text-danger">*</span></label>
                                            <input className="form-control" type="text" defaultValue=""/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Enter Your Email <span className="text-danger">*</span></label>
                                            <input className="form-control" type="email" defaultValue=""/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <input type="file" className="dropify"/>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group mt-3">
                                            <textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                        </div>
                                    </div> */}
                                    <div className="col-sm-12 align-right">
                                        <button type="submit" className="btn btn-sm btn-primary">Submit</button>
                                        <button type="submit" className="btn  btn-sm btn-danger">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}

export default UserAccess;