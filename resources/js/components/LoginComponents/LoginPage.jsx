import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../store/store.js';
import { useToasts } from 'react-toast-notifications';
// import Button from 'react-bootstrap/Button';
import '../../../css/login.css';


import auth from '../../repository/auth';
import { SignIn, SignOut } from "../../store/action";
import { getAccessToken, setAccessToken, removeAccessToken, checkUserAuthentication } from "../../store/localstorage";


import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
function LoginPage(props) {

    const { addToast } = useToasts();

    const [formdata, setFormdata] = useState({Username:"", Password:""});
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const [color, setColor] = useState('blue');

    useEffect(() => {
        // document.querySelector('.img__btn').addEventListener('click', function () {
        //     document.querySelector('.cont').classList.toggle('s--signup');
        // });
    })

    let history = useHistory();
    async function handleSubmit(e) {
        e.preventDefault();
        setColor('red');

        //  setErrors([]);
        let validationErrors = [];
        if (!formdata.Username || formdata.Username == '') {
            validationErrors.push('Email is required');
        }

        if (!formdata.Password || formdata.Password == '') {
            validationErrors.push('Password is required');
        }

        if (validationErrors.length > 0) {
            setErrors(validationErrors);
            setErrorMessage(validationErrors);
            setTimeout(() => {
                setColor('red');
            }, 500);

            return false;
        }


        var formData = new FormData(e.target);

        //  toastr.error('Error Message', 'Title', { displayDuration: 3000 });
        try {
            var response = await auth.login(formData);
            console.log(response);


            if (response) {

                if (response.data.status == "success") {
                    addToast(response.data.message, { appearance: 'success' });
                    setAccessToken('true')
                }
                else {

                }
            }
        }
        catch (e) {
            console.log(e);

            addToast(e.data.message, { appearance: 'error' });


            let $responseError = e.data.errors;

            var generatedErrors = [];
            Object.keys($responseError).map((value, key) => {
                $responseError[value].map((v, k) => {
                    generatedErrors.push(v);
                })
            })

            setErrors(generatedErrors);
            //  setErrorMessage(generatedErrors);

        }
        setColor('red');


        // history.push('/alluser');

    }

    function onPasswordChange(e) {
        let val = e.target.value;
        setFormdata((prevState)=>{ return {...prevState, Password: val}});
    }

    function onUserNameChange(e) {
        let val = e.target.value;
        setFormdata((prevState)=>{ return {...prevState, Username: val}});
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
                                    <input type="email" name="Email" value={formdata.Username} onChange={onUserNameChange} />
                                </label>
                                <label>
                                    <span>Password</span>
                                    <input type="password" name="Password" value={formdata.Password} onChange={onPasswordChange}/>
                                </label>
                                <p className="forgot-pass">Forgot password?</p>
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
