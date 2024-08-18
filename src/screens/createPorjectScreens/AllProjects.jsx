import { useContext } from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { ProjectContext } from "./ProjectHomeScreen";
import DialogBox from "./DialogBox";
import { useNavigate } from "react-router";
import * as projectConstants from "../../utils/Constants";
import { PulseLoader } from "react-spinners";
import "./styles.css";

const AllProject = () => {
  const { handleOpenDialog, isDialogOpen, projectNames, isLoading } =
    useContext(ProjectContext);
  const navigate = useNavigate();

  const handleNavigation = (projectId) => {
    console.log(`handleNavigation is running and pid${projectId}`);
    localStorage.setItem("projectId", projectId);
    navigate(`/sample-project/upload`);
  };

  if (isLoading) return (
    <div className=" justify-center items-center flex ">
      <PulseLoader />
    </div>
  );
  return (
    <div>
      <div className="all-project-container">
        <div className="header-container">
          <h1 className="projects-title">{projectConstants.projectsText}</h1>
          <div>
            <button className="create-button" onClick={handleOpenDialog}>
              <HiOutlinePlusCircle />
              <p>{projectConstants.createNewProjectText}</p>
            </button>
            {isDialogOpen && <DialogBox />}
          </div>
        </div>
        <div className="projects-list">
          {projectNames.length > 0 ? (
            projectNames.map((project) => (
              <ProjectCard
                key={project._id}
                ProjectName={project.projectName}
                onClick={() => {
                  handleNavigation(project._id);
                }}
              />
            ))
          ) : (
            <p>No projects found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProject;
