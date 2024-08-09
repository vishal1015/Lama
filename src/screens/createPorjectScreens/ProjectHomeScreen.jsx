import  { createContext, useState } from "react";
import HomeHeader from "../../components/creatProjectHomeHeader/HomeHeader";
import AllProject from "./AllProjects";
import AddProjectHome from "./AddProjectHome";
// import axios from "axios";

export const ProjectContext = createContext();

// Create a provider component
 const ProjectHomeScreen = () => {
  const [isHome, setIsHome] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projectNames, setProjectNames] = useState([]);
  const [currentProjectName, setCurrentProjectName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

    // const data = async () => {
    //   try {
    //     const res = await axios.get("http://localhost:5000/project/get");
    //     const projects = res.data;
    //     console.log("projects are: ", projects);
    //   } catch (e) {
    //     console.log("Error in getting projects: ", e.message);
    //   }
    // };
  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentProjectName("");
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if (currentProjectName.trim() === "") {
      setErrorMessage("Please enter a project name");
    } else {
      setProjectNames([...projectNames, currentProjectName]);
      handleCloseDialog();
      // data();
      if (isHome) setIsHome(false);
    //   navigate("/all-project");
    }
  };

   const contextValues = {
     isDialogOpen,
     projectNames,
     currentProjectName,
     errorMessage,
     setIsDialogOpen,
     setProjectNames,
     setCurrentProjectName,
     setErrorMessage,
     handleOpenDialog,
     handleCloseDialog,
     handleSubmit,
   };
  return (
    <div>
      <HomeHeader />
      <ProjectContext.Provider
        value={contextValues}
      >
        {isHome ? <AddProjectHome /> : <AllProject />}
      </ProjectContext.Provider>
    </div>
  );
};
export default ProjectHomeScreen;