import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../store/store.js';
import { useToasts } from 'react-toast-notifications';
import Button from 'react-bootstrap/Button';


import auth from '../../repository/auth';
import { SignIn, SignOut } from "../../store/action";
import { getAccessToken, setAccessToken, removeAccessToken, checkUserAuthentication } from "../../store/localstorage";


import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
function LoginPage(props) {
    
    const { addToast } = useToasts();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [color,setColor]=useState('blue');

    let history = useHistory();
     async function handleSubmit(e){
        e.preventDefault();
        setColor('red');

        //  setErrors([]);
         let validationErrors = [];
         if (!username || username == '') {
             validationErrors.push('Email is required');
         }

         if (!password || password == '') {
             validationErrors.push('Password is required');
         }

         if (validationErrors.length > 0) {
             setErrors(validationErrors);
             setErrorMessage(validationErrors);
             setTimeout(()=>{
                setColor('red');
             }, 500);

             return false;
         }
         

        var formData = new FormData(e.target);
        
        //  toastr.error('Error Message', 'Title', { displayDuration: 3000 });
         try{
             var response = await auth.login(formData);
             console.log(response);

             
             if (response) {
                 
                 if (response.data.status == "success") {
                     if ( response.data['access-token'] != "") {
                         
                         setAccessToken(response.data['access-token'])
                         addToast(response.data.message, { appearance: 'success' });    
                     }
                 }
                 else {

                 }
             }
         }
         catch(e){
            console.log(e);

             addToast(e.data.message, { appearance: 'error' });


             let $responseError = e.data.errors;

             var generatedErrors = [];
             Object.keys($responseError).map((value, key) => {
                 $responseError[value].map((v,k)=>{
                     generatedErrors.push(v);
                 })
             })

             setErrors(generatedErrors);
            //  setErrorMessage(generatedErrors);

         }
         setColor('red');


        // history.push('/alluser');

    }


    function setErrorMessage(errors) {

        let message = errors.map((err, key) => {
            return <p key={key}>{err}</p>
        })
        addToast(message, { appearance: 'error' });

    }

    function showErrors(message) {
        addToast(message, { appearance: 'error' });

    }

    function showMessage(message) {
        addToast(message, { appearance: 'success' });

    }

    var errormessage  ="";
    {
        if (errors.length > 0) {

            let li = errors.map((value, key) => {
                return <li key={key}>{value}</li>
            })
            errormessage = <div className="error-messages" style={{ color: 'red', fontSize: '12px', 'border': '1px solid #bbb', 'borderRadius': '5px', 'padding': '10px 5px', 'background': '#4aa' }}>

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
                                        <input type="hidden" name="device_name" value="system"/>
                                       {/*  {errormessage} */}

                                    <div className="form-group ">
                                        <label className="field-label" >Email Id</label>
                                        <input type="email" name="Email" className="form-control" autoFocus="autofocus" value={username} onChange={ (e)=>{setUsername(e.target.value)}}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="field-label">Password
                                        </label>
                                        <input type="password" name="Password" className="form-control" value={password} onChange={ (e)=>{setPassword(e.target.value)}} />
                                    </div>
                                    <div className="boxClickCss">
                                    {/* <AnimatedButton color="success" animationDuration={1} color="#4bcffa" animationType="brightness">Brightness Animation</AnimatedButton> */}
                                    <button type="submit" id="signup-btn" style={{background:color}} className="btn btn-lg btn-block text-center" onClick={(e)=>{setColor("#AD2508")}}>Login</button>
                                    </div>
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
