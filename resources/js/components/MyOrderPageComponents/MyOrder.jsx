import React, { useState, useEffect } from 'react';
import '../../../css/MyOrder/MyOrder.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
// import { columns, data } from './DataTab';
import axios from 'axios';

/*Datatable values*/



// class MyOrder extends React.Component{
  function MyOrder(){
    // render(){
  const [users, setUsers] = useState({});
  const [page, setPage] = useState(1);
  const countPerPage = 3;
  // const data=[
//     {
//       OrderId: "100 291",
//       LoanNumber: "1024444234",
//       Customer:<label className="text-center"><img src="../../images/robot.png" className="p-1" width="25px"></img>Amy Wong</label>,
//       LoanType:"Housing",
//       status:<label className="badge badge-primary p-1">Pending</label>
//   },
//   {
//     OrderId: "100 291",
//     LoanNumber: "1024444234",
//     Customer:<label className="text-center"><img src="../../images/robot.png" className="p-1" width="25px"></img>emy Wong</label>,
//     LoanType:"Housing",
//     status:<label className="badge badge-primary p-1">Pending</label>
// },
// {
//   OrderId: "100 291",
//   LoanNumber: "1024444234",
//   Customer:<label className="text-center"><img src="../../images/robot.png" className="p-1" width="25px"></img>jeni Wong</label>,
//   LoanType:"Housing",
//   status:<label className="badge badge-primary p-1">Pending</label>
// }
//   ];

  // const getUserList = () => {
  //   const data=[
  //     {
  //       OrderId: "100 291",
  //       LoanNumber: "1024444234",
  //       Customer:"Amy Wong",
  //       LoanType:"Housing",
  //       status:"Pending"
  //   }
  //   ];
    // axios.get(`https://reqres.in/api/users?page=${page}&per_page=${countPerPage}&delay=1`).then(res => {
      // setUsers(data);
    // }).catch(err => {
    //   setUsers({});
    // });
    
  // }

  // useEffect(() => {
  //   getUserList();
  // },[page]);

  const columns = [
    {
      name: <b>Order Id</b>,
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
  const Checkbox = React.forwardRef(({ onClick, ...rest }, ref) => (
    <div className="custom-control custom-checkbox">
      <input
        type="checkbox"
        className="custom-control-input"
        ref={ref}
        {...rest}
      />
     
      <label className="custom-control-label" onClick={onClick} />
    
    </div>
  
  ));
  
  const tableData = {
    columns,
    data
  };
  
        return(
            <div className="card main-container">
                    <div className="myorder-header">
                      <h5>Orders List</h5>
                      <button className="btn btn-primary btn-order">CREATE ORDER</button>
                    </div> 
                    <div className="child-container">
                        <div className="row mb-2 status-row">
                            <div className="col-sm-3 col-md-6 col-lg-4 py-2 status-container">
                                <div className="card bg-light h-100 status-val">
                                    <label>Active Orders</label>
                                    <h4>1,023</h4>
                                </div>
                            </div>

                            <div className="col-sm-3 col-md-6 col-lg-4 py-2 status-container">
                                <div className="card bg-light h-100 status-val">
                                    <label>Pending</label>
                                    <h4>64</h4>
                                </div>
                            </div>
                    
                            <div className="col-sm-3 col-md-6 col-lg-4 py-2 status-container">
                                <div className="card bg-light h-100 status-val">
                                    <label>Completed</label>
                                    <h4>990</h4>
                                </div>
                            </div>
                        </div>
                        <div className="tab-menus">
                            <ul className="nav nav-pills nav-menu" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link" href="#all" role="tab" data-toggle="pill">Active orders</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#pending" role="tab" data-toggle="pill">Pending</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#completed" role="tab" data-toggle="pill">Completed</a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content">
                            <div id="all" className="order-table tab-pane in active">
                            <DataTableExtensions {...tableData} export={false} print={false} >    
                            <DataTable
                              columns={columns}
                              // data={users.data}
                              data={data}
                              defaultSortField="title"
                              pagination
                              selectableRows
                              selectableRowsComponent={Checkbox}
                 
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
                            </DataTableExtensions>
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
                              <DataTableExtensions {...tableData} export={false} print={false} >
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    defaultSortField="title"
                                    pagination
                                    selectableRows
                                    selectableRowsComponent={Checkbox}
                                    />
                                    </DataTableExtensions>
                            </div>
                            <div id="completed" className="order-table tab-pane fade">
                            <DataTableExtensions {...tableData} export={false} print={false} >
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    defaultSortField="title"
                                    pagination
                                    selectableRows
                                    selectableRowsComponent={Checkbox}
                                    />
                                  </DataTableExtensions>
                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
// }
export default MyOrder;