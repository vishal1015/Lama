/* eslint-disable react/prop-types */
  
function ProjectCard(props) {
    console.log(props);
 console.log(props.ProjectName);
  return (
    <>
      <div className="bg-white shadow-md flex flex-row gap-2 relative rounded-2xl border border-gray-300 w-72 m-6">
        <div className="bg-purple-700 rounded-xl w-[35%] abosolute m-2 justify-center items-center place-items-center">
          <h1 className="m-2 text-5xl items-center font-bold text-whitetextcolor3">SP</h1>
        </div>
        <div className="flex flex-col gap-4 m-2 ">
            <div>
                <div>
                   <h1 className="text-bluetextcolor1 font-bold text-lg pt-2">
                    {props.ProjectName}</h1>
                </div>
                <div> 4 Episodes</div>
            </div>
            <p className="text-xs">Last edited a week Ago </p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
