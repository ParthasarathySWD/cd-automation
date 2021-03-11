import React, {useState, useEffect }from 'react';

import { useSelector, useDispatch } from 'react-redux';
import store from '../../../ThemeLayouts/store/store';
import { useToasts } from 'react-toast-notifications';

import validate from "validate.js";

import auth from '../../../ThemeLayouts/repository/auth';
import { SignIn, SignOut } from "../../../ThemeLayouts/store/action";
import { getAccessToken, setAccessToken, removeAccessToken, checkUserAuthentication } from "../../../ThemeLayouts/store/localstorage";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

function Login(props){

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
        minimum: 5,
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

    return(
    <div className="login">
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">

                <div className="hidden xl:flex flex-col min-h-screen">
                    <a href="" className="-intro-x flex items-center pt-5">
                        <img alt="Rubick Tailwind HTML Admin Template" className="w-6" src="images/logo.svg"/>
                        <span className="text-white text-lg ml-3"> Get CD<span className="font-medium">Now</span> </span>
                    </a>
                    <div className="my-auto">
                        <img alt="Rubick Tailwind HTML Admin Template" className="-intro-x w-1/2 -mt-16" src="images/illustration.svg"/>
                        <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                            A few more clicks to 
                            <br/>
                            sign in to your account.
                        </div>
                        <div className="-intro-x mt-5 text-lg text-white text-opacity-70 dark:text-gray-500">Manage all your e-commerce accounts in one place</div>
                    </div>
                </div>

                <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                    <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-dark-1 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                        <form onSubmit={handleSubmit}>
                            <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                                Sign In
                            </h2>
                            <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
                            <div className="intro-x mt-8">
                                <input type="hidden" name="device_name" value="pc"/>

                                <input type="text" name="Email" className="intro-x login__input form-control py-3 px-4 border-gray-300 block" placeholder="Email" value={formdata.Email} onChange={onEmailChange}/>
                                {
                                    errors.Email && errors.Email.map((v, i) => <span key={i} className="error" style={{display: "inline-block"}}>{v}</span>)
                                }
                                <input type="password" name="Password" className="intro-x login__input form-control py-3 px-4 border-gray-300 block mt-4" placeholder="Password" value={formdata.Password} onChange={onPasswordChange}/>
                                {
                                    errors.Password && errors.Password.map((v, i) => <span key={i} className="error" style={{display: "inline-block"}}>{v}</span>)
                                }

                            </div>
                            <div className="intro-x flex text-gray-700 dark:text-gray-600 text-xs sm:text-sm mt-4 text-right">
                                {/* <div className="flex items-center mr-auto">
                                    <input id="remember-me" type="checkbox" className="form-check-input border mr-2"/>
                                    <label className="cursor-pointer select-none" for="remember-me">Remember me</label>
                                </div> */}
                                <a href="">Forgot Password?</a> 
                            </div>
                            <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                <button type="submit" className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top">Login</button>                                
                            </div>
                            <div className="intro-x mt-10 xl:mt-24 text-gray-700 dark:text-gray-600 text-center xl:text-left">
                                By signin up, you agree to our 
                                <br/>
                                <a className="text-theme-1 dark:text-theme-10" href="">Terms and Conditions</a> & <a className="text-theme-1 dark:text-theme-10" href="">Privacy Policy</a> 
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;