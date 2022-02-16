import React from "react";
import { Sidebar } from "./../../shared/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Sidebar children={<h1>Contenido</h1>} />
    </div>
  );
};

export default Dashboard;
