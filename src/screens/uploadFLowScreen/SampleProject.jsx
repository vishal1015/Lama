import ChannelCard from "../../components/channelCard/ChannelCard";
import TableComponent from "../../components/sampleProjectTabel/TableComponent";

const SampleProject = () =>{
  return (
    <div className=" px-8 py-4 flex flex-col gap-8 ">
      <h1 className=" text-4xl text-bluetextcolor1 mx-4 font-bold ">
        Sample Project
      </h1>
      <div className=" flex flex-col gap-6">
        <div className=" flex flex-row gap-4">
         <ChannelCard />
         <ChannelCard />
         <ChannelCard />
        </div>
        <div className=" shadow-md bg-purple-800  text-white text-lg px-6 mx-4 py-4 font-semibold flex flex-row justify-between items-center rounded-md">
          <h2>All files are processed! Your widget is ready to go!</h2>
          <button className=" bg-white px-4 py-1 text-black font-semibold rounded-md shadow-md ">
            Try it out!
          </button>
        </div>
      </div>
      <div>
        <TableComponent />
      </div>
    </div>
  );
}

export default SampleProject;