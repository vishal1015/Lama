// import ProjectCard from "../../components/projectCard/ProjectCard";
// import { HiOutlinePlusCircle } from "react-icons/hi";
// import { ProjectContext } from "./ProjectHomeScreen";
// import { useContext } from "react";
// import DialogBox from "./DialogBox";
// import { useNavigate } from "react-router";
// // import axios from "axios";

//   // const data = async() => {
//   //       try {
//   //        const res = await axios.get("http://localhost:5000/project/get");
//   //        const projects = res.data;
//   //        console.log("projects are: ", projects);
//   //      } catch (e) {
//   //        console.log("Error in getting projects: ", e.message);
//   //      }
//   //    };

// const AllProject = () => {
//    const { handleOpenDialog, isDialogOpen, projectNames } =
//      useContext(ProjectContext);
//    const navigate = useNavigate();
//  const  handleNavigation = () =>{
//   navigate('/app');
//  }
//   return (
//     <div>
//       <div className=" flex  flex-col py-5 gap-2 mx-40 ">
//         <div className=" flex flex-row justify-between ">
//           <h1 className=" text-5xl text-bluetextcolor1 font-bold ">Projects</h1>
//           <div>
//             <button
//               className=" justify-center items-center font-bold text-white bg-black flex flex-row gap-4 text-md rounded-md p-2"
//               onClick={handleOpenDialog}
//             >
//               <HiOutlinePlusCircle />
//               <p>Create New Project</p>
//             </button>
//             {isDialogOpen && <DialogBox />}
//           </div>
//         </div>
//         <div
//           className=" flex flex-wrap flex-row  justify-center items-center py-2 overflow-auto"
//           onClick={handleNavigation}
//         >
//           {projectNames.map((name, index) => (
//             <ProjectCard key={index} ProjectName={name} /> // Return the actual JSX element
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllProject;

import ProjectCard from "../../components/projectCard/ProjectCard";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { ProjectContext } from "./ProjectHomeScreen";
import { useContext } from "react";
import DialogBox from "./DialogBox";
import { useNavigate } from "react-router";
import * as projectConstants from "../../utils/Constants";
import "./styles.css";

// for handle project form backedn call api
// import axios from "axios";

// const data = async() => {
//       try {
//        const res = await axios.get("http://localhost:5000/project/get");
//        const projects = res.data;
//        console.log("projects are: ", projects);
//      } catch (e) {
//        console.log("Error in getting projects: ", e.message);
//      }
//    };
const AllProject = () => {
  const { handleOpenDialog, isDialogOpen, projectNames } =
    useContext(ProjectContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/app");
  };

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
        <div className="projects-list" onClick={handleNavigation}>
          {projectNames.map((name, index) => (
            <ProjectCard key={index} ProjectName={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProject;
