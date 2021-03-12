import React from 'react';
import ReactDOM from 'react-dom';
import { useToasts } from 'react-toast-notifications'
import {useState, useEffect } from 'react'
import * as Icon from 'react-feather';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
// import {Form,FormLabel, FormGroup, FormControl, ControlLabel, Col, Button,Card} from 'react-bootstrap';

// import Select from '../../CommonComponents/ReactSelect/SelectBox';
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
       {/* <div className="main-container add-client">
				
				<div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="card">
                            <div className="">
                                <h4 className="card-title pl-2">Add Client</h4>
                            </div>
                            <div className="body">
            
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border" style={{fontSize:'16px',fontWeight:'bold'}}>Client Information</legend>
                                    <div className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="field-label" >Client Number<span className="text-danger">*</span></label><br/>
                                                <input type="text" name="ClientNumber" className="border" autoFocus="autofocus" size="50" value={state.ClientNumber} onChange={onChangeHandler}/>
                                                <span style={spanStyle}>{state.errors["ClientNumber"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6"> 
                                            <div className="form-group">
                                                <label className="field-label" >Client Name<span className="text-danger">*</span></label><br/>
                                                <input type="text" name="ClientName" className="border" value={state.ClientName} size="50" onChange={onChangeHandler}/>
                                                <span style={spanStyle}>{state.errors["ClientName"]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>


                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border" style={{fontSize:'16px',fontWeight:'bold'}}>Contact Information</legend>
                                    <div className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="field-label" >Phone<span className="text-danger">*</span></label><br/>
                                                <input type="text" name="Phone" className="border" value={state.Phone} size="50" onChange={onChangeHandler}/>
                                                <span style={spanStyle}>{state.errors["Phone"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">         
                                                <label className="field-label" >Email<span className="text-danger">*</span></label><br/>
                                                <input type="email" name="Email"  value={state.Email}  onChange={onChangeHandler}/>
                                                <span style={spanStyle}>{state.errors["Email"]}</span>
                                            </div>
                                        </div>
                                    </div>
                                
                                    <div className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="field-label" >Address Line1<span className="text-danger">*</span></label><br/>
                                                <input type="text" name="AddressLine1"  value={state.AddressLine1}  onChange={onChangeHandler}/>
                                                <span style={spanStyle}>{state.errors["AddressLine1"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label className="field-label" >City<span className="text-danger">*</span></label><br/>
                                                <input type="text" name="CityName" value={state.CityName} onChange={onChangeHandler}/>
                                                <span style={spanStyle}>{state.errors["CityName"]}</span>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div className="row clearfix">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <label className="field-label">County<span className="text-danger">*</span></label>
                                            <input type="text" name="CountyName" value={state.CountyName}  onChange={onChangeHandler}/>
                                            <span style={spanStyle}>{state.errors["CountyName"]}</span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                            <label className="field-label">State<span className="text-danger">*</span></label>
                                            <input type="text" name="StateName" value={state.StateName}  onChange={onChangeHandler}/>
                                            <span style={spanStyle}>{state.errors["StateName"]}</span>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset className="scheduler-border">
                                    <legend className="scheduler-border" style={{fontSize:'16px',fontWeight:'bold'}}>Template</legend>
                                    <div className="row clearfix">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label className="field-label">Template<span className="text-danger">*</span></label>
                                                <Select options={templateOptions} selected={selected}/>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="row clearfix">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="field-label" >Notes<span className="text-danger">*</span></label><br/>
                                            <textarea name="Notes"  value={state.Notes} onChange={onChangeHandler}></textarea>
                                            <span style={spanStyle}>{state.errors["Notes"]}</span>
                                        </div>
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
            </div> */}
            <div className="grid grid-cols-12 gap-3 mt-5">
                <div className="intro-y col-span-12 lg:col-span-12">
                    <div className="intro-y box  p-5">
                        
                        <div className="grid grid-cols-12 gap-3">
                            <div className="intro-y col-span-12 lg:col-span-12">
                                <h2 className="font-medium text-base mr-auto">
                                Client Information
                                </h2>
                               
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-6 lg:col-span-6 sm:col-span-3 mt-6"> 
             <label className="form-label">Client Number<span className="text-danger">*</span></label> 
             <div className="input-group" > <div className="input-group-text"><Icon.Edit className="w-4 h-4"/></div>
              <input type="text" className="form-control form-control-sm" name="ClientNumber" value={state.ClientNumber} onChange={onChangeHandler}/> </div>
              <span style={spanStyle}>{state.errors["ClientNumber"]}</span>
           </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-6"> 
             <label className="form-label">Client Name<span className="text-danger">*</span></label> 
             <div className="input-group"> <div className="input-group-text"><Icon.User className="w-4 h-4" /></div>
             <input type="text" className="form-control form-control-sm" name="ClientName" value={state.ClientName}  onChange={onChangeHandler}/> </div>
             <span style={spanStyle}>{state.errors["ClientName"]}</span>
             </div>
                        </div>
                    </div>
                   </div>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-5">
                <div className="intro-y col-span-12 lg:col-span-12">
                    <div className="intro-y box  p-5">
                        
                        <div className="grid grid-cols-12 gap-3">
                            <div className="intro-y col-span-12 lg:col-span-12">
                                <h2 className="font-medium text-base mr-auto">
                                Contact Information
                                </h2>
                              </div>
                        </div>
                        <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-6"> 
             <label className="form-label">Phone<span className="text-danger">*</span></label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Phone className="w-4 h-4" /></div>
             <input type="text" className="form-control form-control-sm" name="Phone" value={state.Phone}  onChange={onChangeHandler}/> </div>
             <span style={spanStyle}>{state.errors["Phone"]}</span>
             </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-6"> 
             <label className="form-label">Email<span className="text-danger">*</span></label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Mail className="w-4 h-4" /></div> 
             <input type="email" className="form-control form-control-sm" name="Email"  value={state.Email}  onChange={onChangeHandler}/> </div>
             <span style={spanStyle}>{state.errors["Email"]}</span>
             </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-6"> 
             <label className="form-label">Address Line1<span className="text-danger">*</span></label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Home className="w-4 h-4" /></div> 
             <input type="text" className="form-control form-control-sm" name="AddressLine1"  value={state.AddressLine1}  onChange={onChangeHandler}/> </div>
             <span style={spanStyle}>{state.errors["AddressLine1"]}</span>
             </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-6"> 
             <label className="form-label">City<span className="text-danger">*</span></label> 
             <div className="input-group"> <div className="input-group-text"><Icon.MapPin className="w-4 h-4" /></div> 
             <input type="text" className="form-control form-control-sm" name="CityName" value={state.CityName} onChange={onChangeHandler}/> </div>
             <span style={spanStyle}>{state.errors["CityName"]}</span>
           </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-6"> 
             <label className="form-label">County<span className="text-danger">*</span></label> 
             <div className="input-group"> <div className="input-group-text"><Icon.MapPin className="w-4 h-4" /></div>
              <input type="text" className="form-control form-control-sm" name="CountyName" value={state.CountyName}  onChange={onChangeHandler}/> </div>
           </div>
           <div className="col-span-6 lg:col-span-6 sm:col-span-6 mt-6"> 
             <label className="form-label">State<span className="text-danger">*</span></label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Navigation className="w-4 h-4" /></div> 
             <input type="text" className="form-control form-control-sm" name="StateName" value={state.StateName}  onChange={onChangeHandler} /> </div>
             <span style={spanStyle}>{state.errors["StateName"]}</span>
           </div>
           
                        </div>
                    </div>
                    </div>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-5">
                <div className="intro-y col-span-12 lg:col-span-12">
                    <div className="intro-y box  p-5">
                        
                        <div className="grid grid-cols-12 gap-3">
                            <div className="intro-y col-span-12 lg:col-span-12">
                                <h2 className="font-medium text-base mr-auto">
                                Template
                                </h2>
                               
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-6"> 
             <label className="form-label">Template</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Edit3 className="w-4 h-4" /></div> 
             {/* <Select options={templateOptions} selected={selected}/>     */}
             </div>
           </div>
           </div>
                    </div>
                   </div>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-5">
                <div className="intro-y col-span-12 lg:col-span-12">
                    <div className="intro-y box  p-5">
                        
                    <div className="grid grid-cols-12 gap-3">
                            <div className="intro-y col-span-12 lg:col-span-12">
                                <h2 className="font-medium text-base mr-auto">
                                Notes
                                </h2>
                             </div>
                        </div>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-6"> 
             <label className="form-label">Notes</label> 
             <div className="input-group"> <div className="input-group-text"><Icon.Edit3 className="w-4 h-4" /></div> 
             <input type="text"  className="form-control form-control-sm" name="Notes"  value={state.Notes} onChange={onChangeHandler}></input>
             <span style={spanStyle}>{state.errors["Notes"]}</span>
             </div>
           </div>
        </div>
                    </div>
                   </div>
            </div>
            
           
                   
            <div className="grid grid-cols-12 gap-3 mt-5">
                <div className="intro-y col-span-12 lg:col-span-12">
                    <div className="intro-y box  p-5">
                      
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-6"> 
                            <div className="col-span-12 lg:col-span-12 sm:col-span-3 mt-3">
                                 <button type="submit" className="btn btn-xs btn-primary mr-2 ml-2 float-right"  onClick={onClickHandler} >Submit</button>
                                <button type="submit" className="btn btn-xs btn-primary mr-2 ml-2 float-right" onClick={reset} >Cancel</button>
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