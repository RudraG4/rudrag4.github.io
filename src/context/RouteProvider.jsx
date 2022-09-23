import { RouteContext } from "./BuildContext";
import { Home, Skills, Experience, Projects, Contact } from "../pages";

const routes = [
  {
    path: "/",
    label: "Home",
    index: true,
    element: <Home />,
  },
  {
    path: "/skills",
    label: "Skills",
    element: <Skills />,
  },
  {
    path: "/experience",
    label: "Experience",
    element: <Experience />,
  },
  {
    path: "/projects",
    label: "Projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    label: "Contact",
    element: <Contact />,
  },
];

export default function RouteProvider({ children }) {
  return (
    <RouteContext.Provider value={{ routes }}>{children}</RouteContext.Provider>
  );
}
