import React, { useState, useEffect, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

// import "./styles.css";


/*Style to data table*/
const customStyles = {
  headCells:{
    style:{
      backgroundColor:'#a3bfd054'
    }
  }
}
const MyOrders = (props) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState(props.title);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  
  useEffect(() => {
    async function fetchAPI () {
    let response = await props.fetchData(1);
    
    setCurrentPage(page);
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
    }
    fetchAPI();
  }, []);

    const columns = useMemo(
      () => props.columndata,
    [handleDelete]
  );

  const handlePageChange = async (page) => {
    let response = await props.fetchData(page);
    setCurrentPage(page);
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);

  };

  const handlePerRowsChange = async (newPerPage, page) => {
    let response = await props.fetchData(page, newPerPage);
    setPerPage(newPerPage);
    props.setPerPage(newPerPage);
    setCurrentPage(page);
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);

  };

  

      const handleDelete = useCallback( (row) => {
        async () => {
        await axios.delete(`https://reqres.in/api/users/${row.id}`);
      const response = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}&per_page=${perPage}`
      );

      setData(removeItem(response.data.data, row));
      setTotalRows(totalRows - 1);
    }
    },
    [currentPage, perPage, totalRows]
    );
  return (

    <DataTable
      title={title}
      columns={columns}
      data={data}
      search
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      paginationDefaultPage={currentPage}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      selectableRows
      onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
      customStyles={customStyles}
    />
  );
};

export default MyOrders;