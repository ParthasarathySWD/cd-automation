
import React, { useState, useEffect } from 'react';
import '../../../../css/MyOrder/orderstatus.css';
import '../../../../css/MyOrder/MyOrder.css';
import "react-data-table-component-extensions/dist/index.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import * as Icon from 'react-feather';
import axios from '../../../ThemeLayouts/repository/api';
import DataTab from '../../../components/DataTableComponents/DataTab';
import DatePicker from "react-datepicker";
import TableLink from  '../../../components/DataTableComponents/TableLink';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import "react-datepicker/dist/react-datepicker.css";
// import ReactTooltip from 'react-tooltip';
// import MyOrderWidgets from './MyOrderWidgets';
// multi select
import Select from 'react-select';

/*Style to data table*/
const customStyles = {
  headCells:{
    style:{
      backgroundColor:'#a3bfd054'
    }
  }
}

function MyOrder(){

  const [users, setUsers] = useState({});
  const [page, setPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(10);
  const [status, setstatus]  = useState([]);
  const [allusers, setallusers]  = useState([]);
  const [clients, setclients]  = useState([]);

  // To set Default Start date
  const newdate = new Date();
  newdate.setDate(newdate.getDate() - 32);
  const [startDate, setStartDate] = useState(newdate);
  const [endDate, setEndDate] = useState(new Date());
  const [skey, setKey] = useState(Math.random());
  const [filter, setFilter] = useState({ 'user': '', 'status': ''});
  

  function onStatusChange(e)
  {
    console.log(e);
    let val = e.value;
    setFilter((prevState)=>{
      return {...prevState, status: val};
    })

  }
   

  function onUserChange(e)
  {
    console.log(e);
    let val = e.value;
    setFilter((prevState)=>{
      return {...prevState, user: val};
    })

  }
  // Build filter data and make async req to api
  useEffect(()=>
  {

    const data=
    {
      user:filter.user,
      status:filter.status,
      fromdate:startDate,
      todate:endDate
    }

    setKey(Math.random());

    // fetchUsers(page, countPerPage, '', data);

  }, [filter, startDate, endDate]);

  useEffect(() => 
  {
    async function fetchOptions () 
    {
      let response = await fetchDetails();
      setstatus(response.data.status);
      setallusers(response.data.allusers);
      setclients(response.data.clients);
    }
    fetchOptions();
  }, [])
  

  // dropdown

  var StatusOption = status.map(function (val) {
    return { value: val.StatusUID, label: val.StatusName };
  })
  
  StatusOption=[{value:'', label:'All'},...StatusOption];

  var UserOption = allusers.map((val)=>{
      return {value:val.UserUID, label:val.UserName}
    })

  UserOption=[{value:'', label:'All'}, ...UserOption];

   
  /* Should be passed from props starts */
  

  const fetchUsers = async (page, size = countPerPage, searchText = "", filterData={}) => {
    
    const response = await axios.get(
      `myorders/fetchorders`, {
        params: {
          rowCount: size,
          page: page,
          searchText: searchText,
          user:filter.user,
          status:filter.status,
          fromdate:startDate,
          todate:endDate

        }
      }
    );
      console.log(response);
      return response;
    };

    // Fetch filter values
    const fetchDetails = async () => {
            
      const response = await axios.get(
        `myorders/fetchOptions`,
        {

        }
        );
        return response;
    }
    
    const handleDelete = async (row) => {
        await axios.delete(`https://reqres.in/api/users/${row.id}`);
    }
   
    //Datatable columns 
    const columndata = [
      {
        name:<b>Order Number</b>,
        selector: row => row["OrderNumber"],
        sortable: true
      },
      {
        name:<b>Loan Number</b>,
        selector: row => row["LoanNumer"],
        sortable: true
      },
      {
        name: <b>Client</b>,
        selector: row => row["ClientName"],
        sortable: true
      },
      {
        
        name: <b>Status</b>,
        cell: row => <span className="p-1 text-theme-23" style={{color:'#e89223'}}>{row['StatusName']}</span>
      },
      {
        name:<b>Action</b>,
        cell: row => 
        <div style={{marginTop:'10px'}}>
          <p key={row.OrderUID}>
            {/* <TableLink><span className="fa fa-eye p-1" style={{fontSize:'15px',color:'#464bac',fontWeight:'bold'}}></span></TableLink> */}
            <TableLink to={'/summary/'+row.OrderUID}><Icon.Edit className="w-4 h-4 text-theme-24" color='green'/></TableLink>
          </p>
        </div>
      }
    ];

   


    /* Should be passed from props Ends */

    // let clientOptions = clients.map((value, key)=>{
    //                     return <option value={value.ClientUID}>{value.ClientName}</option>
    //                   });

        return(
            <div className="main-container clearfix">
               
                      <div className="myorder-header">
                        <label for="input-state-2" className="form-label flex"><b style={{fontSize:'22px'}}>Orders List</b><Tippy content="Test Tooltip Content"><Icon.AlertCircle className="w-4 h-4 ml-2 text-theme-17" /></Tippy></label>
                      </div> 
                      <div className="grid grid-cols-12 gap-3" style={{marginTop:'10px'}}>
                        <div className="p-5 col-span-2 lg:col-span-2 sm:col-span-2">
                          <label className="ml-10 progress-count font-semibold">123</label><br/>
                          <label className="ml-6 mt-2 progress-label">Today Orders</label>
                        </div>
                        <div className="p-5 col-span-2 lg:col-span-2 sm:col-span-2">
                          <label className="ml-9 progress-count font-semibold">137</label><br/>
                          <label className="ml-6 mt-2 progress-label">All Orders</label>
                        </div>
                        <div className="p-5 col-span-2 lg:col-span-2 sm:col-span-2">
                          <label className="ml-9 progress-count font-semibold">110</label><br/>
                          <label className="mt-2 progress-label">Inprogress Orders</label>
                        </div>
                        <div className="p-5 col-span-2 lg:col-span-2 sm:col-span-2">
                          <label className="ml-10 progress-count font-semibold">27</label><br/>
                          <label className="mt-2 progress-label">Completed Orders</label>
                        </div>
                        <div className="float-right"> 
                        <Link to={'/orderentry'}><button className="btn btn-primary btn-order">Create Order</button></Link>
                        </div>
                      </div>
                     
                      <div className="child-container first-child">
                          <div className="tabs" style={{marginTop:'20px',paddingTop:'5px',height:'70px',paddingLeft:'10px'}}> 
                            <div className="grid grid-cols-12 gap-3">
                             
                              {/* Filter dropdown */}
                                
                        
                                  <div className="col-span-2 lg:col-span-2 sm:col-span-2 mt-3"> 
                                    <label className="form-label">Status</label> 
                                        <Select className="custom_select" 
                                          options={StatusOption} 
                                          name="status" 
                                          onChange={onStatusChange}
                                          menuPortalTarget={document.body}  
                                          styles={{ menuPortal: base => ({ ...base, zIndex: 9999})}}
                                        />
                                    </div>
                         

                                 
                                    <div className="col-span-2 lg:col-span-2 sm:col-span-2 mt-3"> 
                                      <label className="form-label">Users </label>
                                        <Select className="custom_select" 
                                        options={UserOption} 
                                        onChange={onUserChange}
                                        menuPortalTarget={document.body}  
                                        styles={{ menuPortal: base => ({ ...base, zIndex: 9999})}}
                                        
                                        />
                                    
                                    </div>
                               


                                
                                    <div className="col-span-2 lg:col-span-2 sm:col-span-2 mt-3 pt-0" >
                                      <label className="form-label">From Date</label> 
                                      <div className="input-group"><div className="input-group-text"><Icon.Calendar className="w-4 h-4" /></div>
                                        <DatePicker name="fromdate" className="datepicker form-control w-56 block mx-auto" popperPlacement="bottom" style={{height:'100px',borderLeft:'none'}} customStyles={{dateInput:{borderBottomWidth: 0}}} placeholderText="mm/dd/yyyy" selected={startDate} onChange={date=>setStartDate(date)}/>
                                       {/* <input data-daterange="true" className="datepicker form-control w-56 block mx-auto" />  */}
                                      </div>
                                    </div>
                                 

                                
                                    <div className="col-span-2 lg:col-span-2 sm:col-span-2 mt-3 pl-0" >
                                      <label className="form-label">To Date</label> 
                                        <div className="input-group"><div className="input-group-text"><Icon.Calendar className="w-4 h-4" /></div>
                                          <DatePicker className="datepicker form-control w-56 block mx-auto" popperPlacement="bottom" style={{height:'100px',borderLeft:'none'}} customStyles={{dateInput:{borderBottomWidth: 0}}} placeholderText="mm/dd/yyyy" name="todate" selected={endDate} onChange={date => setEndDate(date)}/>
                                       {/* <input data-daterange="true" className="datepicker form-control w-56 block mx-auto" />  */}
                                        </div>
                                    </div>
                                 

                                
                                  <div className="col-span-3 lg:col-span-3 sm:col-span-3 mt-3" style={{marginTop:'40px',marginLeft:'140px'}}>
                                        <form id="tabulator-html-filter-form" className="xl:flex sm:mr-auto" >
                                            <div className="sm:flex items-center sm:mr-4 mt-2 xl:mt-0">
                                                <input id="tabulator-html-filter-value" type="text" className="pr-2 form-control form-control-sm sm:w-40 xxl:w-full mt-2 sm:mt-0" placeholder="Search..."/>
                                            {/* </div>
                                            <div className="mt-2 xl:mt-0"> */}
                                                <button id="tabulator-html-filter-go" type="button"  className="btn btn-primary btn-sm w-10 mr-1 p-2" style={{height:'30px',marginLeft:'5px'}}>Go</button>
                                                <button id="tabulator-html-filter-reset" type="button" className="btn btn-secondary btn-sm w-full sm:w-16 mt-2 sm:mt-0 sm:ml-1" style={{marginLeft:'15px'}}>Reset</button>
                                            </div>
                                        </form>
                                    </div>
                               
                          </div>  
                        </div>
                          {/* Datatable */}
                          <div className="tab-values">
                              <div className="tab-content">
                                  <div id="all" className="order-table tab-pane in active">
                                      <DataTab            
                                        key={skey}                                                      
                                        title = ""
                                        columndata = {columndata}
                                        fetchData = {fetchUsers}
                                        setPerPage = {setCountPerPage}
                                        setCurrentPage = {setPage}
                                        />
                                  </div>
                              </div>
                          </div>
                      </div>
            </div>
            
        )
}

export default MyOrder;
