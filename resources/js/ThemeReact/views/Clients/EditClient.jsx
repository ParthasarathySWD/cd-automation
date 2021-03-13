import React from 'react';
import ReactDOM from 'react-dom';
import { useToasts } from 'react-toast-notifications'
import {useState, useEffect } from 'react'
import * as Icon from 'react-feather';
import { Router, Route, Link, browserHistory, IndexRoute, useHistory  } from 'react-router'
import axios from '../../../ThemeLayouts/repository/api';
import { template } from 'lodash';
import './clientStyle.css';
import Select from 'react-select';

function EditClient(props){

   
    const id = props.match.params.id;
    const history = useHistory();
    // history.push('/clientslist');
    
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
            Active:'',
            errors: {}

        });

        const [isFetched, setIsFetched] = useState(false);

    useEffect(()=>{
        if (!isFetched) {
            
            fetchClient();
            setIsFetched(true);
            // isFetched = true;

        }
    })

    function fetchClient(){
            
        axios.get("/clients/"+id)
            .then(res => {
                
                 setState({ 
                    
                    ClientNumber: res.data.ClientNumber,
                    ClientName: res.data.ClientName,
                    Phone: res.data.Phone,
                    Email: res.data.Email,
                    AddressLine1: res.data.AddressLine1,
                    CityName: res.data.CityName,
                    CountyName: res.data.CountyName,
                    StateName: res.data.StateName,
                    Notes:res.data.Notes,
                    Active:res.data.Active,
                    errors: {}

                        });

            })
    }
    
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

    function onChangeHandler(e)
    {
      
        // const activeStatus = e.target.value;
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    };

    function onClickHandler(){
        // addToast("Hi", { appearance: 'success' });
    
        if(handleValidation()){
            
            // const data = new FormData();

            const data={
                
                ClientNumber: state.ClientNumber,
                ClientName: state.ClientName,
                Phone: state.Phone,
                Email: state.Email,
                AddressLine1: state.AddressLine1,
                CityName: state.CityName,
                CountyName: state.CountyName,
                StateName: state.StateName,
                Notes:state.Notes,
                Active:state.Active
            };

            // data.append('ClientNumber', state.ClientNumber);
            // data.append('ClientName', state.ClientName);
            // data.append('Phone', state.Phone);
            // data.append('Email', state.Email);
            // data.append('AddressLine1',state.AddressLine1);
            // data.append('CityName',state.CityName);
            // data.append('CountyName',state.CountyName);
            // data.append('StateName',state.StateName);
            // data.append('Notes',state.Notes);
            
            axios.put("clients/"+id, data)
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
                    history.push("/allclients");

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
                                <h2 className="font-medium text-base mr-auto">Contact Information</h2>
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
                                <h2 className="font-medium text-base mr-auto">Template</h2>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-6"> 
                                <label className="form-label">Template</label> 
                                <div className="input-group"> <div className="input-group-text"><Icon.Server className="w-4 h-4" /></div> 
                                    <Select options={templateOptions} 
                                        selected={selected} 
                                        menuPortalTarget={document.body}  
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999})}}
                                    /> 
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
                                    <div class="form-check">
                                        <label className="form-label mr-4">Active</label> 
                                        <input type="checkbox" name="Active" class="form-check-switch" id={state.ClientUID} data-uid={state.ClientUID} onChange={onChangeHandler} value={(state.Active == 1) ? 0 : 1} checked={(state.Active == 1) ? true : false}/>
                                        <label class="form-check-label" htmlFor={state.ClientUID}></label>
                                    </div>
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

export default EditClient;