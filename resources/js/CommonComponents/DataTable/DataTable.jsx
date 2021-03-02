import React, { useState } from "react";
import "./style.css";

import "react-tabulator/lib/styles.css";
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css";

import { ReactTabulator } from "react-tabulator"; 

function DataTable(props) {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    console.log(props.setColumns)

    // setColumns(props.setColumns);
    // setData(props.setData);

    return (
        <>
            <ReactTabulator columns={columns} data={data} />
        </>
    );

    
}

export default DataTable;