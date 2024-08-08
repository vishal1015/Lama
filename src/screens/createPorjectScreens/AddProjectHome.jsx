import Homevector from "../../assets/homeVector.svg"; 
import { CiCirclePlus } from "react-icons/ci";
import { useContext } from "react";
import DialogBox from "./DialogBox";
import { ProjectContext } from "./ProjectHomeScreen";
function AddProjectHome() {
  
  const {
    isDialogOpen,
    handleOpenDialog,
  } = useContext(ProjectContext);

  return (
    <>
      <div className="p-2 ml-20 mr-20 flex flex-col gap-2 justify-center items-center">
        <h1
          className="text-5xl text-bluetextcolor1 font-bold"
          style={{
            WebkitTextStroke: "1px black",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Create a New Project
        </h1>
        <img src={Homevector} className="h-30 w-30" />
        <p className="pl-32 pr-32 text-greaytextcolor2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <div>
          <button
            onClick={handleOpenDialog}
            className="justify-center items-center font-bold text-white bg-black flex flex-row gap-4 text-lg rounded-md p-4"
          >
            <CiCirclePlus />
            <p>Create New Project</p>
          </button>
          {isDialogOpen && <DialogBox />
          // (
          //   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          //     <div className="bg-white p-8 rounded-md w-[40%]">
          //       <h2 className="text-lg font-bold mb-4">Create Project</h2>
          //       <input
          //         type="text"
          //         placeholder="Enter project name"
          //         value={currentProjectName}
          //         onChange={(e) => setCurrentProjectName(e.target.value)}
          //         className="border border-gray-300 rounded w-full p-2 mt-2"
          //       />
          //       {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          //       <div className="flex justify-end mt-4">
          //         <button
          //           onClick={handleCloseDialog}
          //           className="bg-white hover:bg-gray-100 font-bold py-2 px-4 text-red-500 rounded"
          //         >
          //           Cancel
          //         </button>
          //         <button
          //           onClick={handleSubmit}
          //           className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded ml-2"
          //         >
          //           Create
          //         </button>
          //       </div>
          //     </div>
          //   </div>
          // )
          }
        </div>
      </div>
    </>
  );
}

export default AddProjectHome;
