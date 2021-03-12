import React, { Component, useState, useEffect } from "react";
import axios from '../../../ThemeLayouts/repository/api';
import { useToasts } from 'react-toast-notifications';
import { confirmAlert } from 'react-confirm-alert'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import "react-data-table-component-extensions/dist/index.css";
// import './style.css';

// import Table from '../../CommonComponents/DataTable/DataTable';
import { ReactTabulator, reactFormatter } from "react-tabulator"; 
import DataTable, { createTheme } from 'react-data-table-component';



function OrderDocuments(props) {
    const { addToast } = useToasts();
    let history = useHistory();

    const [orderdocs, setOrderDocs] = useState([]);


    var ViewIcon = function(cell, formatterParams, onRendered){ 
        return "<i class='fa fa-eye text-primary'></i>";
    };

    /** Table Columns */
    const columns = [        
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
            name: 'OCR Status',
            selector: 'id',
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
            selector: 'action',
        }
    ];
    /** end */

    /** Get Order Documents */
    const fetchOrderDocs = () => {
        axios.get('orderdocs/fetchOrderDocs', {
            params: {
                OrderUID: props.orderid
            }
        }).then( response =>{
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

    return (
       <>
        <DataTable
            title="Order Documents"
            columns={columns}
            data={data}
        />
       </>
    );
}

export default OrderDocuments;