import React, {useState} from 'react';
import toastr from 'reactjs-toastr';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../store/store.js';

// import 'reactjs-toastr/lib/toast.css';


import { ToastContainer } from "react-toastr";

import auth from '../../repository/auth';
import { SignIn, SignOut } from "../../store/action";
import { getAccessToken, setAccessToken, removeAccessToken, checkUserAuthentication } from "../../store/localstorage";


import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
function LoginPage(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    let container;

    let history = useHistory();
     async function handleSubmit(e){
        e.preventDefault();
        var formData = new FormData(e.target);
        
        //  toastr.error('Error Message', 'Title', { displayDuration: 3000 });
         try{
             var response = await auth.login(formData);
             console.log(response);
             
             if (response) {
                 
                 if (response.data.status == "success") {
                     if ( response.data['access-token'] != "") {
                         
                         setAccessToken(response.data['access-token'])
                         container.success(response.data.message, `Success`, {
                             closeButton: true,
                         });
                     }
                 }
                 else {

                 }
             }
         }
         catch(e){
            console.log(e);

             container.error(e.data.message, `Error`, {
                 closeButton: true,
             });

             let $responseError = e.data.errors;

             var generatedErrors = [];
             Object.keys($responseError).map((value, key) => {
                 $responseError[value].map((v,k)=>{
                     generatedErrors.push(v);
                 })
             })

             setErrors(generatedErrors);
         }

        // history.push('/alluser');

    }

    var errormessage  ="";
    {
        if (errors.length > 0) {

            let li = errors.map((value, key) => {
                return <li key={key}>{value}</li>
            })
            errormessage = <div class="error-messages" style={{ color: 'red', fontSize: '12px', 'border': '1px solid #bbb', 'borderRadius': '5px', 'padding': '10px 5px', 'background': '#4aa'}}>

                <ul style={{ listStylePosition: 'inside' }}>
                    {
                        li
                    }
                </ul>
            </div>
        }
    }
        return(
         <>

            <div className="login main-container">
                    <ToastContainer
                        ref={ref => container = ref}
                        className="toast-top-right"
                    />
                <div id="header" className="child col-sm-6">
                    <h2 className="heading"><b>CD-Automation</b></h2>
                    <h5>We automate your work in a simple way</h5>
                </div>
                
                <div id="login-container" className="col-sm-6 card">
                    
                    <div id="card" >
                        <div className="form-container">
                      
                            <div className="head">
                                <p className="lead">Login</p>
                                {/* <button className="sign-link" href="#" >Sign in</button> */}
                                <hr></hr>
                            </div>
                            <div className="body">
                                    <form className="form-auth-small" onSubmit={handleSubmit}>

                                        {errormessage}

                                    <div className="form-group ">
                                        <label className="field-label" >Email Id</label>
                                        <input type="email" name="Email" className="form-control" autoFocus="autofocus" value={username} onChange={ (e)=>{setUsername(e.target.value)}}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="field-label">Password
                                        </label>
                                        <input type="password" name="Password" className="form-control" value={password} onChange={ (e)=>{setPassword(e.target.value)}} />
                                    </div>
                                    
                                    <button type="submit" id="signup-btn" className="btn btn-lg btn-block text-center" ><b>Login</b></button>
                                    <div className="bottom text-center">
                                        <span className="helper-text m-b-10 text-center "><i className="fa fa-lock"></i> <Link to={'/forgotpassword'} className="text-secondary">Forgot password?</Link></span>
                                        {/* <span>Don't have an account? <a href="page-register.html">Register</a></span> */}
                                    </div> 
                                </form>
                            </div>
                          
                        </div>
                    </div>
                   
                    
                </div> 
                {/* <p className="signup-text">By signing up you agree to our T&C and Privacy Policy </p> */}
              
            </div>
         
        </>
        
       )
}
export default LoginPage;
