
import  { useContext } from "react";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { ProjectContext } from "./ProjectHomeScreen";
import DialogBox from "./DialogBox";
import { useNavigate ,useParams } from "react-router";
import * as projectConstants from "../../utils/Constants";
import "./styles.css";
// import useProjects from "../../hooks/useProjects";

const AllProject = () => {
  const { handleOpenDialog, isDialogOpen ,projectNames } = useContext(ProjectContext);
  const navigate = useNavigate();
  // const { projects, loading } = useProjects();
  // const { userId } = useParams();
  const userId = localStorage.getItem("userId");
         const handleNavigation = (projectId) => {
           console.log(`handleNavigation is running and pid${projectId}`);
          //  navigate("/app");
           localStorage.setItem("projectId", projectId)
           navigate(`/sample-project/upload`);
         };

  // if (loading) return <p>Loading projects...</p>;

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
                onClick={()=>{handleNavigation(project._id)}}
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
