import React from 'react'
import {useState, useEffect } from 'react'
import axios from '../../../ThemeLayouts/repository/api';
import { Link, useHistory } from 'react-router-dom';
import * as Icon from 'react-feather';
import Select from 'react-select';
// import '../../../css/UserView/userdetails.css'
function UserView(props) {
    const history = useHistory();
    const ID = props.match.params.id;
    const [state, setState] = useState({

        FirstName: '',
        LastName: '',
        PhoneNumber: '',
        Email: '',
        UserName: '',
        RoleUID: '',
        Active:''

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

                    res.data.map((user, index) => {
                        setState({ 
                        
                            FirstName: user.FirstName,
                            LastName: user.LastName,
                            PhoneNumber: user.PhoneNumber,
                            Email: user.Email,
                            UserName: user.UserName,
                            RoleUID: user.RoleUID,
                            RoleName: user.RoleName,
                            Active: user.Active
                            
        
                         });
                    })
    
                })
        }

        function goBack() {
            history.push('/allusers');
        }


    return (
        <div>
            

            
            <div className="grid grid-cols-12 gap-3 mt-5">
                <div className="intro-y col-span-12 lg:col-span-12">
                    <div className="intro-y box  p-5">
                        
                        <div className="grid grid-cols-12 gap-3">
                            <div className="intro-y col-span-12 lg:col-span-12">
                                <h2 className="font-medium text-base mr-auto">
                                    User Details
                                </h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-3">
                            
                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">User Name </label> 
                                <div className="input-group"> 
                                    <div className="input-group-text">
                                        <Icon.User className="w-4 h-4" />
                                    </div> 
                                    <input type="text" className="form-control form-control-sm" name="UserName"   value={state.UserName} readOnly placeholder="Ex. Name" />
                                    
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">First Name </label> 
                                <div className="input-group"> 
                                    <div className="input-group-text">
                                        <Icon.User className="w-4 h-4" />
                                    </div> 
                                    <input type="text" className="form-control form-control-sm" name="FirstName"   value={state.FirstName} readOnly placeholder="Ex. Name" />
                                     
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">Last Name </label> 
                                <div className="input-group"> 
                                    <div className="input-group-text">
                                        <Icon.User className="w-4 h-4" />
                                    </div> 
                                    <input type="text" className="form-control form-control-sm" name="LastName"   value={state.LastName} readOnly placeholder="Ex. Name" />
                                    
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">Phone</label> 
                                <div className="input-group">
                                     <div className="input-group-text">
                                         <Icon.Phone className="w-4 h-4" />
                                    </div>
                                     <input type="number" className="form-control form-control-sm" name="PhoneNumber"  value={state.PhoneNumber}  readOnly placeholder="Ex. (541) 754-3010" />
                                    
                                </div>
                            </div>

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">Email </label> 
                                <div className="input-group">
                                     <div className="input-group-text">
                                         <Icon.Mail className="w-4 h-4" />
                                    </div> 
                                    <input type="email" className="form-control form-control-sm" name="Email"  value={state.Email} readOnly placeholder="Ex. demo@mail.com" />
                                    
                                </div>
                            </div>

                            

                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3"> 
                                <label className="form-label">Role </label> 
                                <div className="input-group"> 
                                    <div className="input-group-text">
                                        <Icon.Check className="w-4 h-4" />
                                    </div> 
                                    <input type="text" className="form-control form-control-sm" name="RoleName"   value={state.RoleName} readOnly placeholder="Ex. Name" />
                                    
                                </div>
                            </div>

                                                      
                            
                            <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3">
                                <label className="form-label">Status </label>
                                <div class="form-check">
                                    <input type="checkbox" className="form-check-switch"   value={(state.Active == 1) ? 0 : 1} checked={(state.Active == 1) ? true : false} readOnly/>
                                    <label className="form-check-label" htmlFor={state.UserUID}></label>
                                </div>
                                
                            </div>

                            <div className="col-span-12 lg:col-span-12 sm:col-span-3 mt-3">
                                <button  className="btn btn-xs btn-primary mr-2 ml-2 float-right" onClick={goBack} ><Icon.ChevronLeft/></button>                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserView
