import React from 'react';
import { useToasts } from 'react-toast-notifications'
import {useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from '../../../ThemeLayouts/repository/api';
import * as Icon from 'react-feather';
import Select from 'react-select';
function AddUser()
{
    
        const history = useHistory();
        const spanStyle = {
            color: 'red',
            fontSize: 12,
          };
            const { addToast } = useToasts();
            const [state, setState] = useState({
                
                FirstName: '',
                LastName: '',
                PhoneNumber: '',
                Email: '',
                UserName: '',
                Password: '',
                ConfirmPassword: '',
                RoleUID: '',
                errors: {}
    
            });
    
    
        function handleValidation(){
            let errors = {};
            let formIsValid = true;
    
            // FirstName
            if(!state.FirstName){
                formIsValid = false;
                errors["FirstName"] = "Field is Required";
             }
             else{
                if(typeof state.FirstName !== "undefined"){
                    if(!state.FirstName.match(/^[a-zA-Z]+$/)){
                       formIsValid = false;
                       errors["FirstName"] = "Only letters";
                    }        
                 }
             }
             
    
            //  LastName
             if(!state.LastName){
                formIsValid = false;
                errors["LastName"] = "Field is Required";
             }
             else{
                if(typeof state.LastName !== "undefined"){
                    if(!state.LastName.match(/^[a-zA-Z]+$/)){
                    formIsValid = false;
                    errors["LastName"] = "Only letters";
                    }        
                }
             }
    
            //  PhoneNumber
             if(!state.PhoneNumber){
                formIsValid = false;
                errors["PhoneNumber"] = "Field is Required";
             }
             else{
                if(typeof state.PhoneNumber !== "undefined"){
                    if(!state.PhoneNumber.match(/^[0-9]{1,10}$/)){
                       formIsValid = false;
                       errors["PhoneNumber"] = "Invalid PhoneNumber";
                    }        
                 }
             }
    
             //Email
             if(!state.Email){
                formIsValid = false;
                errors["Email"] = "Field is Required";
             }
             else{
                if(typeof state.Email !== "undefined"){
                    let lastAtPos = state.Email.lastIndexOf('@');
                    let lastDotPos = state.Email.lastIndexOf('.');
        
                    if (!(lastAtPos < lastDotPos && lastAtPos > 0 && state.Email.indexOf('@@') == -1 && lastDotPos > 2 && (state.Email.length - lastDotPos) > 2)) {
                       formIsValid = false;
                       errors["Email"] = "Email is not valid";
                     }
                }
             }
    
            //  UserName
            if(!state.UserName){
                formIsValid = false;
                errors["UserName"] = "Field is Required";
             }
            //  else{
            //     if(typeof state.UserName !== "undefined"){
            //         if(!state.UserName.match(/^[a-zA-Z]+$/)){
            //            formIsValid = false;
            //            errors["UserName"] = "Only letters";
            //         }        
            //      }
            //  }
    
             //  Password
            if(!state.Password){
                formIsValid = false;
                errors["Password"] = "Field is Required";
             }
             else{
                if(typeof state.Password !== "undefined"){
                    if(!state.Password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$_!%*?&])[A-Za-z\d@#$!_%*?&]{8,}$/)){
                       formIsValid = false;
                       errors["Password"] = "Required minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
                    }        
                 }
             }
    
            //  ConfirmPassword
            if(!state.ConfirmPassword){
                formIsValid = false;
                errors["ConfirmPassword"] = "Field is Required";
             }
             else{
                if(state.ConfirmPassword !== state.Password){
                    
                       formIsValid = false;
                       errors["ConfirmPassword"] = "Password does not match";
                            
                 }
             }
             
            //  RoleUID
             if(!state.RoleUID){
                formIsValid = false;
                errors["RoleUID"] = "Field is Required";
             }
    
             setState(prevState => ({ ...prevState, errors: errors }));
            return formIsValid;
    
        }
    
        function onChangeHandler(e){
            const { name, value } = e.target;
            setState(prevState => ({ ...prevState, [name]: value }));
    
        };
    
        function onClickHandler(){
            // addToast("Hi", { appearance: 'success' });
    
            if(handleValidation()){
                
                const data = new FormData();
    
                data.append('FirstName', state.FirstName);
                data.append('LastName', state.LastName);
                data.append('PhoneNumber', state.PhoneNumber);
                data.append('Email', state.Email);
                data.append('UserName',state.UserName);
                data.append('Password',state.Password);
                data.append('ConfirmPassword',state.ConfirmPassword);
                data.append('RoleUID',state.RoleUID);
    
                
    
                axios.post("users", data, {
                    
                }).then(res => {
                        addToast("User Created Successfully", { appearance: 'success' , autoDismiss: 'true'});
                         setState({ 
    
                            FirstName: '',
                            LastName: '',
                            PhoneNumber: '',
                            Email: '',
                            UserName: '',
                            Password: '',
                            ConfirmPassword: '',
                            RoleUID: '',
                            errors: {}
    
                         });history.push("/allusers");
                    })
                    
    
             }else{
                const data = new FormData();
    
                axios.post("users", data, {
                })
                    .then(res => {
                        addToast("Invalid Input", { appearance: 'error', autoDismiss: 'true' });
                    })
             }
    
            
        };
    
        function reset(){
             setState({ 
    
                FirstName: '',
                LastName: '',
                PhoneNumber: '',
                Email: '',
                UserName: '',
                Password: '',
                ConfirmPassword: '',
                RoleUID: '',
                errors: {}
    
             });history.push('/allusers');
        };
        const Role = [
            { value: '1', label: 'Admin' },
            { value: '2', label: 'Customer' },
            { value: '3', label: 'Lender' }
            ]

    return(

        // <div>
        //     <center><h1>Add User</h1></center>
            
        //     <div className="row clearfix">
        //             <div className="col-lg-12 col-md-12 col-sm-12">
        //                 <div className="card">
        //                     <div className="body">
        //                    
        //                   
        //                             <div className="col-sm-12 align-right mt-3">
        //                                 <button type="submit" className="btn btn-xs btn-primary mr-2" onClick={onClickHandler} >Submit</button>
        //                                 <button type="submit" className="btn  btn-xs btn-danger" onClick={reset} >Cancel</button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>

               
               
                
        // </div>
        <div>
            <div className="grid grid-cols-12 gap-3 mt-5">
                <div className="intro-y col-span-12 lg:col-span-12">
                    <div className="intro-y box  p-5">
                        
                        <div className="grid grid-cols-12 gap-3">
                            <div className="intro-y col-span-12 lg:col-span-12">
                                <h2 className="font-medium text-base mr-auto">
                                    Add User
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-3">
                            
                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">First Name <span className="text-danger">*</span></label> 
                                <div className="input-group"> 
                                    <div className="input-group-text">
                                        <Icon.User className="w-4 h-4" />
                                    </div> 
                                    <input type="text" className="form-control form-control-sm" name="FirstName"  onChange={onChangeHandler} value={state.FirstName} placeholder="Ex. Name" />
                                    {state.errors["FirstName"] ? <span style={spanStyle}>{state.errors["FirstName"]}</span> : ""} 
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">Last Name <span className="text-danger">*</span></label> 
                                <div className="input-group"> 
                                    <div className="input-group-text">
                                        <Icon.User className="w-4 h-4" />
                                    </div> 
                                    <input type="text" className="form-control form-control-sm" name="LastName"  onChange={onChangeHandler} value={state.LastName} placeholder="Ex. Name" />
                                    {state.errors["LastName"] ? <span style={spanStyle}>{state.errors["LastName"]}</span> : ""} 
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">Phone</label> 
                                <div className="input-group">
                                     <div className="input-group-text">
                                         <Icon.Phone className="w-4 h-4" />
                                    </div>
                                     <input type="number" className="form-control form-control-sm" name="PhoneNumber" onChange={onChangeHandler} value={state.PhoneNumber} placeholder="Ex. (541) 754-3010" />
                                     <span style={spanStyle}>{state.errors["PhoneNumber"]}</span> 
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">Email <span className="text-danger">*</span></label> 
                                <div className="input-group">
                                     <div className="input-group-text">
                                         <Icon.Mail className="w-4 h-4" />
                                    </div> 
                                    <input type="email" className="form-control form-control-sm" name="Email" onChange={onChangeHandler} value={state.Email} placeholder="Ex. demo@mail.com" />
                                    <span style={spanStyle}>{state.errors["Email"]}</span> 
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">User Name <span className="text-danger">*</span></label> 
                                <div className="input-group"> 
                                    <div className="input-group-text">
                                        <Icon.User className="w-4 h-4" />
                                    </div> 
                                    <input type="text" className="form-control form-control-sm" name="UserName"  onChange={onChangeHandler} value={state.UserName} placeholder="Ex. Name" />
                                    {state.errors["UserName"] ? <span style={spanStyle}>{state.errors["UserName"]}</span> : ""} 
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">RoleUID <span className="text-danger">*</span></label> 
                                <Select className="custom_select" name="RoleUID" onChange={onChangeHandler} options={Role} />
                                <span style={spanStyle}>{state.errors["RoleUID"]}</span>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">Password <span className="text-danger">*</span></label> 
                                <div className="input-group">
                                     <div className="input-group-text">
                                         <Icon.Lock className="w-4 h-4" />
                                    </div>
                                     <input type="password" className="form-control form-control-sm" name="Password" onChange={onChangeHandler} value={state.Password} placeholder="Ex. Abcd@1234" />
                                     <span style={spanStyle}>{state.errors["Password"]}</span> 
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">Confirm Password <span className="text-danger">*</span> <span style={spanStyle}>{state.errors["ConfirmPassword"]}</span></label> 
                                <div className="input-group">
                                     <div className="input-group-text">
                                         <Icon.Lock className="w-4 h-4" />
                                    </div>
                                     <input type="password" className="form-control form-control-sm" name="ConfirmPassword" onChange={onChangeHandler} value={state.ConfirmPassword}  placeholder="Ex. Abcd@1234" />
                                     <span style={spanStyle}>{state.errors["ConfirmPassword"]}</span> 
                                </div>
                            </div>                          
                            
                            <div className="col-span-12 lg:col-span-12 sm:col-span-3 mt-3">
                                <button type="submit" className="btn btn-xs btn-primary mr-2 ml-2 float-right" onClick={onClickHandler} >Submit</button>
                                <button type="submit" className="btn  btn-xs btn-danger float-right" onClick={reset} >Cancel</button>                                
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>   
    )
}

export default AddUser;