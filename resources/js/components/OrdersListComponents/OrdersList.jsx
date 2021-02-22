import React from 'react'
// import Tabulator from 'tabulator-tables';
import 'react-tabulator/lib/styles.css';
import { ReactTabulator } from 'react-tabulator'
import 'tabulator-tables/dist/js/tabulator.min.js'
// import DataTable, { createTheme } from 'react-data-table-component';


// createTheme('solarized', {
//     text: {
//       primary: '#268bd2',
//       secondary: '#2aa198',
//     },
//     background: {
//       default: '#002b36',
//     },
//     context: {
//       background: '#cb4b16',
//       text: '#FFFFFF',
//     },
//     divider: {
//       default: '#073642',
//     },
//     action: {
//       button: 'rgba(0,0,0,.54)',
//       hover: 'rgba(0,0,0,.08)',
//       disabled: 'rgba(0,0,0,.12)',
//     },
//   });
// const data = [{ id: 1, OrderNumber: '23', LoanNumber: '56494', LoanType: 'Asset', Customer: 'Json', Lender: 'Oswald', ClosingDate: '08/26/22', OrderEntryDate: '08/02/21', CompletedDate: '08/08/23', CompletedBy: '02/02/21', Status: 'Active' }];
// const columns = [
//   {
//     name: 'Order number',
//     selector: 'OrderNumber',
//     sortable: true,
//   },
//   {
//     name: 'Loan number',
//     selector: 'LoanNumber',
//     sortable: true,
    
//   },
//   {
//     name: 'Loan type',
//     selector: 'LoanType',
//     sortable: true,
//   },
//   {
//     name: 'Customer',
//     selector: 'Customer',
//     cell: row => <img height="30px" width="30px" alt={row.customer} src={row.avatar} />,
//     sortable: true,
    
//   },
//   {
//     name: 'Lender',
//     selector: 'Lender',
//     sortable: true,
//   },
//   {
//     name: 'Closing Date',
//     selector: 'ClosingDate',
//     sortable: true,
    
//   },
//   {
//     name: 'Order Entry Date',
//     selector: 'OrderEntryDate',
//     sortable: true,
//   },
//   {
//     name: 'Completed Date',
//     selector: 'CompletedDate',
//     sortable: true,
    
//   },
//   {
//     name: 'Completed by',
//     selector: 'CompletedBy',
//     sortable: true,
    
//   },
//   {
//     name: 'Status',
//     selector: 'Status',
//     sortable: true,
    
//   },
//   {
//     name: 'Action',
//     cell: row => <span><i class="fa fa-eye" aria-hidden="true">View</i> | <i class="fa fa-pencil-square-o" aria-hidden="true">Edit</i></span>,
//     sortable: true,
    
//   },
// ];
// const customStyles = {
//     rows: {
//       style: {
//         minHeight: '60px', // override the row height
//       }
//     },
//     headCells: {
//       style: {
//         paddingLeft: '0px', // override the cell padding for head cells
//         paddingRight: '0px',
//       },
//     },
//     cells: {
//       style: {
//         paddingLeft: '0px', // override the cell padding for data cells
//         paddingRight: '0px',
//       },
//     },
//     columns: {
//         style: {
//             width: '0px',
//         }
//     }
//   };

// const handleChange = (state) => {
//     // You can use setState or dispatch with something like Redux so we can use the retrieved data
//     console.log('Selected Rows: ', state.selectedRows);
//   };

//   const handleClearRows = () => {
//     this.setState({ toggledClearRows: !this.state.toggledClearRows})
//   }



// var Tabulator = require('tabulator-tables');

// var table = new Tabulator("#example-table", {
//     height:"311px",
//     responsiveLayout:"hide",
//     columns:[
//     {title:"Name", field:"name", width:200, responsive:0}, //never hide this column
//     {title:"Progress", field:"progress", hozAlign:"right", sorter:"number", width:150},
//     {title:"Gender", field:"gender", width:150, responsive:2}, //hide this column first
//     {title:"Rating", field:"rating", hozAlign:"center", width:150},
//     {title:"Favourite Color", field:"col", width:150},
//     {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", width:150},
//     {title:"Driver", field:"car", hozAlign:"center", width:150},
//     ],
// });

// var tabledata = [
// 	{id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
// 	{id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
// 	{id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
// 	{id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
// 	{id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
// ];

//load sample data into the table
// table.setData(tabledata);


const columns = [
    { title: "Name", field: "name", width: 150 },
    { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
    { title: "Favourite Color", field: "col" },
    { title: "Date Of Birth", field: "dob", hozAlign: "center" },
    { title: "Rating", field: "rating", hozAlign: "center", formatter: "star" },
    { title: "Passed?", field: "passed", hozAlign: "center", formatter: "tickCross" }
  ];

  var data = [
    {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
    {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
    {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
    {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
    {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
  ];

class OrdersList extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { toggledClearRows: false };
    // }
    render() {

        return (
            
            // <DataTable
            //             title="Orders List"
            //             columns={columns}
            //             data={data}
            //             selectableRows // add for checkbox selection
            //             Clicked
            //             Selected={handleChange}
            //             onSelectedRowsChange={handleChange}
            //             clearSelectedRows={this.state.toggledClearRows} 
            //             customStyles={customStyles}
                        
          
            // />
            
            <ReactTabulator
                data={data}
                columns={columns}
                tooltips={true} 
                layout={"fitData"}
            />
        );
    }
}
export default OrdersList