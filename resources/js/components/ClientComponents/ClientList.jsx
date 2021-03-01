import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import MyOrders from '../Datatablecomponents/MyOrders';
import TableLink from  '../../CommonComponents/TableLink';


const columndata = [
    {
      name: "Client Number",
      selector: "ClientNumber",
      sortable: true
    },
    {
      name: "Client Name",
      selector: "ClientName",
      sortable: true
    },
    {
      name: "Phone",
      selector: "Phone",
      sortable: true
    },
    {
      name: "Email",
      selector: "Email",
      sortable: true
    },
    // {
    //     name: "AddressLine",
    //     selector: "AddressLine1",
    //     sortable: true
    // },
    {
        name: "City",
        selector: "CityName",
        sortable: true
    },
    {
        name:<b>Action</b>,
        cell: row => 
        <div>
            <p key={row.UserUID}>
              <TableLink to={'/viewclient/'+row.ClientUID}><span className="fa fa-eye text-primary p-1"></span></TableLink>
              <TableLink to={'/editclient/'+row.ClientUID}><span className="fa fa-edit text-secondary p-1"></span></TableLink>
              {/* <TableLink ><span className="fa fa-trash text-danger p-1"></span></TableLink>  */}
            </p>
        </div>
    }
  ];

function ClientList(){

    const [page, setPage] = useState(1);
    const [countPerPage, setCountPerPage] = useState(10);     /* Should be passed from props starts */
    const fetchUsers = async (page, size = countPerPage, searchText = "") => {
    
    const response = await axios.post(
      `client`,
      {
        rowCount: size,
        page: page,
        searchText: searchText,
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
                            <ul className="nav nav-pills nav-menu" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active" href="#all" role="tab" data-toggle="pill">All Clients</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#pending" role="tab" data-toggle="pill">Active</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#completed" role="tab" data-toggle="pill">Inactive</a>
                                </li>
                            </ul>
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