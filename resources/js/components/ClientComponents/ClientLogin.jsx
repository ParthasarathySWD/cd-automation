import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import {Form,FormLabel, FormGroup, FormControl, ControlLabel, Col, Button,Card} from 'react-bootstrap';

class ClientLogin extends React.Component {
    render() {
       
      return (
        <>
       <div>
				<div className="block-header" id="headername">
					<div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h1>Add Client</h1>
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
				<div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-sm-3">
                                    <div className="form-group">
                                     <label className="field-label" >Client Number<span className="text-danger">*</span></label>
                                     <input type="text" name="ClientNumber" className="form-control" autoFocus="autofocus"/>
                                 </div>
                                    </div>
                                    <div className="col-sm-3">
                                       
                                        <div className="form-group">
                                            <label className="field-label" >Client Name<span className="text-danger">*</span></label>
                                            <input type="text" name="ClientName" className="form-control" autoFocus="autofocus"/>
                                        </div>
                                    </div>
                                
                                
                                    {/* <div className="col-sm-6">
                                        <div className="form-group c_form_group">
                                            <label>Date of Birth <span className="text-danger">*</span><span className="text-danger">*</span></label>
                                            <input type="text" data-provide="datepicker" data-date-autoclose="true" className="form-control" placeholder=""/>
                                        </div>
                                    </div> */}
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label" >Phone<span className="text-danger">*</span></label>
                                        <input type="text" name="Phone" className="form-control" autoFocus="autofocus"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-grouo">
                                            
                                        <label className="field-label" >Email<span className="text-danger">*</span></label>
                                        <input type="email" name="Email" className="form-control" autoFocus="autofocus"/>
                                        </div>
                                    </div>
                                    
                                    {/* <div className="col-lg-12">
                                        <input type="file" className="dropify"/>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group mt-3">
                                            <textarea rows="4" className="form-control no-resize" placeholder="Please type what you want..."></textarea>
                                        </div>
                                    </div> */}
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label" >Address Line1<span className="text-danger">*</span></label>
                                        <input type="text" name="AddressLine1" className="form-control" autoFocus="autofocus"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label" >City<span className="text-danger">*</span></label>
                                        <input type="text" name="CityName" className="form-control" autoFocus="autofocus"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label">County<span className="text-danger">*</span></label>
                                        <input type="text" name="CountyName" className="form-control" autoFocus="autofocus"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label">State<span className="text-danger">*</span></label>
                                        <input type="text" name="StateName" className="form-control" autoFocus="autofocus"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                        <label className="field-label" >Notes<span className="text-danger">*</span></label>
                                        <input type="textarea" name="Notes" className="form-control" autoFocus="autofocus"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 align-right">
                                        <button type="submit" className="btn btn-sm btn-primary" >Submit</button>
                                        <button type="submit" className="btn  btn-sm btn-danger" >Cancel</button>
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
}
export default ClientLogin;