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
import './style.css';

import Table from '../../CommonComponents/DataTable/DataTable';
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
                alert("View row data for: " + cell.getRow().getData().id)
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
        <div className="div-order-docs">           
            <Table setColumns={columns} setData={orderdocs}/>
        </div>
    );
}

export default OrderDocuments;