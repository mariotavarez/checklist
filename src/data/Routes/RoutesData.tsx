// React
import React from "react";
// Models
import { RoutesModel } from "interfaces/Routes/RoutesModel";

// DASHBOARD
const DASHBOARD = React.lazy(
  () =>
    import(
      /* webpackChunkName: DashboardComponent */ "../../components/features/Dashboard/Dashboard"
    )
);

export const ROUTES_DATA: RoutesModel[] = [
  {
    to: "/inicio",
    path: "/inicio",
    component: DASHBOARD,
  },
];
