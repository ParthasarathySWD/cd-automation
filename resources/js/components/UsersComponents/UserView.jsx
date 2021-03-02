import React from 'react'
import {useState, useEffect } from 'react'
import axios from '../../repository/api';
import { Link, useHistory } from 'react-router-dom';
import '../../../css/UserView/userdetails.css'
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
            history.push('/alluser');
        }


    return (
        <div>
            
            <div className="col-lg-12 col-md-12">
                <div className="card">
                    <ul className="nav nav-tabs3">
                        <li className="nav-item">
                            <a className="nav-link active">User View</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card main-container">
                <div className="child-container">
                    <div className="tab-content">
                        {/* <div class="row clearfix">
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="card">
                                        <div class="body">
                                            <div class="row clearfix">
                                                <div class="col-sm-4">
                                                    <div class="">
                                                        <label>User Name: </label>
                                                        <span class="change_input_field">{state.UserName} </span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="">
                                                        <label>First Name: </label>
                                                        <span class="change_input_field">{state.FirstName} </span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="">
                                                        <label>Last Name: </label>
                                                        <span class="change_input_field">{state.LastName} </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="card">
                                        <div class="body">
                                            <div class="row clearfix">
                                                <div class="col-sm-4">
                                                    <div class="">
                                                        <label>Phone Number: </label>
                                                        <span class="change_input_field">{state.PhoneNumber} </span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="">
                                                        <label>Email: </label>
                                                        <span class="change_input_field">{state.Email} </span>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="">
                                                        <label>Role: </label>
                                                        <span class="change_input_field">{state.Role} </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12">
                                    <div class="card">
                                        <div class="body">
                                            <div class="row clearfix">
                                                <div class="col-sm-4">
                                                    <div class="">
                                                        <label>Active: </label>
                                                        <span class="change_input_field">{state.Active} </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    */}
                        {/* <h5 className="font300 font-16 mb-3">User Details</h5>                        
                        <table class="table table-sm table-borderless userDetails-table m-3">
                            <tbody>
                               
                                
                                
                            </tbody>
                        </table> */}

                            {/* <label className="">UserName:</label>
                            <span className="">{state.UserName}</span>
                            <label className="">FirstName:</label>
                            <span className="">{state.FirstName}</span>
                            <label className="">LastName:</label>
                            <span className="">{state.LastName}</span>
                            <label className="">PhoneNumber:</label>
                            <span className="">{state.PhoneNumber}</span>
                            <label className="">Email:</label>
                            <span className="">{state.Email}</span>
                            <label className="">Role:</label>
                            <span className="">{state.Role}</span> */}

                            <div className="row clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12 userdetails">
                                    
                                    <div className="card "> 
                                    <div className="body">
    
                                        <div className="row">
                                        

                                            <div className="col-lg-4 col-md-4 col-sm-4">

                                                
                                                    <h5 className="font300 font-16 mb-4">User Details</h5>
                                                    <table className="table table-sm table-borderless userdetails-table">
                                                        <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>User Name : </label>
                                                                <span class="change_input_field">{state.UserName} </span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                
                                            </div>
                                        </div>
                                        <div className="row">
                                        

                                            <div className="col-lg-4 col-md-4 col-sm-4">

                                                {/* <div className="body"> */}
                                                    
                                                    <table className="table table-sm table-borderless userdetails-table">
                                                        <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>First Name :</label>
                                                                <span class="change_input_field">{state.FirstName} </span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                {/* </div> */}
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">

                                                {/* <div className="body"> */}
                                                    {/* <h5 className="font300 font-16 mb-3"></h5> */}
                                                    <table className="table table-sm table-borderless userdetails-table">
                                                        <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Last Name : </label>
                                                                <span class="change_input_field">{state.LastName}  </span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                {/* </div> */}
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">

                                                {/* <div className="body"> */}
                                                    {/* <h5 className="font300 font-16 mb-3"></h5> */}
                                                    <table className="table table-sm table-borderless userdetails-table">
                                                        <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Phone Number : </label>
                                                                <span class="change_input_field">{state.PhoneNumber} </span> 
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                        <div className="row">
                                        

                                            <div className="col-lg-4 col-md-4 col-sm-4">

                                                {/* <div className="body"> */}
                                                    
                                                    <table className="table table-sm table-borderless userdetails-table">
                                                        <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Email : </label>
                                                                <span class="change_input_field">{state.Email}</span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                {/* </div> */}
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">

                                                {/* <div className="body"> */}
                                                    {/* <h5 className="font300 font-16 mb-3"></h5> */}
                                                    <table className="table table-sm table-borderless userdetails-table">
                                                        <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Role : </label>
                                                                <span class="change_input_field">{state.RoleName}</span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                {/* </div> */}
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">

                                                {/* <div className="body"> */}
                                                    {/* <h5 className="font300 font-16 mb-3"></h5> */}
                                                    <table className="table table-sm table-borderless userdetails-table">
                                                        <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Status : </label> 
                                                                <span class="change_input_field">{(state.Active == 1) ? "Active" : "Deactive" } </span>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <i class="fa fa-angle-left float-right btn btn-sm " onClick={goBack} aria-hidden="true"> </i>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </div>
                </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserView
