import React from 'react';
import { useToasts } from 'react-toast-notifications'
import {useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from '../../repository/api';

function EditUser(props){

    const ID = props.match.params.id;
    const history = useHistory();
    const RoleOptions = [
        {value: '1', label: 'Admin'},
        {value: '2', label: 'Customer'},
        {value: '3', label: 'Lender'}
    ];
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
            RoleUID: '',
            Active: '', 
            errors: {}

        });
        
        const [isFetched, setIsFetched] = useState(false);

        useEffect(()=>{
            if (!isFetched) {
                
                getUser();
                setIsFetched(true);
                // isFetched = true;

            }
        })

        function getUser(){
            
            axios.get("/users/"+ID)
                .then(res => {

                     res.data.map((user,index) => {
                        setState({ 
                        
                            FirstName: user.FirstName,
                            LastName: user.LastName,
                            PhoneNumber: user.PhoneNumber,
                            Email: user.Email,
                            UserName: user.UserName,
                            RoleUID: user.RoleUID,
                            Active: user.Active,
                            errors: {}
        
                         });
                     })
    
                })
        }

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

        //  //  Password
        // if(!state.Password){
        //     formIsValid = false;
        //     errors["Password"] = "Field is Required";
        //  }
        //  else{
        //     if(typeof state.Password !== "undefined"){
        //         if(!state.Password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$_!%*?&])[A-Za-z\d@#$!_%*?&]{8,}$/)){
        //            formIsValid = false;
        //            errors["Password"] = "Required minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
        //         }        
        //      }
        //  }

        // //  ConfirmPassword
        // if(!state.ConfirmPassword){
        //     formIsValid = false;
        //     errors["ConfirmPassword"] = "Field is Required";
        //  }
        //  else{
        //     if(state.ConfirmPassword !== state.Password){
                
        //            formIsValid = false;
        //            errors["ConfirmPassword"] = "Password does not match";
                        
        //      }
        //  }
         
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

        if(handleValidation()){
            
            const formData = {
                FirstName: state.FirstName,
                LastName: state.LastName,
                PhoneNumber: state.PhoneNumber,
                Email: state.Email,
                UserName: state.UserName,                
                RoleUID: state.RoleUID,
                Active: state.Active
            };
            // console.log(formData)
            // return false;

            
            axios.put("users/"+ID, formData)
                .then(res => {
                    addToast('Data Updated Successfully', { appearance: 'success', autoDismiss: 'true' });
	                 setState({ 

						FirstName: '',
						LastName: '',
						PhoneNumber: '',
						Email: '',
						UserName: '',
						Password: '',
						ConfirmPassword: '',
						RoleUID: '',
                        Active: '',
						errors: {}

	                 });history.push("/alluser");

                })

         }else{
            addToast("Invalid Input", { appearance: 'error', autoDismiss: 'true'});
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

         });history.push('/alluser');
    };
            

    let RoleOption = RoleOptions.map((role,index) => {
        if (role.value== state.RoleUID) {
            return <option key={index} selected value={role.value}>{role.label}</option> 
        }
        else{
            return <option key={index} value={role.value}>{role.label}</option>
        }
    })

		return (
			<div>
                
				<div className="block-header">
					<div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <h1>Edit User</h1>
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
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>First Name <span className="text-danger">*</span></label><br/>
                                            <input className="border" size="50" type="text" name="FirstName"  onChange={onChangeHandler} value={state.FirstName}/>
                                            {state.errors["FirstName"] ? <span style={spanStyle}>{state.errors["FirstName"]}</span> : ""}
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Last Name <span className="text-danger">*</span></label><br/>
                                            <input className="border" size="50" type="text" name="LastName" onChange={onChangeHandler} value={state.LastName}/>
                                            <span style={spanStyle}>{state.errors["LastName"]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Phone <span className="text-danger">*</span></label><br/>
                                            <input className="border" size="50" type="text" name="PhoneNumber" onChange={onChangeHandler} value={state.PhoneNumber}/>
                                            <span style={spanStyle}>{state.errors["PhoneNumber"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Enter Your Email <span className="text-danger">*</span></label><br/>
                                            <input className="border" size="50" type="email" name="Email" onChange={onChangeHandler} value={state.Email}/>
                                            <span style={spanStyle}>{state.errors["Email"]}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>User Name <span className="text-danger">*</span></label><br/>
                                            <input className="border" size="50" type="text" name="UserName" onChange={onChangeHandler} value={state.UserName}/>
                                            <span style={spanStyle}>{state.errors["UserName"]}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>RoleUID <span className="text-danger">*</span></label><br/>
                                            
                                                <select name="RoleUID" id="RoleUID" className="border show-tick" onChange={onChangeHandler} style={{width:'440px',height:'30px'}}>
                                                    <option  value="">-Select-</option>
                                                    {RoleOption}                                                    
                                                </select>
                                            
                                            <span style={spanStyle}>{state.errors["RoleUID"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Status <span className="text-danger">*</span></label><br/>
                                
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id='{row.UserUID}' name="Active" onChange={onChangeHandler} value={(state.Active == 1) ? 0 : 1} checked={(state.Active == 1) ? true : false}/>
                                                <label class="custom-control-label mt-0" htmlFor='{row.UserUID}'></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 align-right mt-3">
                                        <button type="submit" className="btn btn-xs btn-primary" onClick={onClickHandler} >Submit</button>
                                        <button type="submit" className="btn  btn-xs btn-danger" onClick={reset} >Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

			</div>
		);
}


export default EditUser;