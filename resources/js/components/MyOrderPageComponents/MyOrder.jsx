import React, { useState, useEffect } from 'react';
import '../../../css/MyOrder/MyOrder.css';
import "react-data-table-component-extensions/dist/index.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import MyOrders from '../../components/Datatablecomponents/MyOrders';
import DatePicker from "react-datepicker";
import TableLink from  '../../CommonComponents/TableLink';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import MyOrderWidgets from './MyOrderWidgets';

/*Style to data table*/
const customStyles = {
  headCells:{
    style:{
      backgroundColor:'#a3bfd054'
    }
  }
}

function MyOrder(){

  const [users, setUsers] = useState({});
  const [page, setPage] = useState(1);
  const [countPerPage, setCountPerPage] = useState(10);
  const [status, setstatus]  = useState([]);
  const [allusers, setallusers]  = useState([]);
  const [clients, setclients]  = useState([]);

  // To set Default Start date
  const newdate = new Date();
  newdate.setDate(newdate.getDate() - 32);
  const [startDate, setStartDate] = useState(newdate);
  const [endDate, setEndDate] = useState(new Date());
  const [skey, setKey] = useState(Math.random());
  const [filter, setFilter] = useState({ 'user': '', 'status': ''});
  

  function onClientChange(e)
  {
    let val = e.target.value;
    let name = e.target.name;
    setFilter((prevState)=>{
      return {...prevState, [name]: val};
    })

  }
 
  // Build filter data and make async req to api
  useEffect(()=>
  {

    const data=
    {
      user:filter.user,
      status:filter.status,
      fromdate:startDate,
      todate:endDate
    }

    setKey(Math.random());

    fetchUsers(page, countPerPage, '', data);

  }, [filter, startDate, endDate]);

  useEffect(() => 
  {
    async function fetchOptions () 
    {
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

    // Fetch filter values
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
    
    //Datatable columns 
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
        name:<b>Action</b>,
        cell: row => 
        <div>
          <p key={row.OrderUID}>
            <TableLink><span className="fa fa-eye text-primary p-1"></span></TableLink>
            <TableLink to={'/summary/'+row.OrderUID}><span className="fa fa-edit text-secondary p-1"></span></TableLink>
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
                        {/* Widgets component imported */}
                          <MyOrderWidgets />
                      </div>
                      <div className="child-container first-child">
                          <div className="tabs" style={{marginTop:'30px',height:'50px'}}> 

                            {/* Filter dropdown */}
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
                                                {/* Datepicker for Fromdate */}
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
                                                    {/* Datepicker for Todate */}
                                                    <DatePicker  placeholderText="mm/dd/yyyy" name="todate" selected={endDate} onChange={date => setEndDate(date)}/>
                                                </div>
                                            </div>
                                        </div>
                                  </div>  
                            </div>
                          </div>  

                          {/* Datatable */}
                          <div className="tab-values p-10">
                              <div className="tab-content">
                                  <div id="all" className="order-table tab-pane in active">
                                      <MyOrders            
                                        key={skey}                                                      
                                        title = ""
                                        columndata = {columndata}
                                        fetchData = {fetchUsers}
                                        setPerPage = {setCountPerPage}
                                        setCurrentPage = {setPage}
                                        />
                                  </div>
                              </div>
                          </div>
                      </div>
            </div>
            
        )
}

export default MyOrder;
