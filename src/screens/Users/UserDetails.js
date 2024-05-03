import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  let { userId } = useParams();

  console.log("User ID: ", userId);

  return <div>User Details</div>;
};

export default UserDetails;
