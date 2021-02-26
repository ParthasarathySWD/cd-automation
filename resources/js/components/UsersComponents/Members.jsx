import React from 'react'
import AllUsersTab from './AllUsersTab'
import { Link } from 'react-router-dom';
import UserDataTable from './UserDataTable';


class Members extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
    render() {
        return (
            <div>
                    
                    <div className="row clearfix mt-2">
                        <AllUsersTab/>
                    </div>
                    <div className="row clearfix pl-4">
                        
                    </div>
                    <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              {/* <div className="card">
                                  
                                  <div className="table-responsive">
                                      <table className="table no-wrap user-table mb-0">
                                        <thead>
                                          <tr>
                                            <th scope="col" className="border-0 text-uppercase font-medium pl-4">Photo</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">First Name</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Last Name</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Mobile</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">User Name</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Role</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Status</th>
                                            <th scope="col" className="border-0 text-uppercase font-medium">Operation</th>
                                          </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="pl-4"><div><a href="#" data-abc="true"><span className="w-48 avatar gd-warning">S</span></a></div></td>
                                            <td>
                                                <h6 className="font-medium mb-0">Charl</h6>
                                            </td>
                                            <td>
                                                <h6 className="font-medium mb-0">Brown</h6>
                                            </td>
                                            <td>
                                            <h6 className="font-medium mb-0">9876543210</h6>
                                            </td>
                                            <td>
                                            <h6 className="font-medium mb-0">Brown.Charlotte@mail.com</h6>
                                            </td>
                                            <td>
                                            <h6 className="font-medium mb-0">Brown.Charlotte</h6>
                                            </td>
                                            <td>
                                            <h6 className="font-medium mb-0">Customer</h6>
                                            </td>
                                            <td className="">
                                                  <div className="badge badge-success badge-pill">Active</div>
                                            </td>
                                            <td>
                                              <Link to={'/edituser'}><button type="button" className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"><i className="fa fa-edit"></i></button></Link> 
                                              <button type="button" className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                  </div>
                              </div> */}
                          </div>
                      </div>
                    </div>
              <UserDataTable/>
            </div>
        );
    }
}
export default Members;
