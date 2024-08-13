import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeHeader from "../../components/creatProjectHomeHeader/HomeHeader";
import AllProject from "./AllProjects";
import AddProjectHome from "./AddProjectHome";
import axios from "axios";

export const ProjectContext = createContext();

// Create a provider component
const ProjectHomeScreen = () => {
  const [isHome, setIsHome] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projectNames, setProjectNames] = useState([]);
  const [currentProjectName, setCurrentProjectName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //   const navigate = useNavigate();

  // Attempt to retrieve userId from URL params
  const { userId: routeUserId } = useParams();

  // Or get it from localStorage as a fallback
  const userId = routeUserId || localStorage.getItem("userId");
  console.log(userId);

  const createProject = async (projectName) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/${userId}/projects`,
        { projectName }
      );
      console.log("Project created:", response.data);
    } catch (error) {
      console.error("Error creating project:", error.message);
    }
  };

  const getProject = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/${userId}/projects`
      );
      console.log("Project recived:", response.data);
      // setProjectNames(response.data);
      return response.data;
    } catch (error) {
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

        console.log("Project created successfully");

        // Now, get the updated list of projects
        const updatedProjects = await getProject();

        console.log("Updated projects received");

        // Update the state with the new list of projects
        setProjectNames(updatedProjects);

        console.log("State updated with new projects");

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
      <ProjectContext.Provider value={contextValues}>
        {isHome ? <AddProjectHome /> : <AllProject />}
      </ProjectContext.Provider>
    </div>
  );
};
export default ProjectHomeScreen;
