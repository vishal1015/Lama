

import Photo from "../../public/photo2.jpg"
import cloud from "../../public/cloud.png"
import { useState } from "react";
import ChannelCard from "../components/ChannelCard";
const Upload = () => {
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
    <div className=" flex flex-row">
      <div className=" w-full h-screen px-6 ">
        <h1 className=" text-4xl text-bluetextcolor1 font-bold p-6 " >Upload</h1>
        <div className="">
          <div className="grid grid-rows-2 grid-cols-3 gap-0 ">
            <div className="">
              <ChannelCard />
            </div>
            <div className="">
              <ChannelCard />
            </div>
            <div className="">
              <ChannelCard />
            </div>
            <div className="">
              <ChannelCard />
            </div>
            <div className="">
              <ChannelCard />
            </div>
            <div className="">
              <ChannelCard />
            </div>
          </div>
        </div>

        <h1 className=" m-4 justify-center items-center text-lg flex">or</h1>
        <div className="flex flex-col justify-center gap-3 items-center border-dotted border-gray border-4  rounded-lg text-xl px-8 py-4 mx-5">
          <img src={cloud} alt="" className=" w-20 h-20 " />
          <p>
            Select a file or drag and drop here (Podcast Media or Transcription
            Text)
          </p>
          <p  className=" text-gray-400">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file </p>
          <button className="rounded-full text-purple-700 border border-purple-700  pl-4 pr-4 pt-2 pb-2 font-semibold">
            Select File
          </button>
        </div>
        <button onClick={handleOpenDialog}>click</button>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white p-8 rounded-md w-[40%] ">
            <div className=" flex gap-2">
              <img src={Photo} alt="" className=" rounded-full w-10 h-10 " />
              <h1 className=" text-2xl font-bold "> Upload from Youtube</h1>
              <button
                onClick={handleCloseDialog}
                className="bg-white hover:bg-gray-100 font-bold py-2 px-4 text-red-500 rounded"
              >
                X
              </button>
            </div>
            <h2>Name</h2>
            <input
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 "
            />
            <h2>Link</h2>
            <input
              type="text"
              placeholder="Enter project name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 "
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="flex justify-end mt-4">
              {/* <button>Cancel</button> */}
              <button
                onClick={handleSubmit}
                className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-4 rounded   
 ml-2"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ); 
};

export default Upload;
