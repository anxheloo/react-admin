import React, { useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import { userRows } from "../../data/dummuData";
import AddUser from "../../components/AddNewUser/AddUser";

const Users = () => {
  const [openModal, setOpenModal] = useState(false);

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
        return (
          <div className=" w-full h-full flex  items-center">
            <img
              className=" w-8 h-8 rounded-full object-cover"
              src={params.row.img || "/noavatar.png"}
              alt="avatar"
            ></img>
          </div>
        );
      },
    },

    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      type: "email",
      width: 200,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },

    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   width: 100,
    //   renderCell: (params) => {
    //     return (
    //       <div className="flex gap-2">
    //         <div>View</div>
    //         <div>Delete</div>
    //       </div>
    //     );
    //   },
    // },

    {
      field: "createdAt",
      headerName: "Created At",
      width: 200,
      type: Date,
      sortable: true,
    },

    {
      field: "verified",
      headerName: "Verified",
      width: 100,
      type: "boolean",
    },
  ];

  return (
    <div className="h-full ">
      <div className="mb-5 flex items-center gap-5">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={() => setOpenModal(true)}
          className="p-3 cursor-pointer bg-softBg border-[rgba(255,255,255,0.3)] rounded-lg hover:opacity-80 active:opacity-70"
        >
          Add New User
        </button>
      </div>

      <DataTable columns={columns} rows={userRows}></DataTable>

      {openModal && <AddUser setOpenModal={setOpenModal}></AddUser>}
    </div>
  );
};

export default Users;
