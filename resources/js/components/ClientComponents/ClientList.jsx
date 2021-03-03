import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import MyOrders from '../Datatablecomponents/MyOrders';
import TableLink from  '../../CommonComponents/TableLink';
import { useToasts } from 'react-toast-notifications';



 

function ClientList(){
  const { addToast } = useToasts();
  const history = useHistory();
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
                        <div class="custom-control custom-switch">
                          <input type="checkbox" class="custom-control-input" id={row.ClientUID} data-uid={row.ClientUID} onChange={statusChange} value={(row.Active == 1) ? 0 : 1} checked={(row.Active == 1) ? true : false}/>
                          <label class="custom-control-label mt-0" htmlFor={row.ClientUID}></label>
                        </div>
                  </div> 
    },
    {
        name:<b>Action</b>,
        cell: row => 
        <div>
            <p key={row.ClientUID}>
              <TableLink to={'/viewclient/'+row.ClientUID}><span className="fa fa-eye text-primary p-1"></span></TableLink>
              <TableLink to={'/editclient/'+row.ClientUID}><span className="fa fa-edit text-secondary p-1"></span></TableLink>
              {/* <TableLink ><span className="fa fa-trash text-danger p-1"></span></TableLink>  */}
            </p>
        </div>
    }
  ];



  const statusChange = (e) => {
    const activeStatus = {Active: e.target.value};
    const id = e.target.dataset.uid;
    // console.log(id,activeStatus);
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
    // const[status,setStatus]=useState(0);  /* Should be passed from props starts */
    const fetchUsers = async (page, size = countPerPage, searchText = "") => {
    // const activeState="0";
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

        <div className="main-container clearfix">
                  <div className="myorder-header">
                    <h5>Clients List</h5>
                    {/* <Link to={'/orderentry'}><button className="btn btn-primary btn-order">Add ORDER</button></Link> */}
                  </div> 
                  <div className="child-container status-container">
                        <div className="row mb-2 c-status-row">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
                                <div className="client-info">
                                    <div className="row">
                                      <div className="col-lg-3 col-md-4 col-sm-4 col-4 one all-one">
                                          <i className="fa fa-users fa-2x"></i>
                                      </div>
                                      <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontst">
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
                        </div>
                    </div>
                    <div className="child-container first-child">
                        <div className="tabs">
                          <div className="tab-menus">
                            <h4 className="p-2">Clients List</h4>
                            {/* <ul className="nav nav-pills nav-menu" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active" eventKey="all" href="#all" role="tab" data-toggle="pill">All Clients</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="1" href="#pending" role="tab" data-toggle="pill">Active</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" id="2" href="#completed" role="tab" data-toggle="pill">Inactive</a>
                                </li>
                            </ul> */} 
                              {/* <div className="search-div">
                                  <input type="text" className="search-input" placeholder="&#61442; search"></input>
                              </div> */}
                           </div> 
                           
                        </div>
                        <div className="tab-values p-10">
                          <div className="tab-content">
                              <div id="all" className="order-table tab-pane in active">
                                <input type="text" className="c-search-input" placeholder="&#61442; search"></input>
                                 
                                  <MyOrders                                                                  
                                    title = ""
                                    columndata = {columndata}
                                    fetchData = {fetchUsers}
                                    setPerPage = {setCountPerPage}
                                    />

                              </div>
                              <div id="pending" className="order-table tab-pane fade">
                                <input type="text" className="c-search-input" placeholder="&#61442; search"></input>
                                {/* <DataTableExtensions {...tableData} filterPlaceholder={'Search'} export={false}  print={false} > */}
                                  {/* <DataTable
                                      columns={columns}
                                      data={data}
                                      defaultSortField="title"
                                      pagination
                                      customStyles={customStyles} */}
                                      {/* // selectableRows
                                      // selectableRowsComponent={Checkbox}
                                      /> */}
                                {/* </DataTableExtensions> */}
                              </div>
                              <div id="completed" className="order-table tab-pane fade">
                                <input type="text" className="c-search-input" placeholder="&#61442; search"></input>
                                {/* <DataTableExtensions {...tableData} filterPlaceholder={'Search'} export={false} print={false} > */}
                                  {/* <DataTable
                                      columns={columns}
                                      data={data}
                                      defaultSortField="title"
                                      pagination
                                      customStyles={customStyles} */}
                                      {/* // selectableRows
                                      // selectableRowsComponent={Checkbox}
                                      /> */}
                                {/* </DataTableExtensions> */}
                              </div>
                          </div>
                        </div>
                      </div>
                    

            </div>
            
        )
}

export default ClientList;