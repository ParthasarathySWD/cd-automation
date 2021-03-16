import React, { Component, useState, useEffect } from "react";
import axios from '../../../ThemeLayouts/repository/api';
import { useToasts } from 'react-toast-notifications';
import { confirmAlert } from 'react-confirm-alert'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import "react-data-table-component-extensions/dist/index.css";
import './style.css';
import * as Icon from 'react-feather';
// import Table from '../../CommonComponents/DataTable/DataTable';
import { ReactTabulator, reactFormatter } from "react-tabulator"; 
import DataTable, { createTheme } from 'react-data-table-component';
import TableLink from  '../../../components/DataTableComponents/TableLink';

// tooltip
import Tippy from '@tippyjs/react';


function OrderDocuments(props) {
    const { addToast } = useToasts();
    let history = useHistory();

    const [orderdocs, setOrderDocs] = useState([]);


    var ViewIcon = function(cell, formatterParams, onRendered){ 
        return "<i class='fa fa-eye text-primary'></i>";
    };
    const customStyles = {
        headCells:{
          style:{
            backgroundColor:'#a3bfd054'
          }
        }
    }
    /** Table Columns */
    const columns = [        
        {
            name: 'Document',
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
            selector: 'ocrstatus',
            cell: row =>             
            <span key={row.documentid} className={row.ocrstatuscolor}>{row.ocrstatus}</span> 
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
            // name: 'Action',
            // selector: 'action',
            name:'Action',
            cell: row => 
            <div style={{marginTop:'10px'}}>
                <p key={row.documentid}>
                  <TableLink to={'//'+row.documentid}><Icon.Eye className=" mr-2" size="20" color="purple"/></TableLink>
                </p>
            </div>
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
       <div>
            <div class="intro-y col-span-12 lg:col-span-12">
                <h2 class="font-medium text-base mr-auto">Order Documents</h2>
                <button type="button" className="btn btn-sm btn-dark-soft w-24 mr-1 ml-auto mb-2 float-right">
                    <Icon.PlusCircle/> Add New Document
                </button>
            </div>
                <DataTable
                    // title="Order Documents"
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                    selectableRows
                />
        </div>
       </>
    );
}

export default OrderDocuments;
