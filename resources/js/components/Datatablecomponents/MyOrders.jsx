import React, { useState, useEffect, useCallback, useMemo } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import DataTable from "react-data-table-component";
// import "./styles.css";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = async (page, size = perPage) => {
    setLoading(true);

    const response = await axios.post(
      `myorders/fetchorders`,
      {
        rowCount: size,
        page: page,
        searchText: 10,
      }
    );
    console.log(response);
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers(1);
  }, []);

  const handleDelete = useCallback(
    (row) => async () => {
      await axios.delete(`https://reqres.in/api/users/${row.id}`);
      const response = await axios.get(
        `https://reqres.in/api/users?page=${currentPage}&per_page=${perPage}`
      );

      setData(removeItem(response.data.data, row));
      setTotalRows(totalRows - 1);
    },
    [currentPage, perPage, totalRows]
  );

  const columns = useMemo(
    () => [
      {
        name: "Order Number",
        selector: "OrderUID",
        sortable: true
      },
      {
        name: "Loan Number",
        selector: "LoanNumber",
        sortable: true
      },
      {
        name: "Client",
        selector: "ClientUID",
        sortable: true
      },
      {
        name: "Status",
        selector: "StatusUID",
        sortable: true
      },
      {
        // eslint-disable-next-line react/button-has-type
        cell: (row) => <button onClick={handleDelete(row)}>Delete</button>
      }
    ],
    [handleDelete]
  );

  const handlePageChange = (page) => {
    fetchUsers(page);
    setCurrentPage(page);
  };

  const handlePerRowsChange = async (newPerPage, page) => {
    fetchUsers(page, newPerPage);
    setPerPage(newPerPage);
  };

  return (
    <DataTable
      title="Users"
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
    />
  );
};

export default MyOrders;