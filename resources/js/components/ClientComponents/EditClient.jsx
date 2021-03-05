import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import {useState, useEffect } from 'react';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
// import {Form,FormLabel, FormGroup, FormControl, ControlLabel, Col, Button,Card} from 'react-bootstrap';
import axios from 'axios';
import { forEach } from 'lodash';

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


  
    
    return (
        <>
        <div className="main-container add-client">
                <div className="row clearfix">
                
                </div>
            
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="card">
                        <div className="body">
                            <div className="row clearfix">
                                <div className="col-sm-6 align-left">
                                    <h4>Edit Client</h4>
                                    <span></span>
                                </div>
                                <div className="col-sm-6 pull-right" > 
                                    <div className="form-group row">
                                        <label className="field-label pt-10" style={{marginLeft:'370px'}}>Active</label>
                                        <div className="col-sm-2">
                                            <input type="checkbox" name="Active" id={state.ClientUID} className="form-control  pt-10" value={(state.Active == 1) ? 0 : 1} checked={(state.Active == 1) ? true : false} onChange={onChangeHandler}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <fieldset className="scheduler-border">
                                <legend className="scheduler-border" style={{fontSize:'16px',fontWeight:'bold'}}>Client Information</legend>
                                <div className="row clearfix">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="field-label" >Client Number<span className="text-danger">*</span></label>
                                            <input type="text" name="ClientNumber" className="border" size="50" autoFocus="autofocus" value={state.ClientNumber} onChange={onChangeHandler}/>
                                            <span style={spanStyle}>{state.errors["ClientNumber"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                    
                                        <div className="form-group">
                                            <label className="field-label" >Client Name<span className="text-danger">*</span></label>
                                            <input type="text" name="ClientName" className="border" size="50" value={state.ClientName} onChange={onChangeHandler}/>
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
                                        <div className="form-grouo">   
                                            <label className="field-label" >Email<span className="text-danger">*</span></label><br/>
                                            <input type="email" name="Email" className="border" value={state.Email} size="50" onChange={onChangeHandler}/>
                                            <span style={spanStyle}>{state.errors["Email"]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="field-label" >Address Line1<span className="text-danger">*</span></label><br/>
                                            <input type="text" name="AddressLine1" className="border" size="50" value={state.AddressLine1} onChange={onChangeHandler}/>
                                            <span style={spanStyle}>{state.errors["AddressLine1"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label className="field-label">City<span className="text-danger">*</span></label><br/>
                                        <input type="text" name="CityName" className="border" size="50" value={state.CityName} onChange={onChangeHandler}/>
                                        <span style={spanStyle}>{state.errors["CityName"]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label className="field-label">County<span className="text-danger">*</span></label><br/>
                                        <input type="text" name="CountyName" className="border" size="50" value={state.CountyName} onChange={onChangeHandler}/>
                                        <span style={spanStyle}>{state.errors["CountyName"]}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                        <label className="field-label">State<span className="text-danger">*</span></label><br/>
                                        <input type="text" name="StateName" className="border" size="50" value={state.StateName} onChange={onChangeHandler}/>
                                        <span style={spanStyle}>{state.errors["StateName"]}</span>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                                <div className="row clearfix">
                                    <div className="col-sm-8">
                                        <div className="form-group">
                                            <label className="field-label" >Notes<span className="text-danger">*</span></label><br/>
                                            <textarea name="Notes" rows="1" cols="118" className="border text-area" value={state.Notes} onChange={onChangeHandler}></textarea>
                                            <span style={spanStyle}>{state.errors["Notes"]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row clearfix">
                                    <div className="col-sm-12 align-right">
                                        <button type="submit" className="btn btn-xs btn-primary mr-2" onClick={onClickHandler} >Submit</button>
                                        <button type="submit" className="btn  btn-xs btn-danger" onClick={reset} >Cancel</button>
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

export default EditClient;