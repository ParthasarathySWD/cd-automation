import React from 'react';
import ReactDOM from 'react-dom';
import { useToasts } from 'react-toast-notifications'
import {useState, useEffect } from 'react'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
// import {Form,FormLabel, FormGroup, FormControl, ControlLabel, Col, Button,Card} from 'react-bootstrap';

import Select from '../../CommonComponents/ReactSelect/SelectBox';
import { template } from 'lodash';

function AddClient(){

    const spanStyle = {
        color: 'red',
        fontSize: 12,
      };
	    const { addToast } = useToasts();
        const [state, setState] = useState({
            
            ClientNumber: '',
            ClientName: '',
            Phone: '',
            Email: '',
            AddressLine1: '',
            CityName: '',
            CountyName: '',
            StateName: '',
            Notes:'',
            errors: {}

        });

        function handleValidation(){
            let errors = {};
            let formIsValid = true;
    
            // ClientNumber
            if(!state.ClientNumber){
                formIsValid = false;
                errors["ClientNumber"] = "Client Number is Required";
             }
             
    
            //  ClientName
             if(!state.ClientName){
                formIsValid = false;
                errors["ClientName"] = "Client Name is Required";
             }
            
    
    
            //  PhoneNumber
             if(!state.Phone){
                formIsValid = false;
                errors["Phone"] = "Phone Number is Required";
             }
             else{
                if(typeof state.Phone !== "undefined"){
                    if(!state.Phone.match(/^[0-9]{1,10}$/)){
                       formIsValid = false;
                       errors["Phone"] = "Invalid PhoneNumber";
                    }        
                 }
             }
    
             //Email
             if(!state.Email){
                formIsValid = false;
                errors["Email"] = "Email is Required";
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
    
            //  Address
            if(!state.AddressLine1){
                formIsValid = false;
                errors["AddressLine1"] = "Address is Required";
             }
            //  else{
            //     if(typeof state.UserName !== "undefined"){
            //         if(!state.UserName.match(/^[a-zA-Z]+$/)){
            //            formIsValid = false;
            //            errors["UserName"] = "Only letters";
            //         }        
            //      }
            //  }
    
             //  City
            if(!state.CityName){
                formIsValid = false;
                errors["CityName"] = "City is Required";
             }
            
    
            //  County
            if(!state.CountyName){
                formIsValid = false;
                errors["CountyName"] = "County is Required";
             }
            
             
            //  State
             if(!state.StateName){
                formIsValid = false;
                errors["StateName"] = "State is Required";
             }

             //  Notes
             if(!state.Notes){
                formIsValid = false;
                errors["Notes"] = "Notes Required";
             }
    
             setState(prevState => ({ ...prevState, errors: errors }));
            return formIsValid;
    
        }

    function onChangeHandler(e){
        console.log(e);
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));

    };

    function onClickHandler(){
        // addToast("Hi", { appearance: 'success' });

        if(handleValidation()){
            
            const data = new FormData();

            data.append('ClientNumber', state.ClientNumber);
            data.append('ClientName', state.ClientName);
            data.append('Phone', state.Phone);
            data.append('Email', state.Email);
            data.append('AddressLine1',state.AddressLine1);
            data.append('CityName',state.CityName);
            data.append('CountyName',state.CountyName);
            data.append('StateName',state.StateName);
            data.append('Notes',state.Notes);

            axios.post("clients", data, {
            })
                .then(res => {
                    addToast(res.data.message, { appearance: 'success' });
	                 setState({ 

                        ClientNumber: '',
                        ClientName: '',
                        Phone: '',
                        Email: '',
                        AddressLine1: '',
                        CityName: '',
                        CountyName: '',
                        StateName: '',
                        Notes:'',
                        errors: {}

	                 });

                })

         }else{
            const data = new FormData();

            axios.post("client", data, {
            })
                .then(res => {
                    addToast("Invalid Input", { appearance: 'error' });
                })
         }

        
    };
   
    function reset(){
        setState({ 

            ClientNumber: '',
            ClientName: '',
            Phone: '',
            Email: '',
            AddressLine1: '',
            CityName: '',
            CountyName: '',
            StateName: '',
            Notes:'',
            errors: {}

        });
   };

   const templateOptions = [
        { value: '1', label: 'Closing Template'},
        { value: '2', label: 'Mortage Template' },
        { value: '3', label: 'Signing Template' }
    ]

    const selected = [{label: 'Closing Template', value: '1'}];
   
       
      return (
        <>
       <div className="main-container add-client">
				<div className="block-header" id="headername">
					<div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12">                            
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
                            <div className="card-title">
                                <h6 className="Add">Add Client</h6>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label className="field-label" >Client Number<span className="text-danger">*</span></label>
                                            <input type="text" name="ClientNumber" className="border" autoFocus="autofocus" value={state.ClientNumber} onChange={onChangeHandler}/>
                                            <span style={spanStyle}>{state.errors["ClientNumber"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                       
                                        <div className="form-group">
                                            <label className="field-label" >Client Name<span className="text-danger">*</span></label>
                                            <input type="text" name="ClientName" className="border" value={state.ClientName} onChange={onChangeHandler}/>
                                            <span style={spanStyle}>{state.errors["ClientName"]}</span>
                                        </div>
                                    </div>
                                
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label" >Phone<span className="text-danger">*</span></label>
                                        <input type="text" name="Phone" className="border" value={state.Phone} onChange={onChangeHandler}/>
                                        <span style={spanStyle}>{state.errors["Phone"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-grouo">
                                            
                                        <label className="field-label" >Email<span className="text-danger">*</span></label>
                                        <input type="email" name="Email" className="border" value={state.Email} onChange={onChangeHandler}/>
                                        <span style={spanStyle}>{state.errors["Email"]}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label" >Address Line1<span className="text-danger">*</span></label>
                                        <input type="text" name="AddressLine1" className="border" value={state.AddressLine1} onChange={onChangeHandler}/>
                                        <span style={spanStyle}>{state.errors["AddressLine1"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label" >City<span className="text-danger">*</span></label><br/>
                                        <input type="text" name="CityName" className="border" value={state.CityName} onChange={onChangeHandler}/>
                                        <span style={spanStyle}>{state.errors["CityName"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label">County<span className="text-danger">*</span></label>
                                        <input type="text" name="CountyName" className="border" value={state.CountyName} onChange={onChangeHandler}/>
                                        <span style={spanStyle}>{state.errors["CountyName"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                        <label className="field-label">State<span className="text-danger">*</span></label>
                                        <input type="text" name="StateName" className="border" value={state.StateName} onChange={onChangeHandler}/>
                                        <span style={spanStyle}>{state.errors["StateName"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group">
                                            <label className="field-label">State<span className="text-danger">*</span></label>
                                            <Select options={templateOptions} selected={selected}/>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                        <label className="field-label" >Notes<span className="text-danger">*</span></label><br/>
                                        <textarea name="Notes" rows="1" cols="115" className="border text-area" value={state.Notes} onChange={onChangeHandler}></textarea>
                                        <span style={spanStyle}>{state.errors["Notes"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 align-right">
                                        <button type="submit" className="btn btn-xs btn-primary mr-2" onClick={onClickHandler} >SUBMIT</button>
                                        <button type="submit" className="btn btn-xs btn-danger mr-4" onClick={reset} >CANCEL</button>
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

export default AddClient;