import React, { useState, useEffect, useCallback, useMemo } from "react";
// import axios from "axios";
import "react-data-table-component-extensions/dist/index.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import axios from '../../../ThemeLayouts/repository/api';
import DataTab from '../../../components/DataTableComponents/DataTab';
import TableLink from  '../../../components/DataTableComponents/TableLink';
import { useToasts } from 'react-toast-notifications';
import * as Icon from 'react-feather';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
function ClientList()
{
  const { addToast } = useToasts();
  const history = useHistory();

  // Datatable columns
  const columndata = [
    {
      name: <b>Client Number</b>,
      selector: "ClientNumber",
      sortable: true
    },
    {
      name: <b>Client Name</b>,
      selector: "ClientName",
      sortable: true
    },
    {
      name: <b>Phone</b>,
      selector: "Phone",
      sortable: true
    },
    {
      name: <b>Email</b>,
      selector: "Email",
      sortable: true
    },
    
    {
      name: <b>City</b>,
      selector: "CityName",
      sortable: true
    },
    {
      name: <b>Status</b>,
      cell: row => <div key={row.ClientUID}>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-switch" id={row.ClientUID} data-uid={row.ClientUID} onChange={statusChange} value={(row.Active == 1) ? 0 : 1} checked={(row.Active == 1) ? true : false}/>
                        <label class="form-check-label" htmlFor={row.ClientUID}></label>
                      </div>
                   </div> 
    },
    {
        name:<b>Action</b>,
        cell: row => 
        <div style={{marginTop:'10px'}}>
            <p key={row.ClientUID}>
              <TableLink to={'/viewclient/'+row.ClientUID}><Icon.Eye className=" mr-2" size="20" color="purple"/></TableLink>
              <TableLink to={'/editclient/'+row.ClientUID}><Icon.Edit size="20"  color="green"/></TableLink>
              {/* <TableLink ><span className="fa fa-trash text-danger p-1"></span></TableLink>  */}
            </p>
        </div>
    }
  ];

  // Function to edit active status on client list data table
  const statusChange = (e) => {
    const activeStatus = {Active: e.target.value};
    const id = e.target.dataset.uid;
    axios.put('clients/'+id, activeStatus)
      .then(res => {
        if(res.data.status)
        {
          addToast('Status Updated Successfully', { appearance: 'success', autoDismiss: 'true' });
          history.push("/dashboard");
          history.push("/allclients");
        }
        else{
          addToast('Status Updation Failed', { appearance: 'error', autoDismiss: 'true' });
        }
      })
  }

    const [page, setPage] = useState(1);
    const [countPerPage, setCountPerPage] = useState(10);   
    /* Should be passed from props starts */
    const fetchUsers = async (page, size = countPerPage, searchText = "") => {
    const response = await axios.post(
      'client',
      {
        rowCount: size,
        page: page,
        searchText: searchText,
        // activeState:activeState
      }
      );
      console.log(response);
      return response;
    };

    return(

        <div className="main-container clearfix" >

              {/* <div className="myorder-header">
                <h4>Clients List</h4>
              </div>  */}

              <div className="child-container status-container" >
                    
                  {/* client page widget cards */}
                  {/* <div className="row mb-2 c-status-row">
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
                          <div className="client-info">
                              <div className="row">
                                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 one all-one">
                                      <i className="fa fa-users fa-2x"></i>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontst">
                                      <label className="c-status-text">All Clients</label>
                                      <h4>2,210</h4>
                                  </div>
                              </div>
                          </div>
                      </div>

                      <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
                          <div className="client-info">
                              <div className="row">
                                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 one active-one">
                                      <i className="fa fa-user fa-2x"></i>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontst">
                                      <label className="c-status-text">Active Clients</label>
                                      <h4>107</h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                        
                      <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
                          <div className="client-info">
                              <div className="row">
                                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 one inactive-one">
                                      <i className="fa fa-user-times fa-2x"></i>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontst">
                                      <label className="c-status-text">Inactive Clients</label>
                                      <h4>68</h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> */}
              </div>

              <div className="child-container first-child" style={{marginTop:'20px'}}>
                  
                  {/* <div className="tabs" style={{height:'25px'}}>
                      <div className="tab-menus">
                          
                      </div>          
                  </div> */}
                  
<div className="grid grid-cols-12 gap-3">

<div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3"> 
                      {/* <div className="myorder-header"> */}
                        {/* <label><b style={{fontSize:'22px'}}> <Tippy content="Test Tooltip Content"><Icon.AlertCircle className="w-4 h-4 ml-2 text-theme-17" /></Tippy></b></label> */}
                        <label for="input-state-2" className="form-label flex"><b style={{fontSize:'22px'}}>Clients List </b><Tippy content="Test Tooltip Content"><Icon.AlertCircle className="w-4 h-4 ml-2 text-theme-17" /></Tippy></label>
                        <Link to={'/addclient'} className="btn btn-primary float-right mb-2"><Icon.Plus/>Add Client</Link>
                    {/* </div>  */}
                          <div id="all" className="order-table tab-pane in active">
                           
                            {/* <input type="text" className="c-search-input" placeholder="&#61442; search"></input> */}
                                  
                                  {/* Datatable-Client List */}
                                  <DataTab                                                                   
                                    title = ""
                                    columndata = {columndata}
                                    fetchData = {fetchUsers}
                                    setPerPage = {setCountPerPage}
                                    />
                          </div>
                      </div>
                  </div>

              </div>
        </div>
            
      )
}

export default ClientList;
