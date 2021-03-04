import React, { useState, useEffect } from "react";
import "./style.css";

import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";

import { ReactTabulator, reactFormatter } from "react-tabulator"; 

function DataTable(props) {
    const [data, rowData] = useState([]);
    const [columns, setColumns] = useState([]);

    const initialFilter = [
        {field:"color", type:"=", value:"red"}
    ];
    useEffect(()=>{
        setColumns(props.setColumns);
    }, []);
    
    useEffect(()=>{
        rowData(props.setData);
    }, []);

    return (
        <>
            <ReactTabulator columns={columns} data={props.setData} options={initialFilter}/>
        </>
    );

    
}

export default DataTable;