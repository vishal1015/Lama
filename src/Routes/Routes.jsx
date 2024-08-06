// import HomePage from "./screens/AddProjectHome";
// import AllProject from "./screens/AllProjects";
// import Layout from "./Layout/Layout";
// // import AboutUsPage from "pages/aboutUs";
// import Upload from "./screens/Upload";
// import Sidebar from "./sideBar/SideBar";
// import { Children } from "react";

// const routes = [
//   {
//     path: "/",
//     component: HomePage,
//   },
//   {
//     path: "app",
//     component: Layout,
//     Children: [
//       {
//         path: "app/upload",
//         component: Upload,
//       },
//       {
//         path: "app/all-project",
//         component: AllProject,
//       },
//     ],
//   },

//   // and so on for other routes in your project
// ];

// export default routes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../screens/HomePage";
import AddProjectHome from "../screens/AddProjectHome";
import AllProject from "../screens/AllProjects";
import Layout from "../Layout/Layout";
import Upload from "../screens/Upload";
import AccountSetting from "../screens/AccountSetting";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="add-project" element={<AddProjectHome />} />
        <Route path="app" element={<Layout />}>
          <Route path="upload" element={<Upload />} />
          <Route path="all-project" element={<AllProject />} />
          <Route path="account-setting" element={<AccountSetting/>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
