import { SEO } from "components";
import RouteProvider from "context/providers/RouteProvider";
import AppRouter from "routers/AppRouter";
import Config from "config";
import "./styles.scss";

export default function App() {
  return (
    <>
      <SEO {...Config.Metadata} />
      <RouteProvider>
        <AppRouter />
      </RouteProvider>
    </>
  );
}
