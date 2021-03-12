import React, { Component, useState, useEffect } from "react";
import axios from '../../../ThemeLayouts/repository/api';
import { useToasts } from 'react-toast-notifications';
import { confirmAlert } from 'react-confirm-alert'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import "react-data-table-component-extensions/dist/index.css";
// import './style.css';

// import Table from '../../CommonComponents/DataTable/DataTable';
import { ReactTabulator, reactFormatter } from "react-tabulator"; 


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
            title: 'Documnet',
            field: 'document',
        },
        {
            title: 'Type',
            field: 'type',
        },
        {
            title: 'OCR Status',
            field: 'id',
        },
        {
            title: 'Uploaded On',
            field: 'uploadedon',
        },
        {
            title: 'Uploaded By',
            field: 'uploadedby',
        },        
        {
            title: 'Action',
            align: "center",
            formatter: ViewIcon,
            cellClick:function(e, cell){               
                console.log('Cell Data : ', cell.getData().documentid);
            }
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
        <h1>Documnet</h1>
       </>
    );
}

export default OrderDocuments;