import RouteProvider from "./context/RouteProvider";
import AppRouter from "./routers/AppRouter";
import "./styles.scss";

export default function App() {
  return (
    <RouteProvider>
      <AppRouter />
    </RouteProvider>
  );
}
