import React, { useState, useEffect } from 'react';
import '../../../css/MyOrder/MyOrder.css';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import MyOrders from '../../components/Datatablecomponents/MyOrders';
import DatePicker from "react-datepicker";
import TableLink from  '../../CommonComponents/TableLink';
import "react-datepicker/dist/react-datepicker.css";

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
    selector: row => row["OrderId"],
    sortable: true
    
  },
  {
    name: <b>Loan Number</b>,
    selector: row => row["LoanNumber"],
    sortable: true
  },   
  {
    name: <b>Customer</b>,
    selector: row => row["Client"],
    sortable: true

  },
  // {
  //   name: <b>Loan Type</b>,
  //   selector: row => row["LoanType"],
  //   sortable: true
  // },
  {
    name: <b>Status</b>,
    selector: row => row["status"],
    sortable: true
      
  },
  {
    name:<b>Action</b>,
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
  const [countPerPage, setCountPerPage] = useState(10);
  
  const [status, setstatus]  = useState([]);
  const [allusers, setallusers]  = useState([]);
  const [clients, setclients]  = useState([]);
  const newdate = new Date();
  newdate.setDate(newdate.getDate() - 32);
  const [startDate, setStartDate] = useState(newdate);
  const [endDate, setEndDate] = useState(new Date());
  const [skey, setKey] = useState(Math.random());

  // const[filter,setFilter]=useState([]);
  const [filter, setFilter] = useState({ 'user': '', 'status': ''});
  

  function onClientChange(e){
    let val = e.target.value;
    let name = e.target.name;
    setFilter((prevState)=>{
      return {...prevState, [name]: val};
    })

  }
 

  // Build filter data and make async req to api
  useEffect(()=>{

    const data={
      user:filter.user,
      status:filter.status,
      fromdate:startDate,
      todate:endDate
    }

    setKey(Math.random());

    fetchUsers(page, countPerPage, '', data);

  }, [filter, startDate, endDate]);

  useEffect(() => {
    async function fetchOptions () {
    let response = await fetchDetails();
    
    setstatus(response.data.status);
    setallusers(response.data.allusers);
    setclients(response.data.clients);

  }
    fetchOptions();
  }, [])
  
  /* Should be passed from props starts */
  const fetchUsers = async (page, size = countPerPage, searchText = "", filterData={}) => {
    
    const response = await axios.get(
      `myorders/fetchorders`, {
        params: {
          rowCount: size,
          page: page,
          searchText: searchText,
          // filterData: filterData,
          user:filter.user,
          status:filter.status,
          fromdate:startDate,
          todate:endDate

        }
      }
      );
      console.log(response);
      return response;
    };

    const fetchDetails = async () => {
            
      const response = await axios.get(
        `myorders/fetchOptions`,
        {

        }
        );
        return response;
    }
    
    const handleDelete = async (row) => {
        await axios.delete(`https://reqres.in/api/users/${row.id}`);
    }
    
    const columndata = [
      {
        name:<b>Order Number</b>,
        selector: row => row["OrderNumber"],
        sortable: true
      },
      {
        name:<b>Loan Number</b>,
        selector: row => row["LoanNumer"],
        sortable: true
      },
      {
        name: <b>Client</b>,
        selector: row => row["ClientName"],
        sortable: true
      },
      {
        name: <b>Status</b>,
        selector: row => row["StatusName"],
        sortable: true
      },
      {
        // eslint-disable-next-line react/button-has-type
        name:<b>Action</b>,
        cell: row => 
        <div>
          <p key={row.OrderUID}>
            <TableLink><span className="fa fa-eye text-primary p-1"></span></TableLink>
            {/* <a href="#"><span className="fa fa-edit text-secondary p-1"></span></a> */}
            <TableLink to={'/summary/'+row.OrderUID}><span className="fa fa-edit text-secondary p-1"></span></TableLink>
            {/* <a href="#"><span className="fa fa-trash text-danger p-1"></span></a> */}
          </p>
        </div>
      }
    ];
    /* Should be passed from props Ends */


    let clientOptions = clients.map((value, key)=>{
                        return <option value={value.ClientUID}>{value.ClientName}</option>
                      });


  
  
        return(
            <div className="main-container clearfix">
                  <div className="myorder-header">
                    <h5>Orders List</h5>
                    <Link to={'/orderentry'}><button className="btn btn-primary btn-order">CREATE ORDER</button></Link>
                  </div> 
                  <div className="child-container status-container">
                        <div className="row mb-2 status-row">
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
                              <div className="info">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 rone">
                                    <i className="fa fa-file-text fa-2x"></i>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                      <label className="status-text">All Orders</label>
                                      <h4>2,210</h4>
                                  </div>
                                </div>
                              </div>
                          </div>

                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
                              <div className="info">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 rone rtwo">
                                    <i className="fa fa-address-card fa-2x"></i>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                      <label className="status-text">Pending</label>
                                      <h4>107</h4>
                                  </div>
                                </div>
                              </div>
                          </div>
                    
                          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-2 mt-4 w-25">
                              <div className="info">
                                <div className="row">
                                  <div className="col-lg-3 col-md-4 col-sm-4 col-4 rone rthree">
                                    <i className="fa fa-handshake-o fa-2x"></i>
                                  </div>
                                  <div className="col-lg-9 col-md-8 col-sm-8 col-8 fontsty">
                                      <label className="status-text">Completed</label>
                                      <h4>68</h4>
                                  </div>
                                </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className="child-container first-child">
                         <div className="tabs" style={{marginTop:'30px'}}>
                          {/* <div className="tab-menus"> */}
                        
                          <div className="row m-0 pt-2">
                                  

                                  <div className="col-md-2 col-sm-12">
                                    <div className="form-group">

                                    <label className="form-label">Status </label>
                                  <select className="border w-100 input-height border-secondary" name="status" value={filter.status} onChange={onClientChange} style={{height:'25px'}}>
                                  <option value="" selected >Select...</option>
                                  {
                                    status.map((value, key)=>{
                                      return <option key={key} value={value.StatusUID}>{value.StatusName}</option>
                                    })
                                  }
                                  </select>
                                  </div>
                                  </div>

                                  <div className="col-md-2 col-sm-12">
                                    <div className="form-group">

                                    <label className="form-label">Users </label>
                                  <select className="border w-100 input-height border-secondary" name="user" value={filter.user} onChange={onClientChange} style={{height:'25px'}}>
                                  <option value="" selected >Select...</option>
                                  {
                                    allusers.map((value, key)=>{
                                      return <option key={key} value={value.UserUID}>{value.UserName}</option>
                                    })
                                  }
                                  </select>
                                  </div>
                                  </div>

                                  <div className="col-md-2 col-sm-12">
                                    <div className="form-group">

                                    <label className="form-label">From Date </label>
                     
                                  <div className="input-group">
                                        <div className="input-group-prepend" >
                                            <i className="fa fa-calendar p-1" style={{border:'1px solid black',borderRight:'0mm'}}></i>
                                        {/* </div><input type="text" id="TodDate" className="form-control datepicker" placeholder="Ex: 19/02/2021"/> */}
                                        <DatePicker name="fromdate" placeholderText="mm/dd/yyyy" selected={startDate} onChange={date=>setStartDate(date)}/>
                                    </div>
                                  </div>
                                  </div>
                                  </div>

                                  <div className="col-md-2 col-sm-12">
                                            <div className="form-group">
                                                <label className="form-label">To Date </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <i className="fa fa-calendar p-1" style={{border:'1px solid black',borderRight:'0mm'}}></i>
                                                        <DatePicker  placeholderText="mm/dd/yyyy" name="todate" selected={endDate} onChange={date => setEndDate(date)}/>
                                                    </div>
                                                    {/* <input type="text" id="TodDate" className="form-control datepicker" placeholder="Ex: 19/02/2021"/> */}
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    <div className="col-md-2 col-sm-12">
                                      <div className="form-group">

                                      </div>
                                    </div>
                                  

                                        {/* <div className="form-group">
                                          <label htmlFor="exampleFormControlSelect1">Example select</label>
                                          <select className="form-control" id="exampleFormControlSelect1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                          </select>
                                      </div> */}
                                  </div>
                           
                                {/* <select className="form-control" name="select" value={''}>
                                  <option value="">Select...</option>
                                  {
                                    clients.map((value, key)=>{
                                    return <option key={key} value={value.ClientUID}>{value.ClientName}</option>
                                    })
                                  }
                                </select> */}
                            {/* <ul className="nav nav-pills nav-menu" role="tablist">
                                <li className="nav-item">
                                <a className="nav-link active" href="#all" role="tab" data-toggle="pill">Active orders</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#pending" role="tab" data-toggle="pill">Pending</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#completed" role="tab" data-toggle="pill">Completed</a>
                                </li>
                              </ul> */}
                              {/* <div className="search-div">
                                  <input type="text" className="search-input" placeholder="&#61442; search"></input>
                              </div> */}
                          {/* </div>*/}
                           
                        </div>  
                        <div className="tab-values p-10">
                          <div className="tab-content">
                              <div id="all" className="order-table tab-pane in active">
                                <div className="row">
                                <div className="col-sm-12 col-md-12">
                                
                                  </div>
                                </div>
                               
                                {/* <h4>Active Order List</h4> */}
                                {/* <DataTableExtensions {...tableData} filterPlaceholder={'Search'} export={false} print={false}>  */}
                                  
                                  <MyOrders            
                                    key={skey}                                                      
                                    title = ""
                                    columndata = {columndata}
                                    fetchData = {fetchUsers}
                                    setPerPage = {setCountPerPage}
                                    setCurrentPage = {setPage}
                                    />

                              </div>
                              <div id="pending" className="order-table tab-pane fade">
                                <input type="text" className="search-input" placeholder="&#61442; search"></input>
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
                                <input type="text" className="search-input" placeholder="&#61442; search"></input>
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
