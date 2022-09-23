import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { RouteContext } from "../context/BuildContext";
import BaseLayout from "../layout/BaseLayout";

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
