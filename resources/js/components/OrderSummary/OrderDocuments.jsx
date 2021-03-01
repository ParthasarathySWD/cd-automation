import React, { Component, useState, useEffect } from "react";
import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import '../../../css/MyOrder/MyOrder.css';
import OrderDocumentTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

function OrderDocuments(params) {
    const { addToast } = useToasts();
    let history = useHistory();

    const [orderdocs, setOrderDocs] = useState([]);

    /** Data Table Custome Style */
    const customStyles = {
        headCells:{
          style:{
            backgroundColor:'#a3bfd054'
          }
        }
    }
    /** end */

    /** Action Columns Custome Function */
    function Td({ children, to }) {
        const ContentTag = to ? Link : 'div';      
        return (
          <td>
            <ContentTag to={to}>{children}</ContentTag>
          </td>
        );
    }
    /** end */

    // const data = [
    //     {
    //         id : '1',
    //         document : 'Closing',
    //         type : 'Prelim',
    //         uploadedon : '03-01-2021 11:20:00',
    //         uploadedby : 'Mohindar'
    //     },
    //     {
    //         id : '2',
    //         document : 'Closing Encloser',
    //         type : 'Closing',
    //         uploadedon : '03-01-2021 11:30:00',
    //         uploadedby : 'Mohindar'
    //     }
    // ];

    /** Table Columns */
    const columns = [
        {
            name: '#',
            selector: 'id',
            sortable: true,
        },
        {
            name: 'Documnet',
            selector: 'document',
            sortable: true,
        },
        {
            name: 'Type',
            selector: 'type',
            sortable: true,
        },
        {
            name: 'Uploaded On',
            selector: 'uploadedon',
            sortable: true,
        },
        {
            name: 'Uploaded By',
            selector: 'uploadedby',
            sortable: true,
        },
        {
            name: 'Action',
            sortable: false,
            cell: row => <div key={row.documentid}>                       
                <Td ><a href = {row.filepath} target = "_blank">
                    <span className="fa fa-eye text-primary p-1"></span>
                    </a>
                </Td>
                {/* <Td to={'/edituser/'+row.UserUID}><span className="fa fa-edit text-secondary p-1"></span></Td>
                <Td ><span className="fa fa-trash text-danger p-1"></span></Td>  */}
            </div>
        },
    ];
    /** end */

    /** Get Order Documents */
    const fetchOrderDocs = () => {
        axios.get('fetchOrderDocs/'+21).then( response =>{
            console.log(response);
            setOrderDocs(response.data.TableData);
        })
    }
    /** end */
    const [page, setPage] = useState(1);
    useEffect(() => {
        fetchOrderDocs();
    },[page]);

    const data = orderdocs;

    const tableData = {
        columns,
        data
    };

    return (
        <div className="div-order-docs">
            {/* <input type="text" className="search-input" placeholder="&#61442; search"></input> */}
            {/* <DataTableExtensions {...tableData}> */}
                <OrderDocumentTable                                                                  
                    title=""
                    columns={columns}
                    data={data}
                    search={true}
                    customStyles={customStyles}
                    defaultSortField="title"
                    pagination
                />
            {/* </DataTableExtensions>             */}
        </div>
    );
}

export default OrderDocuments;