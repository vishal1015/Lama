// import Homevector from "../../assets/homeVector.svg"; 
// import { CiCirclePlus } from "react-icons/ci";
// import { useContext } from "react";
// import DialogBox from "./DialogBox";
// import { ProjectContext } from "./ProjectHomeScreen";
// function AddProjectHome() {
  
//   const {
//     isDialogOpen,
//     handleOpenDialog,
//   } = useContext(ProjectContext);

//   return (
//     <>
//       <div className="p-2 ml-20 mr-20 flex flex-col gap-2 justify-center items-center">
//         <h1
//           className="text-5xl text-bluetextcolor1 font-bold"
//           style={{
//             WebkitTextStroke: "1px black",
//             textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
//           }}
//         >
//           Create a New Project
//         </h1>
//         <img src={Homevector} className="h-30 w-30" />
//         <p className="pl-32 pr-32 text-greaytextcolor2 text-lg">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in
//         </p>
//         <div>
//           <button
//             onClick={handleOpenDialog}
//             className="justify-center items-center font-bold text-white bg-black flex flex-row gap-4 text-lg rounded-md p-4"
//           >
//             <CiCirclePlus />
//             <p>Create New Project</p>
//           </button>
//           {isDialogOpen && <DialogBox />}
//         </div>
//       </div>
//     </>
//   );
// }

// export default AddProjectHome;

import Homevector from "../../assets/homeVector.svg";
import { CiCirclePlus } from "react-icons/ci";
import { useContext } from "react";
import DialogBox from "./DialogBox";
import { ProjectContext } from "./ProjectHomeScreen";
import * as projectConstants from "../../utils/Constants"; 
import "./styles.css"; 

function AddProjectHome() {
  const { isDialogOpen, handleOpenDialog } = useContext(ProjectContext);

  return (
    <>
      <div className="add-project-home-container">
        <h1 className="create-project-title">
          {projectConstants.createProjectTitle}
        </h1>
        <img src={Homevector} className="home-vector" alt="Home Vector" />
        <p className="create-project-description">
          {projectConstants.createProjectDescription}
        </p>
        <div>
          <button onClick={handleOpenDialog} className="create-project-button">
            <CiCirclePlus />
            <p>{projectConstants.createNewProjectText}</p>
          </button>
          {isDialogOpen && <DialogBox />}
        </div>
      </div>
    </>
  );
}

export default AddProjectHome;
