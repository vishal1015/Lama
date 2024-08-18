
import cloud from "/cloud.png"
import youtubeimg from "/youtube.png"
import spotifyImg from "/spotyfi.png"
import rssfeedImg from "/rssfeed.png"
import { useState ,createContext, useContext} from "react";
import ChannelCard from "../../components/channelCard/ChannelCard";
import FileUploadDialogBox from "./FileUplodeDialogBox"
import axios from "axios"
import SampleProject from "./SampleProject";
import { dbUri } from "../../utils/Constants";


export const FileContext = createContext();
const Upload = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [fileName, setFileName] = useState("");
    const [fileDiscription , setfileDiscription] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isUploade, setIsUploade] = useState(true);
    const [files, setFiles] = useState([]);
    const [isLoading , setIsLoading] = useState(false);

    const userId = localStorage.getItem("userId");
    const projectId = localStorage.getItem("projectId");
    
    const addFile = async (name,description) => {
      setIsLoading(true);
      try {
        const response = await axios.post(
          `${dbUri}/api/users/${userId}/projects/${projectId}/files`,
          { name, description }
        );
        console.log("File Added:", response.data);
      } catch (error) {
        console.error("Error in Adding File:", error.message);
      }
      setIsLoading(false);
    };

    const getFiles = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${dbUri}/api/users/${userId}/projects/${projectId}/files`
        );
        console.log("Files recived:", response.data);
        // setFileNames(response.data);
        return response.data;
      } catch (error) {
        console.error("Error while getting Files:", error.message);
      }
      setIsLoading(false);
    };

      const fetchFiles = async () => {
        const fechedfile = await getFiles();
        setFiles(fechedfile);
      };

      //  function for calling after saving a file in the dialog
      const onFileUpdate = () => {
        fetchFiles(); // Re-fetch the files after an update
      };

    const handleOpenDialog = () => {
      setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
      setIsDialogOpen(false);
      setFileName("");
      setfileDiscription("");
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
         setIsLoading(true);
        //save fils in db
         await addFile(fileName,fileDiscription);
         fetchFiles();
         setIsLoading(false);
      }
      if (isUploade) setIsUploade(false);
    }
   
   const contextvalue = {
     isDialogOpen,
     fileName,
     fileDiscription,
     errorMessage,
     files,
     isLoading,
     setFiles,
     setErrorMessage,
     setfileDiscription,
     setFileName,
     setIsDialogOpen,
     addFile,
     getFiles,
     handleOpenDialog,
     handleCloseDialog,
     handleUpload,
     onFileUpdate,
     setIsLoading,
   };

  return (
    < FileContext.Provider 
      value ={contextvalue}
    >
      <div className=" flex flex-row px-8">
        { isUploade ? <UplodeComponent />:<SampleProject/>}
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
      <div className="flex flex-col justify-center gap-3 items-center border-dotted border-gray border-4  rounded-lg text-xl px-8 py-4 mx-5 mb-10">
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
    </div>
  );
 } 