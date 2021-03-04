import React, { useState, useEffect } from 'react';
import '../../../css/MyOrder/MyOrder.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
// import { columns, data } from './DataTab';
import axios from '../../repository/api';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications'
import { useHistory } from 'react-router-dom';


/*Datatable values*/



// class MyOrder extends React.Component{
  function UserDataTable(){
    // render(){
  const history = useHistory();
  const [users, setUsers] = useState();
  const [page, setPage] = useState(1);
  const {addToast} = useToasts();
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
  // const action = users.map( (user,index ) => {
      
  //                           <Link key={index}><span className="fa fa-eye text-primary p-1"></span></Link>;
  //                           <Link to={'/edituser/'+user.UserUID}><span className="fa fa-edit text-secondary p-1"></span></Link>;
  //                           <Link ><span className="fa fa-trash text-danger p-1"></span></Link>

  //                         });
    
    const statusChange = (e) => {
    const activeStatus = {Active: e.target.value};
    const ID = e.target.dataset.uid;

    axios.put('/users/'+ID, activeStatus)
      .then(res => {
        if(res.data.status)
        {
          addToast('Status Updated Successfully', { appearance: 'success', autoDismiss: 'true' });
          history.push("/dashboard");
          history.push("/alluser");
        }
        else{
          addToast('Status Updation Failed', { appearance: 'error', autoDismiss: 'true' });
        }
      })
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
                        <div class="custom-control custom-switch">
                          <input type="checkbox" class="custom-control-input" id={row.UserUID} data-uid={row.UserUID} onChange={statusChange} value={(row.Active == 1) ? 0 : 1} checked={(row.Active == 1) ? true : false}/>
                          <label class="custom-control-label mt-0" htmlFor={row.UserUID}></label>
                        </div>
                  </div>,
      sortable: true
        
    },
    {
      name:<b>Action</b>,
      cell: row => <div key={row.UserUID}>
                       
                        <Td to={'/userview/'+row.UserUID}><span className="fa fa-eye p-1" style={{fontSize:'15px',color:'#464bac',fontWeight:'bold'}}></span></Td>
                        <Td to={'/edituser/'+row.UserUID}><span className="fa fa-edit p-1"  style={{fontSize:'15px',color:'#801f74'}}></span></Td>
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
            <div className="card main-container">
                     
                    <div className="child-container">
                        
                        

                        <div className="tab-content">
                            <div id="all" className="order-table tab-pane in active">
                            <DataTableExtensions {...tableData} export={false} print={false} >    
                            <DataTable
                              columns={columns}
                              // data={users.data}
                              data={data}
                              defaultSortField="title"
                              pagination
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
                             {/* <DataTable
                                    columns={columns}
                                    data={DataTab}
                                    defaultSortField="title"
                                    pagination
                                    selectableRows
                                    selectableRowsComponent={Checkbox}
                                    /> */}
                            </div>
                            
                            
                        </div>
                    </div>
            </div>
            
        )
    }
// }
export default UserDataTable;