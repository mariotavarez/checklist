import React, { Suspense, useState } from "react";
import { Sidebar } from "./../../shared/Sidebar/Sidebar";
import {} from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { FirmaElectronica } from "./../FirmaElectronica/FirmaElectronica";

const Dashboard = () => {
  const [component, setComppnent] = useState(<FirmaElectronica />);
  return (
    <div>
      <Sidebar children={component} />
    </div>
  );
};

export default Dashboard;
