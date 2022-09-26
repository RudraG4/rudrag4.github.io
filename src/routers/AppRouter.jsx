import React, { useContext } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { RouteContext } from "context";
import BaseLayout from "layouts/BaseLayout";

export default function AppRouter() {
  const { routes } = useContext(RouteContext);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          {routes.map((_route, _id) => {
            return <Route key={_id} {..._route} />;
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
