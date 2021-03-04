import react from 'react';
import axios from 'axios';
import {useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

function ViewClient(props){
    
    const history = useHistory();
    const id = props.match.params.id;
    console.log(id);
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
        Active:''
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
                        UserName:res.data.UserName,
                        Active:res.data.Active
                    });

                })
    }
    function goBack() {
        history.push('/allclients');
    }

    return(
        <div>

        <div className="col-lg-12 col-md-12">
                <div className="card">
                    <ul className="nav nav-tabs3">
                        <li className="nav-item">
                            <a className="nav-link active">Client Details</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="card main-container">
                <div className="child-container">
                    <div className="tab-content">
                        <div className="row clearfix">
                            <div className="col-lg-12 col-md-12 col-sm-12 userdetails">
                                                
                                <div className="card "> 
                                    <div className="body">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <h5 className="font300 font-16 mb-4">Client Details</h5>   
                                            </div>
                                        </div>

                                        <div className="row">  
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Client Number : </label>
                                                                <span class="change_input_field">{state.ClientNumber} </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>   
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Client Name :</label>
                                                                <span class="change_input_field">{state.ClientName} </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Phone Number : </label>
                                                                <span class="change_input_field">{state.Phone}  </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="row">  
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Email ID : </label>
                                                                <span class="change_input_field">{state.Email} </span> 
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Address Line : </label>
                                                                <span class="change_input_field">{state.AddressLine1} </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>   
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>City Name :</label>
                                                                <span class="change_input_field">{state.CityName} </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                        </div>

                                        <div className="row">  
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>County Name : </label>
                                                                <span class="change_input_field">{state.CountyName} </span> 
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>State Name : </label>
                                                                <span class="change_input_field">{state.StateName} </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>   
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Created By :</label>
                                                                <span class="change_input_field">{state.UserName} </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                        </div>

                                        <div className="row">  
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Notes :</label>
                                                                <span class="change_input_field">{state.Notes} </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-4">
                                                <table className="table table-sm table-borderless userdetails-table">
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-td">
                                                                <label>Status :</label>
                                                                {state.Active == '1'?<span class="change_input_field">Active</span>:<span class="change_input_field">Inactive</span>}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <i class="fa fa-angle-left float-right btn btn-sm " onClick={goBack} aria-hidden="true" style={{float:'right'}}> </i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

       
    {/* <div className="view-container" style={{marginLeft:'20px',marginTop:'20px'}}>
        <h4>Client Details</h4>
        <div className="view-table" style={{marginTop:'20px',backgroundColor:'white',height:'450px',width:'500px',boxShadow:'1px 1px 8px 1px #d6d5d5'}}>
            <table className="pt-10" style={{marginLeft:'50px'}}>
                <tr className="pt-10">
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Client Number</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.ClientNumber}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Client Name</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.ClientName}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Phone Number</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.Phone}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Email ID</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.Email}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>AddressLine</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.AddressLine1}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>City</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.CityName}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>County</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.CountyName}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>State</td>
                    <td className="pl-5" style={{textAlign:'left'}}>{state.StateName}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Notes</td>
                    <td className="pl-5"style={{textAlign:'left'}}>{state.Notes}</td>
                </tr>
                <tr>
                    <td className="pl-5" style={{textAlign:'left',padding:'10px'}}>Created By</td>
                    <td className="pl-5"style={{textAlign:'left'}}>{state.UserName}</td>
                </tr>

            </table>
        </div>
    </div> */}
</div>
    )
}
export default ViewClient;