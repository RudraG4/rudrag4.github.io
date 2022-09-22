import { DataContext } from "./BuildContext";
import data from "../data/data.json";

export default function DataContextProvider({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}
