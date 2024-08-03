import ProjectCard from "../components/ProjectCard";
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
   "Hd Player",
   "Tvx Music",
   "Leran Academy",
   "Hd Player",
   "Tvx Music",
   "Leran Academy",
 ];
function AllProject() {
  return (
    <div className=" m-52 flex flex-wrap flex-row border border-black ">
      {Names.map((name, index) => (
        <ProjectCard key={index} ProjectName={name} /> // Return the actual JSX element
      ))}
    </div>
  );
}

export default AllProject;
