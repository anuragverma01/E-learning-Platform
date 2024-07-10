import React from "react";
import Usersidebar from "../Components/usersidebar";
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div>
      <Usersidebar />
      <Outlet />
    </div>
  );
}

export default AdminLayout;
