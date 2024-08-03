import  Homevector from  '../assets/homeVector.svg'
import { CiCirclePlus } from "react-icons/ci";
import Homeicon from '../assets/homeIcon.svg'
import lemaIcon from '../assets/lama.svg'
import settingIcon from '../assets/settingIcon.svg'
import notificatoinIcon from '../assets/notificationBellIcon.svg'
import { useState } from 'react';

function AddProjectHome() {

     const [isDialogOpen, setIsDialogOpen] = useState(false);
     const [projectName, setProjectName] = useState("");
     const [errorMessage, setErrorMessage] = useState("");

     const handleOpenDialog = () => {
       setIsDialogOpen(true);
     };

     const handleCloseDialog = () => {
       setIsDialogOpen(false);
       setProjectName("");
       setErrorMessage("");
     };

     const handleSubmit = () => {
       if (projectName.trim() === "") {
         setErrorMessage("Please enter a project name");
       } else {
         // Handle project creation logic here, e.g., save projectName to state or send to API
         console.log("Project name:", projectName);
         handleCloseDialog();
       }
     };
  return (
    <>
      <div className=" flex  flex-row p-2 justify-between items-center">
        <div className=" flex flex-row gap-1">
          <img src={lemaIcon} alt="" />
          <h1 className=" text-4xl font-bold text-bluetextcolor1">LAMA.</h1>
        </div>
        <div className="flex flex-row gap-1 p-4 justify-center items-center">
          <img src={settingIcon} alt="" className="w-10 h-10" />
          <img src={notificatoinIcon} alt="" className="w-10 h-10" />
        </div>
      </div>
      <div className="ml-60">
        <button className=" flex flex-row gap-2 rounded-3xl shadow-md border border-black w-36">
          <img src={Homeicon} alt="" className=" w-5 " />
          Back To Home
        </button>
      </div>
      <div className=" p-2  ml-20 mr-20 flex flex-col gap-2 justify-center items-center ">
        <h1
          className="text-5xl text-bluetextcolor1  font-bold"
          style={{
            "WebkitTextStroke": "1px black",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Create a New Project
        </h1>
        <img src={Homevector} className=" h-30 w-30 " />
        <p className=" pl-32 pr-32 text-greaytextcolor2 text-lg ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in
        </p>
        <div>
          <button
            onClick={handleOpenDialog}
            className=" justify-center items-center font-bold text-white bg-black flex flex-row gap-4 text-lg rounded-md p-4"
          >
            <CiCirclePlus />
            <p>Create New Project</p>
          </button>
          {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-bold">Create Project</h2>
            <input
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 mt-2"
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="flex justify-end mt-4">
              <button onClick={handleCloseDialog} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded   
 ml-2"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </>
  );
}

export default AddProjectHome;
