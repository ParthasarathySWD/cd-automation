import React, { useState, useEffect } from 'react';
import '../../../css/MyOrder/MyOrder.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
// import { columns, data } from './DataTab';
import axios from 'axios';

/*Style to data table*/
const customStyles = {
  headCells:{
    style:{
      backgroundColor:'#a3bfd054'
    }
  }
}
const columns = [
  {
    name: <b>Order Number</b>,
    selector: "OrderId",
    sortable: true
    
  },
  {
    name: <b>Loan Number</b>,
    selector: "LoanNumber",
    sortable: true
  },   
  {
    name: <b>Customer</b>,
    selector: "Customer",
    sortable: true

  },
  {
    name: <b>Loan Type</b>,
    selector: "LoanType",
    sortable: true
  },
  {
    name: <b>Status</b>,
    selector: "status",
    sortable: true
      
  },
  {
    name:<b>Action</b>,
    selector:"action",
    cell: row => <div><a href="#"><span className="fa fa-eye text-primary p-1"></span></a>
    <a href="#"><span className="fa fa-edit text-secondary p-1"></span></a>
    <a href="#"><span className="fa fa-trash text-danger p-1"></span></a>
    </div>
  }
   
];

const data=[
  {
      OrderId: "100 291",
      LoanNumber: "1024444234",
      Customer:"Amy",
      LoanType:"Housing",
      status:"Pending"
  },
  {
      OrderId: "100 231",
      LoanNumber: "1223343455",
      Customer:"Sarah Graham",
      LoanType:"Education",
      status:"Completed"    
  }
];

/*Set checkbox for datatable rows*/
// const Checkbox = React.forwardRef(({ onClick, ...rest }, ref) => (
//   <div className="custom-control custom-checkbox">
//     <input
//       type="checkbox"
//       className="custom-control-input"
//       ref={ref}
//       {...rest}
//     />
   
//     <label className="custom-control-label" onClick={onClick} />
  
//   </div>

// ));

const tableData = {
  columns,
  data
};



  function MyOrder(){

  const [users, setUsers] = useState({});
  const [page, setPage] = useState(1);
  const countPerPage = 3;

  
  
        return(
            <div className="main-container">
                  <div className="myorder-header">
                    <h5>Orders List</h5>
                    <Link to={'/orderentry'}><button className="btn btn-primary btn-order">CREATE ORDER</button></Link>
                  </div> 
                  <div className="child-container">
                        <div className="row mb-2 status-row">
                          <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                              <div class="info">
                                <div class="row">
                                  <div class="col-lg-3 col-md-4 col-sm-4 col-4 rone">
                                    <i className="fa fa-file-text fa-2x"></i>
                                  </div>
                                  <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                      <label className="status-text">All Orders</label>
                                      <h4>2,210</h4>
                                  </div>
                                </div>
                              </div>
                          </div>

                          <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                              <div class="info">
                                <div class="row">
                                  <div class="col-lg-3 col-md-4 col-sm-4 col-4 rone rtwo">
                                    <i className="fa fa-address-card fa-2x"></i>
                                  </div>
                                  <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                      <label className="status-text">Pending</label>
                                      <h4>107</h4>
                                  </div>
                                </div>
                              </div>
                          </div>
                    
                          <div class="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4">
                              <div class="info">
                                <div class="row">
                                  <div class="col-lg-3 col-md-4 col-sm-4 col-4 rone rthree">
                                    <i className="fa fa-handshake-o fa-2x"></i>
                                  </div>
                                  <div class="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                      <label className="status-text">Completed</label>
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
                                <a className="nav-link active" href="#all" role="tab" data-toggle="pill">Active orders</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#pending" role="tab" data-toggle="pill">Pending</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#completed" role="tab" data-toggle="pill">Completed</a>
                                </li>
                              </ul>
                            <input type="text" className="search-input" placeholder="&#61442; search"></input>
                           
                          </div>
                           
                        </div>
                      <div className="tab-values p-10">
                        <div className="tab-content">
                            <div id="all" className="order-table tab-pane in active">
                              {/* <h4>Active Order List</h4> */}
                              {/* <DataTableExtensions {...tableData} filterPlaceholder={'Search'} export={false} print={false}>  */}
                                 
                                <DataTable
                                  columns={columns}
                                  // data={users.data}
                                  data={data}
                                  defaultSortField="title"
                                  pagination
                                  customStyles={customStyles}
                                  // selectableRows
                                  // selectableRowsComponent={Checkbox}
                    
                                  // highlightOnHover
                                  // pagination
                                  // paginationServer
                                  // paginationTotalRows={users.total}
                                  // paginationPerPage={countPerPage}
                                  // paginationComponentOptions={{
                                  //   noRowsPerPage: true
                                  // }}
                                  // onChangePage={page => setPage(page)}
                                />
                              {/* </DataTableExtensions> */}
                              {/* <DataTable
                                      columns={columns}
                                      data={DataTab}
                                      defaultSortField="title"
                                      pagination
                                      selectableRows
                                      selectableRowsComponent={Checkbox}
                                      /> */}
                            </div>
                            <div id="pending" className="order-table tab-pane fade">
                              {/* <DataTableExtensions {...tableData} filterPlaceholder={'Search'} export={false}  print={false} > */}
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    defaultSortField="title"
                                    pagination
                                    customStyles={customStyles}
                                    // selectableRows
                                    // selectableRowsComponent={Checkbox}
                                    />
                              {/* </DataTableExtensions> */}
                            </div>
                            <div id="completed" className="order-table tab-pane fade">
                              {/* <DataTableExtensions {...tableData} filterPlaceholder={'Search'} export={false} print={false} > */}
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    defaultSortField="title"
                                    pagination
                                    customStyles={customStyles}
                                    // selectableRows
                                    // selectableRowsComponent={Checkbox}
                                    />
                              {/* </DataTableExtensions> */}
                            </div>
                        </div>
                    </div>
                  </div>
            </div>
            
        )
    }
// }
export default MyOrder;
