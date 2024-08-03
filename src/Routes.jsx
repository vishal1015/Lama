import HomePage from "./screens/AddProjectHome";
import AllProject from "./screens/AllProjects";
// import AboutUsPage from "pages/aboutUs";

const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "/projects",
    component: AllProject,
    exact: true,
  },
  // and so on for other routes in your project
];

export default routes;
