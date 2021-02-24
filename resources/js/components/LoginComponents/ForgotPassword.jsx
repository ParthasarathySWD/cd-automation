import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class ForgotPassword extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          messageEmail: ""
        }
      }
      handleOnBlurEmail(event) {
        var email        = event.target.value;
        var messageEmail = "";
    
        if(!email) {
          messageEmail = "Email required"; 
        }
    
        this.setState({
          email: email,
          messageEmail: messageEmail
        });
      }
    render() {
        return(
            <div className="ForgetPassword-container col-sm-6 card">
                <div id="card text-center"  >
                        <div className="head">
                            <p className="leads">Forgot Password</p>
                            <hr></hr>
                        </div>
                        <div className="body">
                            <form className="form-auth-small" >
                               
                                <div className="form-group ">
                                    <label className="field-label">Email Id</label>
                                    <input type="email" className="form-control" autoFocus="autofocus" onBlur={this.handleOnBlurEmail.bind(this)}/>
                                    <span className="error text-danger">{this.state.messageEmail}</span>
                                </div>
                                
                                <button type="submit" id="signup-btn" className="btn btn-lg btn-block"><b>Submit</b></button>
                                 <div className="bottom text-center"> 
                                    <span className="helper-text m-b-10 text-center text-secondary"><i className="fa fa-arrow-left text-primary text-secondary"></i> <Link to={'/'} className="text-secondary">Back to login</Link></span>
                                    {/* <span>Don't have an account? <a href="page-register.html">Register</a></span> */}
                                 </div> 
                            </form>
                        </div>
                </div>
            </div>
        )
    }
}

export default ForgotPassword;