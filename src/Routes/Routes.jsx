
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../screens/HomePage";
import AddProjectHome from "../screens/createPorjectScreens/AddProjectHome";
import AllProject from "../screens/createPorjectScreens/AllProjects";
import Layout from "../Layout/appLayout/Layout";
import Upload from "../screens/uploadFLowScreen/Upload";
import AccountSetting from "../screens/accountSettingScreen/AccountSetting";
import Configuration from "../screens/configurationScreen/Configuration"
import EditTranscriptScreen from "../screens/editTranscript/EditTranscriptScreen";
import SampleProject from "../screens/uploadFLowScreen/SampleProject";
import { ProjectHomeScreen } from "../components/import";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectHomeScreen />} />
        <Route path="add-project" element={<AddProjectHome />} />
        <Route path="all-project" element={<AllProject />} />
        <Route path="app" element={<Layout />}>
          <Route path="/app" element={<Upload />} />
          <Route path="account-setting" element={<AccountSetting />} />
          <Route path="configurations" element={<Configuration />} />
          <Route path="edit-transcript" element={<EditTranscriptScreen />} />
          <Route path="sample" element={<SampleProject />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
