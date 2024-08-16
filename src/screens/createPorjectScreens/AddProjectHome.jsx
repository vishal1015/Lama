
import Homevector from "../../assets/homeVector.svg";
import { CiCirclePlus } from "react-icons/ci";
import { useContext } from "react";
import DialogBox from "./DialogBox";
import { ProjectContext } from "./ProjectHomeScreen";
import * as projectConstants from "../../utils/Constants"; 
import { BeatLoader } from "react-spinners";
import "./styles.css"; 

function AddProjectHome() {
  const { isDialogOpen, handleOpenDialog, isLoading } =
    useContext(ProjectContext);
   
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

          {isDialogOpen ?
            (
              isLoading ? 
              <div className="justify-center items-center flex h-screen">
                <BeatLoader color="#2790cf"/>
              </div>
              : <DialogBox />
            )
            :null
          }
        </div>
      </div>
    </>
  );
}

export default AddProjectHome;
