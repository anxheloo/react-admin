import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./DataTable.css";
import { Link } from "react-router-dom";

const DataTable = ({ columns, rows }) => {
  const handleDelete = (id) => {
    //delete the item
    console.log("Id has been deleted: ", id);
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex gap-2 h-full items-center cursor-pointer">
          <Link to={`${params.row.id}`}>
            <img src="/view.svg" alt="view-user"></img>
          </Link>
          <div onClick={() => handleDelete(params.row.id)}>
            <img src="/delete.svg" alt="delete-user"></img>
          </div>
        </div>
      );
    },
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        borderRadius: "6px",
        overflow: "hidden",
      }}
    >
      <DataGrid
        className=" p-5"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        //adding the toolbar on top , search and export, cuz we disabled column filter, selector and others.
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </Box>
  );
};

export default DataTable;
