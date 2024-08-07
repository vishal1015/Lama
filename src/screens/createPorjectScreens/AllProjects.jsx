import ProjectCard from "../../components/projectCard/ProjectCard";
import { HiOutlinePlusCircle } from "react-icons/hi";
import HomeHeader from "../../components/creatProjectHomeHeader/HomeHeader";

 const Names = [
   "Hd Player",
   "Tvx Music",
   "Leran Academy",
   "Hd Player",
   "Tvx Music",
   "Leran Academy",
   "Hd Player",
   "Tvx Music",
   "Leran Academy", 
 ];
function AllProject() {
  return (
    <div>
      <HomeHeader />
        <div className=" flex  flex-col py-5 gap-2 mx-40 ">
          <div className=" flex flex-row justify-between ">
            <h1 className=" text-5xl text-bluetextcolor1 font-bold ">
              Projects
            </h1>
            <div>
              <button className=" justify-center items-center font-bold text-white bg-black flex flex-row gap-4 text-md rounded-md p-2" >
                <HiOutlinePlusCircle />
                <p>Create New Project</p>
              </button>
            </div>
          </div>
          <div className=" flex flex-wrap flex-row  justify-center items-center py-2 overflow-auto">
            {Names.map((name, index) => (
              <ProjectCard key={index} ProjectName={name} /> // Return the actual JSX element
            ))}
          </div>
        </div>
    </div>
  );
}

export default AllProject;
