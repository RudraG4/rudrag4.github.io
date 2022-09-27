import { Analytics } from "components";
import RouteProvider from "context/providers/RouteProvider";
import AppRouter from "routers/AppRouter";
import "./styles.scss";

export default function App() {
  return (
    <>
      <Analytics />
      <RouteProvider>
        <AppRouter />
      </RouteProvider>
    </>
  );
}
