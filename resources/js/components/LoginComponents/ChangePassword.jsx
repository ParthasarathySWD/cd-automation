import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ForgotPassword extends React.Component{
    render() {
        return(
            <div className="ChangePassword-container col-sm-6 card">
                <div id="card text-center"  >
                        <div className="head">
                            <p className="change-leads">Change Password</p>
                            <hr></hr>
                        </div>
                        <div className="body">
                            <form className="form-auth-small">
                               
                                <div className="form-group ">
                                    <label className="field-label">Old Password</label>
                                    <input type="password" className="form-control" autoFocus="autofocus"/>
                                </div>

                                <div className="form-group ">
                                    <label className="field-label">New Password</label>
                                    <input type="password" className="form-control"/>
                                </div>

                                <div className="form-group ">
                                    <label className="field-label">Confirm Password</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                
                                <button type="submit" id="signup-btn" className="btn btn-lg btn-block"><b>Submit</b></button>
                                 <div className="bottom text-center"> 
                                    <span className="helper-text m-b-10 text-center text-secondary"><i className="fa fa-arrow-left text-primary text-secondary"></i> <Link to={'/'} className="text-secondary">Back to login</Link></span>
                                 </div> 
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;