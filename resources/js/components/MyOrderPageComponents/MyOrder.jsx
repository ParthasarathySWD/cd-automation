import React from 'react';
import '../../../css/MyOrder/MyOrder.css';

class MyOrder extends React.Component{
    render(){
        return(
            <div className="card main-container">
                    <div className="myorder-header">
                    <h5>Orders List</h5>
                    <button className="btn btn-primary btn-order">Create order</button>
                    </div> 
                    <div className="child-container">
                        <div class="row mb-2 status-row">
                            <div class="col-xl-3 col-sm-6 py-2">
                                <div class="card bg-light h-100 status-val">
                                    <label>Active Orders</label>
                                    <h4>1,023</h4>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 py-2">
                                <div class="card bg-light h-100 status-val">
                                    <label>Unfulfilled</label>
                                    <h4>159</h4>
                                </div>
                            </div>
                    
                            <div class="col-xl-3 col-sm-6 py-2">
                                <div class="card bg-light h-100 status-val">
                                    <label>Pending</label>
                                    <h4>64</h4>
                                </div>
                            </div>
                    
                            <div class="col-xl-3 col-sm-6 py-2">
                                <div class="card bg-light h-100 status-val">
                                    <label>Fulfilled</label>
                                    <h4>990</h4>
                                </div>
                            </div>
                        </div>
                        <div class="tab-menus">
                            <ul class="nav nav-pills nav-menu" role="tablist">
                                <li class="nav-item">
                                <a class="nav-link" href="#all" role="tab" data-toggle="tab">All orders</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#active" role="tab" data-toggle="tab">Active</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#unpaid" role="tab" data-toggle="tab">Unpaid</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="#unfulfilled" role="tab" data-toggle="tab">Unfulfilled</a>
                                </li>
                            </ul>
                        </div>

                        <div className="order-table">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th><input type="checkbox"/></th>
                                        <th>Order Id</th>
                                        <th>Loan Number</th>
                                        <th>Customer</th>
                                        <th>Loan Type</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>121 091</td>
                                        <td>102223234</td>
                                        <td><img src="../../images/robot.png" className="rounded dp" width="20px"></img><label>Amy</label></td>
                                        <td>Housing Loan</td>
                                        <td><span class="badge badge-secondary">In progress</span></td>
                                        <td>
                                            <a href="#"  className="fa fa-eye icons text-primary"></a> 
                                            <a href="#"  className="fa fa-edit icons text-success"></a>  
                                            <a href="#"  className="fa fa-trash icons text-danger"></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>121 091</td>
                                        <td>102223234</td>
                                        <td><img src="../../images/robot.png" className="rounded dp" width="20px"></img><label>Richard</label></td>
                                        <td>Personal Loan</td>
                                        <td><span class="badge badge-success p-1">Closed</span></td>
                                        <td>
                                            <a href="#"  className="fa fa-eye icons text-primary"></a> 
                                            <a href="#"  className="fa fa-edit icons text-success"></a>  
                                            <a href="#"  className="fa fa-trash icons text-danger"></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>121 091</td>
                                        <td>102223234</td>
                                        <td><img src="../../images/robot.png" className="rounded dp" width="20px"></img><label>Sara Graham</label></td>
                                        <td>Education Loan</td>
                                        <td><span class="badge badge-secondary p-1">In progress</span></td>
                                        <td>
                                            <a href="#"  className="fa fa-eye icons text-primary"></a> 
                                            <a href="#"  className="fa fa-edit icons text-success"></a>  
                                            <a href="#"  className="fa fa-trash icons text-danger"></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>121 081</td>
                                        <td>1024444234</td>
                                        <td><img src="../../images/robot.png" className="rounded dp" width="20px"></img><label>Victor Samson</label></td>
                                        <td>Personal Loan</td>
                                        <td><span class="badge badge-primary p-1">Open</span></td>
                                        <td>
                                            <a href="#"  className="fa fa-eye icons text-primary"></a> 
                                            <a href="#"  className="fa fa-edit icons text-success"></a>  
                                            <a href="#"  className="fa fa-trash icons text-danger"></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox"></input></td>
                                        <td>121 081</td>
                                        <td>1034323234</td>
                                        <td><img src="../../images/robot.png" className="rounded dp" width="20px"></img><label>Patrica John</label></td>
                                        <td>Education Loan</td>
                                        <td><span class="badge badge-success p-1">Closed</span></td>
                                        <td>
                                            <a href="#"  className="fa fa-eye icons text-primary"></a> 
                                            <a href="#"  className="fa fa-edit icons text-success"></a>  
                                            <a href="#"  className="fa fa-trash icons text-danger"></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            
        )
    }
}
export default MyOrder;