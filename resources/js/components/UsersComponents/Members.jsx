import React from 'react'
import AllUsersTab from './AllUsersTab'
class Members extends React.Component {
    render() {
        return (
            <div>
                    
                    <div className="row clearfix mt-2">
                        <AllUsersTab/>
                    </div>
                    <div className="row clearfix pl-4">
                        {/* <h4>Members</h4> */}
                    </div>
                    <div className="container">
                    <div className="row">
    <div className="col-md-12">
        <div className="card">
            
            <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 text-uppercase font-medium pl-4">Photo</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Member name</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Mobile</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Email</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Status</th>
                      <th scope="col" className="border-0 text-uppercase font-medium">Operation</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td className="pl-4"><div><a href="#" data-abc="true"><span className="w-48 avatar gd-warning">S</span></a></div></td>
                      <td>
                          <h5 className="font-medium mb-0">Charlotte Brown</h5>
                          <span className="text-muted">Texas, Unitedd states</span>
                      </td>
                      <td>
                          <span className="text-muted">Visual Designer</span><br></br>
                          <span className="text-muted">Past : teacher</span>
                      </td>
                      <td>
                          <span className="text-muted">daniel@website.com</span><br></br>
                          <span className="text-muted">999 - 444 - 555</span>
                      </td>
                      <td className="">
                            <div className="badge badge-success badge-pill">Active</div>
                        </td>
                      <td>
                        <button type="button" className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                        <button type="button" className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-4"><div><a href="#" data-abc="true"><span className="w-48 avatar gd-warning">S</span></a></div></td>
                      <td>
                          <h5 className="font-medium mb-0">Charlotte Brown</h5>
                          <span className="text-muted">Texas, Unitedd states</span>
                      </td>
                      <td>
                          <span className="text-muted">Visual Designer</span><br></br>
                          <span className="text-muted">Past : teacher</span>
                      </td>
                      <td>
                          <span className="text-muted">daniel@website.com</span><br></br>
                          <span className="text-muted">999 - 444 - 555</span>
                      </td>
                      <td className="">
                            <div className="badge badge-danger badge-pill">Deactive</div>
                        </td>
                      <td>
                        <button type="button" className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                        <button type="button" className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="pl-4"><div><a href="#" data-abc="true"><span className="w-48 avatar gd-warning">S</span></a></div></td>
                      <td>
                          <h5 className="font-medium mb-0">Charlotte Brown</h5>
                          <span className="text-muted">Texas, Unitedd states</span>
                      </td>
                      <td>
                          <span className="text-muted">Visual Designer</span><br></br>
                          <span className="text-muted">Past : teacher</span>
                      </td>
                      <td>
                          <span className="text-muted">daniel@website.com</span><br></br>
                          <span className="text-muted">999 - 444 - 555</span>
                      </td>
                      <td className="">
                            <div className="badge badge-success badge-pill">Active</div>
                        </td>
                      <td>
                        <button type="button" className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"><i className="fa fa-edit"></i> </button>
                        <button type="button" className="btn btn-outline-info btn-circle btn-sm btn-circle ml-2"><i className="fa fa-trash"></i> </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
                    </div>
            </div>
        );
    }
}
export default Members