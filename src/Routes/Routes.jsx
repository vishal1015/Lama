
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "../screens/HomePage";
// import AddProjectHome from "../screens/createPorjectScreens/AddProjectHome";
// import AllProject from "../screens/createPorjectScreens/AllProjects";
import Layout from "../Layout/appLayout/Layout";
import Upload from "../screens/uploadFLowScreen/Upload";
import AccountSetting from "../screens/accountSettingScreen/AccountSetting";
import Configuration from "../screens/configurationScreen/Configuration"
import EditTranscriptScreen from "../screens/editTranscript/EditTranscriptScreen";
import LoginPage from "../auth/Login";
import RegisterPage from "../auth/Register";
import HomePage from "../screens/HomePage";
import { ProjectHomeScreen } from "../components/import";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const AppRoutes = () => {
  const { isLoggedIn } = useContext(GlobalContext);
  console.log(isLoggedIn)
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add-project/:userId" element={<ProjectHomeScreen />} />
        <Route path="/add-project/:userId/app/:projectId" element={<Layout />}>
          <Route
            path="/add-project/:userId/app/:projectId"
            element={<Upload />}
          />
          <Route path="account-setting" element={<AccountSetting />} />
          <Route path="configurations" element={<Configuration />} />
          <Route
            path="edit-transcript/:fileId"
            element={<EditTranscriptScreen />}
          />
        </Route> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {isLoggedIn ? (
          <>
            <Route path="account-settings" element={<AccountSetting />} />
            <Route path="/create-project" element={<ProjectHomeScreen />} />
            <Route path="sample-project" element={<Layout />}>
              <Route path="upload" element={<Upload />} />
              <Route path="transcript" element={<EditTranscriptScreen />} />
              <Route path="widget-configuration" element={<Configuration />} />
            </Route>
          </>
        ) : null}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
