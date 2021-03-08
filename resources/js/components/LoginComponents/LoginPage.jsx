import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../store/store.js';
import { useToasts } from 'react-toast-notifications';
// import Button from 'react-bootstrap/Button';
import '../../../css/login.css';
import validate from "validate.js";

import auth from '../../repository/auth';
import { SignIn, SignOut } from "../../store/action";
import { getAccessToken, setAccessToken, removeAccessToken, checkUserAuthentication } from "../../store/localstorage";


import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
function LoginPage(props) {

    const { addToast } = useToasts();

    const [formdata, setFormdata] = useState({Email:"", Password:""});
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [color, setColor] = useState('blue');

    useEffect(() => {
        // document.querySelector('.img__btn').addEventListener('click', function () {
        //     document.querySelector('.cont').classList.toggle('s--signup');
        // });
    })

    let history = useHistory();

    /* Validation Constraints */
    var constraints = {
    Email: {
        presence: true,
        email: {
            message: "%{value} is not valid email"
        },
        length: {
            minimum: 10,
            message: "Email must be at least 8 characters"
        }
    },
    Password: {
        presence: true,
        length: {
        minimum: 6,
        message: "must be at least 6 characters"
        }
    }
    };


    /* Handle Login Submit */
    async function handleSubmit(e) {
        e.preventDefault();
        setColor('red');
        setErrors({});
        //  setErrors([]);
        let validatorError = validate(formdata, constraints);
        console.log(validatorError);

        if (validatorError && Object.keys(validatorError).length > 0) {
            setErrors(validatorError);
            addToast("Please provide valid data", { appearance: 'error', autoDismiss: true,  });
            return false;
        }


        var formData = new FormData(e.target);

        //  toastr.error('Error Message', 'Title', { displayDuration: 3000 });
        try {
            var response = await auth.login(formData);
            console.log(response);


            if (response) {

                if (response.data.status == "success") {
                    addToast(response.data.message, { appearance: 'success', autoDismiss: true,  });
                    setAccessToken('true')
                }
                else if(response.data.status == "failed") {
                    addToast(response.data.message, { appearance: 'error', autoDismiss: true,  });

                    let errors = response.data.errors;
                    Object.keys(errors).forEach((value)=>{
                        setErrors((prevError)=>{
                            return {...prevError, [value]:errors[value]};
                        })
                    })
                    
                }
            }
        }
        catch (e) {
            console.log(e);

            addToast("Login Failed. Please try again...", { appearance: 'error', autoDismiss: true,  });



        }

    }

    function onPasswordChange(e) {
        let val = e.target.value;
        setFormdata((prevState)=>{ return {...prevState, Password: val}});
    }

    function onEmailChange(e) {
        let val = e.target.value;
        setFormdata((prevState)=>{ return {...prevState, Email: val}});
    }


    var errormessage = "";
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
    return (
            <>
                    <div className="container login-container" style={{display:'flex', justifyContent: 'space-evenly',marginTop:'50px'}}>
                    <div className="row" >
                        <div className="cont">
                            <div className="form sign-in">
                        <form onSubmit={handleSubmit} >
                                <input type="hidden" name="device_name" value="pc"/>
                                <p className="tip" style={{ fontSize: '32px',color:'#00acc7',fontWeight:'bolder'}}>Get CDNOW </p>
                                <h5 style={{ textTransform: 'uppercase', textAlign: 'center', fontWeight:'600' }}>We Automate your work in a simple way</h5>
                                <label>
                                    <span>Email</span>
                                    <input type="email" name="Email" value={formdata.Email} onChange={onEmailChange} />
                                    {
                                        errors.Email && errors.Email.map((v, i) => <span key={i} className="error" style={{display: "inline-block"}}>{v}</span>)
                                    }
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password" name="Password" value={formdata.Password} onChange={onPasswordChange}/>
                                    {
                                        errors.Password && errors.Password.map((v, i) => <span key={i} className="error" style={{display: "inline-block"}}>{v}</span>)
                                    }
                                </label>
                                <p className="forgot-pass"><Link to="ForgotPassword">Forgot password?</Link></p>
                                <button type="Submit" className="submit">Sign In</button>
                            </form>

                            </div>
                            <div className="sub-cont">
                                <div className="img">
                                    <div className="img__text m--up">
                                        <h2>Need CD?</h2>
                                        <p>Discover new opportunities with great Flexibility !</p>
                                    </div>
                                    <div className="img__text m--in">
                                        <h2>One of us?</h2>
                                        <p>If you already has an account, just sign in. We've missed you!</p>
                                    </div>
                                    {/* <div className="img__btn">
                                        <span className="m--up">Sign Up</span>
                                        <span className="m--in">Sign In</span>
                                    </div> */}
                                </div>
                                <div className="form sign-up">
                                    <h2>Please Fill and log in</h2>
                                    <label>
                                        <span>Name</span>
                                        <input type="text" />
                                    </label>
                                    <label>
                                        <span>Email</span>
                                        <input type="email" />
                                    </label>
                                    <label>
                                        <span>Password</span>
                                        <input type="password" />
                                    </label>
                                    <button type="button" className="submit">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {/* <p className="signup-text">By signing up you agree to our T&C and Privacy Policy </p> */}


            </>

    )
}
export default LoginPage;
