import { Analytics } from "components";
import RouteProvider from "context/RouteProvider";
import AppRouter from "routers/AppRouter";
import "./styles.scss";

export default function App() {
  return (
    <>
      {
        /* eslint-disable-next-line */
        process.env.NODE_ENV === "production" && <Analytics />
      }
      <RouteProvider>
        <AppRouter />
      </RouteProvider>
    </>
  );
}
