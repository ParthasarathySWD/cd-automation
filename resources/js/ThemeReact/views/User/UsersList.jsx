import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import axios from '../../../ThemeLayouts/repository/api';
import { useToasts } from 'react-toast-notifications'
import * as Icon from 'react-feather';
import { ReactTabulator } from 'react-tabulator';
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from 'react-data-table-component';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
function UsersList(){
  const history = useHistory();
  const [users, setUsers] = useState();
  const [page, setPage] = useState(1);
  const {addToast} = useToasts();
  const countPerPage = 3;
  
    const getUserList = () => {
      axios.get(`users`).then(res => {
        setUsers(res.data);
        console.log(res.data);
      }).then(err => {
         
      });
      
    }
  
    useEffect(() => {
      getUserList();
    },[page]);
  
    function Td({ children, to }) {
      // Conditionally wrapping content into a link
      const ContentTag = to ? Link : 'div';
    
      return (
        <td>
          <ContentTag to={to}>{children}</ContentTag>
        </td>
      );
    }

    const statusChange = (e) => {
    const activeStatus = {Active: e.target.value};
    const ID = e.target.dataset.uid;

    axios.put('/users/'+ID, activeStatus)
      .then(res => {
        if(res.data.status)
        {
          addToast('Status Updated Successfully', { appearance: 'success', autoDismiss: 'true' });
          history.push("/dashboard");
          history.push("/allusers");
        }
        else{
          addToast('Status Updation Failed', { appearance: 'error', autoDismiss: 'true' });
        }
      })
  }
  const customStyles = {
    headCells:{
      style:{
        backgroundColor:'#a3bfd054'
      }
    }
  }
  const columns = [
    {
      name: <b>User Name</b>,
      selector: "UserName",
      sortable: true
      
    },
    {
      name: <b>Email</b>,
      selector: "Email",
      sortable: true
    },   
    {
      name: <b>Phone Number</b>,
      selector: "PhoneNumber",
      sortable: true

    },
    {
      name: <b>RoleUID</b>,
      selector: "RoleUID",
      sortable: true
    },
    {
      name: <b>Status</b>,
      cell: row => <div key={row.UserUID}>
                        <div class="form-check">
                          <input type="checkbox" className="form-check-switch" id={row.UserUID} data-uid={row.UserUID} onChange={statusChange} value={(row.Active == 1) ? 0 : 1} checked={(row.Active == 1) ? true : false}/>
                          <label className="form-check-label" htmlFor={row.UserUID}></label>
                        </div>
                  </div>,
      sortable: true
        
    },
    {
      name:<b>Action</b>,
      cell: row => <div key={row.UserUID}>
                       
                        <Td to={'/userview/'+row.UserUID}><span ><Icon.Eye className=" mr-2" size="20" color="purple" /></span></Td>
                        <Td to={'/edituser/'+row.UserUID}><span ><Icon.Edit size="20" color="green" /></span></Td>
                        {/* <Td ><span className="fa fa-trash text-danger p-1"></span></Td>  */}
                        
                  </div>
    }
     
  ];


  const data = users ;
  
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
        <div>

              <div className="grid grid-cols-12 gap-3 mt-5">
                <div className="intro-y col-span-12 lg:col-span-12">
                    <div className="intro-y box  p-5">
                        
                        <div className="grid grid-cols-12 gap-3">
                            <div className="intro-y col-span-12 lg:col-span-12">
                            <label for="input-state-2" className="form-label flex"><b style={{fontSize:'22px'}}>User List</b><Tippy content="Test Tooltip Content"><Icon.AlertCircle className="w-4 h-4 ml-2 text-theme-17" /></Tippy></label>
                                <Link to={'/adduser'} className="btn btn-primary float-right"><Icon.Plus/> Add User</Link>

                            </div>
                        </div>

                        <div className="grid grid-cols-12 gap-3">
                            
                            <div className="col-span-12 lg:col-span-12 sm:col-span-12 mt-3"> 
                                
                              <DataTableExtensions {...tableData} export={false} print={false} >    
                              <DataTable
                                columns={columns}
                                // data={users.data}
                                data={data}
                                defaultSortField="title"
                                pagination
                                customStyles={customStyles}
                              //   selectableRows
                              //   selectableRowsComponent={Checkbox}
                  
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
                              
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
              
              
        </div>
          
    )
}

export default UsersList;