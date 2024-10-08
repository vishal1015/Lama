
import youtubeimg from "/youtube.png";
import spotifyImg from "/spotyfi.png";
import rssfeedImg from "/rssfeed.png";
import ChannelCard from "../../components/channelCard/ChannelCard";
import TableComponent from "../../components/sampleProjectTabel/TableComponent";
import { FileContext } from "./Upload";
import { useContext} from "react";

const SampleProject = () =>{
  const { handleOpenDialog } = useContext(FileContext);

  return (
    <div className=" px-8 py-4 flex flex-col gap-8 w-full ">
      <h1 className=" text-4xl text-bluetextcolor1 mx-4 font-bold ">
        Sample Project
      </h1>
      <div className=" flex flex-col gap-6">
        <div className=" flex flex-row gap-4">
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
            text1="Upload"
            text2="Youtube Video"
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
        </div>
        <div className=" shadow-md bg-purple-800  text-white text-lg px-6 mx-4 py-4 font-semibold flex flex-row justify-between items-center rounded-md">
          <h2>All files are processed! Your widget is ready to go!</h2>
          <button className=" bg-white px-4 py-1 text-black font-semibold rounded-md shadow-md ">
            Try it out!
          </button>
        </div>
      </div>
      <div>
        <TableComponent  />
      </div>
    </div>
  );
}

export default SampleProject;