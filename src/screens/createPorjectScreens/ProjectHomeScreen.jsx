import { createContext, useEffect, useState } from "react";
import HomeHeader from "../../components/creatProjectHomeHeader/HomeHeader";
import AllProject from "./AllProjects";
import AddProjectHome from "./AddProjectHome";
import { dbUri } from "../../utils/Constants";
import axios from "axios";
// import { BeatLoader } from "react-spinners";

export const ProjectContext = createContext();

// Create a provider component
const ProjectHomeScreen = () => {
  const [isHome, setIsHome] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projectNames, setProjectNames] = useState([]);
  const [currentProjectName, setCurrentProjectName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //   const navigate = useNavigate();
  const [ isLoading , setIsLoading ] = useState(false);

  const userId = localStorage.getItem("userId");

  const createProject = async (projectName) => {
    setIsLoading(true);
    try {      
      const response = await axios.post(
        `${dbUri}/api/users/${userId}/projects`,
        { projectName }
      );
      setIsLoading(false);
      console.log("Project created:", response.data);
    } catch (error) {
      setIsLoading(false);
      console.error("Error creating project:", error.message);
    }
  };  

  const getProject = async () => {
    console.log(userId);
    setIsLoading(true);
    try {
      const response = await axios.get(`${dbUri}/api/users/${userId}/projects`);
      console.log("Project recived:", response.data);
      setIsLoading(false);
      return response.data;
    } catch (error) {
      setIsLoading(false);
      console.error("Error while getting project:", error.message);
    }
  };

  useEffect(()=>{

    setProjectNames(getProject());

  },[])
   

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentProjectName("");
    setErrorMessage("");
  };

  const handleSubmit = async () => {
    if (currentProjectName.trim() === "") {
      setErrorMessage("Please enter a project name");
    } else {
      try {
        console.log("Before creating project");

        // Wait for the project to be created
        await createProject(currentProjectName);

        // Now, get the updated list of projects
        const updatedProjects = await getProject();

        // Update the state with the new list of projects
        setProjectNames(updatedProjects);
        // Close the dialog box
        handleCloseDialog();

        // Navigate to the projects list if currently on the home screen
        if (isHome) setIsHome(false);
      } catch (error) {
        console.error(
          "Error during project creation and retrieval:",
          error.message
        );
      }
    }
  };


  const contextValues = {
    isDialogOpen,
    projectNames,
    currentProjectName,
    errorMessage,
    isLoading,
    setIsDialogOpen,
    setProjectNames,
    setCurrentProjectName,
    setErrorMessage,
    handleOpenDialog,
    handleCloseDialog,
    handleSubmit,
    setIsLoading,
  };
  return (
    <div>
      <HomeHeader />
      <ProjectContext.Provider value={contextValues}>
        {isHome ? <AddProjectHome /> :<AllProject /> }
      </ProjectContext.Provider>
    </div>
  );
};
export default ProjectHomeScreen;
