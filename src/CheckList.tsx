// React
import React, { Suspense } from "react";
// Chakra Provider
import { ChakraProvider } from "@chakra-ui/react";
// Components
// Routes App
import { BrowserRouter, Route } from "react-router-dom";

const Login = React.lazy(() => import("./components/features/Login/Login"));

import { Routes } from "react-router-dom";
// Routes
import { ROUTES_DATA } from "./data/Routes/RoutesData";

export const CheckList = () => {
  return (
    <ChakraProvider>
      <Suspense fallback={<span>CARGANDO....</span>}>
        <BrowserRouter>
          <Routes>
            <Route path={`/`} element={<Login />}>
              {/* HOME */}
              <Route index element={<Login />} />
              {/* HOME */}
            </Route>
            {ROUTES_DATA.map(({ to, component: Component }) => (
              <Route key={to} path={to} element={<Component />} />
            ))}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ChakraProvider>
  );
};
