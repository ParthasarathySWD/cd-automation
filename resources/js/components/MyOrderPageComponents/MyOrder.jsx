import React from 'react';
import '../../../css/MyOrder/MyOrder.css';
import DataTable from 'react-data-table-component';
import DataTab from './DataTab';

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
    //       render: (rowData) =>
    //       rowData && (
    //     //   <IconButton
    //     //       color="secondary">
    //           <a href="#"><span className="fa fa-trash"></span></a>
    //     //   </IconButton>
    //       )
      }
     
  ];

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

//   const action = React.forwardRef(({ onClick, ...rest }, ref) => (
//     <div className="action">
//       <a href="#"><span className="fa fa-trash"
//         ref={ref}
//         {...rest}>
//     </span></a>
//     <a href="#"><span className="fa fa-eye"
//         ref={ref}
//         {...rest}>
//     </span></a>
     
//       <label className="action-label" onClick={onClick} />
    
//     </div>
   
//   ));
  
class MyOrder extends React.Component{
    render(){
        return(
            <div className="card main-container">
                    <div className="myorder-header">
                    <h5>Orders List</h5>
                    <button className="btn btn-primary btn-order">Create order</button>
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
                                <DataTable
                                    columns={columns}
                                    data={DataTab}
                                    defaultSortField="title"
                                    pagination
                                    selectableRows
                                    selectableRowsComponent={Checkbox}
                                    // selectableRowsComponent={action}
                                    />
                            </div>
                            <div id="pending" className="order-table tab-pane fade">
                                <DataTable
                                    columns={columns}
                                    data={DataTab}
                                    defaultSortField="title"
                                    pagination
                                    selectableRows
                                    selectableRowsComponent={Checkbox}
                                    // selectableRowsComponent={action}
                                    />
                            </div>
                            <div id="completed" className="order-table tab-pane fade">
                                <DataTable
                                    columns={columns}
                                    data={DataTab}
                                    defaultSortField="title"
                                    pagination
                                    selectableRows
                                    selectableRowsComponent={Checkbox}
                                    // selectableRowsComponent={action}
                                    />
                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
}
export default MyOrder;