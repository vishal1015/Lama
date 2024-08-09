

import photo from "/photo2.jpg"
import cloud from "/cloud.png"
import youtubeimg from "/youtube.png"
import spotifyImg from "/spotyfi.png"
import rssfeedImg from "/rssfeed.png"
import { useState } from "react";
import ChannelCard from "../../components/channelCard/ChannelCard";
import { useNavigate} from "react-router-dom";
const Upload = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [projectLink , setProjectLink] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
     
    const navigate = useNavigate();
     
 
    const handleOpenDialog = () => {
      setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
      setIsDialogOpen(false);
      setProjectName("");
      setErrorMessage("");
    };

    const handleUpload = () => {
      if (projectName.trim() === "" && projectLink.trim() === "") {
        setErrorMessage("Please enter Project Name & Link");
      } 
      else if(projectName.trim() === "") {
         setErrorMessage("Please enter  Project Name ");
      } else if (projectLink.trim() === "") {
        setErrorMessage("Please enter Project Link");
      } else {
        // Handle project creation logic here, e.g., save projectName to state or send to API
        console.log("Project name:", projectName ,projectLink);
        handleCloseDialog();
        navigate("/app/sample");
      }
    };
  return (
    <div className=" flex flex-row px-8">
      <div className=" w-full h-screen  ">
        <h1 className=" text-4xl text-bluetextcolor1 font-bold pb-4 pl-4 ">
          Upload
        </h1>
        <div className="">
          <div className="grid grid-rows-2 grid-cols-3 gap-0 ">
            <ChannelCard
              imgSrc={youtubeimg}
              text1="Upload"
              text2="Youtube Video"
              onClick={() => handleOpenDialog("Youtube Video")}
            />
            <ChannelCard
              imgSrc={spotifyImg}
              text1="New Video"
              text2="TikTok Upload"
              onClick={handleOpenDialog}
            />
            <ChannelCard
              imgSrc={rssfeedImg}
              text1="Upload"
              text2="Youtube Video"
              onClick={handleOpenDialog}
            />
            <ChannelCard
              imgSrc={youtubeimg}
              text1="New Video"
              text2="TikTok Upload"
              onClick={handleOpenDialog}
            />
            <ChannelCard
              imgSrc={spotifyImg}
              text1="Upload"
              text2="Youtube Video"
              onClick={handleOpenDialog}
            />
            <ChannelCard
              imgSrc={rssfeedImg}
              text1="New Video"
              text2="TikTok Upload"
              onClick={handleOpenDialog}
            />
          </div>
        </div>

        <h1 className=" m-4 justify-center items-center text-lg flex">or</h1>
        <div className="flex flex-col justify-center gap-3 items-center border-dotted border-gray border-4  rounded-lg text-xl px-8 py-4 mx-5">
          <img src={cloud} alt="" className=" w-20 h-20 " />
          <p>
            Select a file or drag and drop here (Podcast Media or Transcription
            Text)
          </p>
          <p className=" text-gray-400">
            MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
          </p>
          <button className="rounded-full text-purple-700 border border-purple-700  pl-4 pr-4 pt-2 pb-2 font-semibold">
            Select File
          </button>
        </div>
        <button onClick={handleOpenDialog}>click</button>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-white px-8 py-4 rounded-md w-[45%] gap-2 ">
            <div className=" flex flex-row justify-between items-center gap-4 ">
              <div className=" flex flex-row items-center gap-4">
                <img src={photo} alt="" className=" rounded-full w-10 h-10 " />
                <h1 className=" text-2xl font-bold "> Upload from Youtube</h1>
              </div>
              <button
                onClick={handleCloseDialog}
                className="bg-white hover:bg-gray-100 font-bold py-2 px-4  text-gray-500 rounded"
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
              placeholder="Input Link"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
              className="border border-gray-300 rounded w-full p-2 "
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <div className="flex justify-end mt-4">
              {/* <button>Cancel</button> */}
              <button
                onClick={handleUpload}
                className="bg-black hover:bg-slate-900 text-white font-bold py-2 px-6 rounded   
 ml-2"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ); 
};

export default Upload;
