
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        { isLoggedIn ? (
          <>
            <Route path="account-settings" element={<AccountSetting />} />
            <Route path="create-project" element={<ProjectHomeScreen />} />
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
