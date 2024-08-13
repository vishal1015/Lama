
import cloud from "/cloud.png"
import youtubeimg from "/youtube.png"
import spotifyImg from "/spotyfi.png"
import rssfeedImg from "/rssfeed.png"
import { useState ,createContext, useContext} from "react";
import ChannelCard from "../../components/channelCard/ChannelCard";
import FileUploadDialogBox from "./FileUplodeDialogBox"
import { useNavigate, useParams} from "react-router-dom";
import axios from "axios"

export const FileContext = createContext();
const Upload = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [fileName, setFileName] = useState("");
    const [fileDiscription , setfileDiscription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
     
    const navigate = useNavigate();
    const {userId, projectId} = useParams();
    
    const addFile = async (name,description) => {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/users/${userId}/projects/${projectId}/files`,
          { name, description }
        );
        console.log("File Added:", response.data);
      } catch (error) {
        console.error("Error in Adding File:", error.message);
      }
    };

    const getFiles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${userId}/projects/${projectId}/files`
        );
        console.log("Files recived:", response.data);
        // setFileNames(response.data);
        return response.data;
      } catch (error) {
        console.error("Error while getting Files:", error.message);
      }
    };

    const handleOpenDialog = () => {
      setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
      setIsDialogOpen(false);
      setFileName("");
      setErrorMessage("");
    };

    const handleUpload = async() => {
      if (fileName.trim() === "" && fileDiscription.trim() === "") {
        setErrorMessage("Please enter Project Name & Link");
      } 
      else if(fileName.trim() === "") {
         setErrorMessage("Please enter  Project Name ");
      } else if (fileDiscription.trim() === "") {
        setErrorMessage("Please enter Project Link");
      } else {
        console.log("File name & discripiton:", fileName ,fileDiscription);
        handleCloseDialog();
        //save fils in db
        await addFile(fileName,fileDiscription);
        navigate(`/add-project/${userId}/app/${projectId}/sample`);
      }
    }
   
   const contextvalue = {
    isDialogOpen,
    fileName,
    fileDiscription,
    errorMessage,
    setErrorMessage,
    setfileDiscription,
    setFileName,
    setIsDialogOpen,
     addFile,
     getFiles,
     handleOpenDialog,
     handleUpload,
   };

  return (
    < FileContext.Provider 
      value ={contextvalue}
    >
      <div className=" flex flex-row px-8">
        <UplodeComponent />
        {isDialogOpen && <FileUploadDialogBox />}
      </div>
    </FileContext.Provider>
  ); 
};

export default Upload;



 const UplodeComponent = () =>{

  const {handleOpenDialog} = useContext( FileContext)
  return (
    <div className=" w-full h-full  ">
      <h1 className=" text-4xl text-bluetextcolor1 font-bold pb-4 pl-4 ">
        Upload
      </h1>
      <div className="">
        <div className="grid grid-rows-2 grid-cols-3 gap-0 ">
          <ChannelCard
            imgSrc={youtubeimg}
            text1="Upload"
            text2="Youtube Video"
            onClick={() => {
              handleOpenDialog();
            }}
          />
          <ChannelCard
            imgSrc={spotifyImg}
            text1="New Video"
            text2="TikTok Upload"
            onClick={() => {
              handleOpenDialog();
            }}
          />
          <ChannelCard
            imgSrc={rssfeedImg}
            text1="Upload"
            text2="Youtube Video"
            onClick={() => {
              handleOpenDialog();
            }}
          />
          <ChannelCard
            imgSrc={youtubeimg}
            text1="New Video"
            text2="TikTok Upload"
            onClick={() => {
              handleOpenDialog();
            }}
          />
          <ChannelCard
            imgSrc={spotifyImg}
            text1="Upload"
            text2="Youtube Video"
            onClick={() => {
              handleOpenDialog();
            }}
          />
          <ChannelCard
            imgSrc={rssfeedImg}
            text1="New Video"
            text2="TikTok Upload"
            onClick={() => {
              handleOpenDialog();
            }}
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
  );
 } 