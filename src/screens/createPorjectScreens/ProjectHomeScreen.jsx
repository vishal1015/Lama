import  { createContext, useState } from "react";
import HomeHeader from "../../components/creatProjectHomeHeader/HomeHeader";
import AllProject from "./AllProjects";
import AddProjectHome from "./AddProjectHome";

// Create the context
export const ProjectContext = createContext();

// Create a provider component
 const ProjectHomeScreen = () => {
  const [isHome, setIsHome] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projectNames, setProjectNames] = useState([]);
  const [currentProjectName, setCurrentProjectName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

  const handleOpenDialog = () => {
    console.log('clicked');
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentProjectName("");
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if(isHome)setIsHome(false);
    if (currentProjectName.trim() === "") {
      setErrorMessage("Please enter a project name");
    } else {
      setProjectNames([...projectNames, currentProjectName]);
      handleCloseDialog();
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