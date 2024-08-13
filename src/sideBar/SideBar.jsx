// import LamaIcon  from "/lamaIcon.png";
// import { IoMdSettings } from "react-icons/io";
// import './styles.css';

// const Sidebar = () => {
//   return (
//     <div>
//       <div className=" flex flex-col justify-between items-center bg-purple-200 h-screen p-2">
//         <div className=" w-full flex flex-col gap-2">
//           <h1 className=" text-4xl font-bold flex text-purple-700">
//             {" "}
//             <span className="w-10 h-10 ">
//               <img src={LamaIcon} alt="" />
//             </span>
//             LAMA.
//           </h1>
//           <h3 className=" p-2 mt-4 text-greaytextcolor4 ">
//             Prodcast Upload Flow
//           </h3>
//           <div className=" cursor-pointer items-center p-1 outer text-black hover:text-white  rounded-3xl flex gap-2 hover:bg-purple-600">
//             <div className="rounded-full inner flex p-3 relative">
//               <div className="w-1 h-1 rounded-full flex justify-center items-center">
//                 <p>1</p>
//               </div>
//             </div>
//             Projects
//           </div>
//           <div className=" cursor-pointer items-center p-1 outer text-black hover:text-white  rounded-3xl flex gap-2 hover:bg-purple-600">
//             <div className="rounded-full inner flex p-3 relative">
//               <div className="w-1 h-1 rounded-full flex justify-center items-center">
//                 <p>2</p>
//               </div>
//             </div>
//             Widget Configurations
//           </div>
//           <div className=" cursor-pointer items-center p-1 outer text-black hover:text-white  rounded-3xl flex gap-2 bg-gray-300 hover:bg-purple-600">
//             <div className="rounded-full inner flex p-3 relative">
//               <div className="w-1 h-1 rounded-full flex justify-center items-center">
//                 <p>3</p>
//               </div>
//             </div>
//             Deployment
//           </div>
//           <div className=" cursor-pointer items-center p-1 outer text-black hover:text-white  rounded-3xl flex gap-2 hover:bg-purple-600">
//             <div className="rounded-full inner flex p-3 relative">
//               <div className="w-1 h-1 rounded-full flex justify-center items-center">
//                 <p>4</p>
//               </div>
//             </div>
//             Pricing
//           </div>
//         </div>
//         <div className=" m-2  cursor-pointer items-center p-2 text-black flex gap-2 border-t-greaytextcolor2 w-full">
//           <div className="w-6 h-6 rounded-full flex justify-center  bg-gray-300 items-center ">
//             <IoMdSettings />
//           </div>
//           setting
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { useLocation, useNavigate ,useParams } from "react-router-dom";
import LamaIcon from "/lamaIcon.png";
import { IoMdSettings } from "react-icons/io";
import "./styles.css";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {userId, projectId} = useParams();
  const isActive = (path) =>{ console.log(path); location.pathname === path;}

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="flex flex-col justify-between items-center bg-purple-200 h-screen p-2">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-4xl font-bold flex text-purple-700">
            <span className="w-10 h-10">
              <img src={LamaIcon} alt="" />
            </span>
            LAMA.
          </h1>
          <h3 className="p-2 mt-4 text-greaytextcolor4">
            Prodcast Upload Flow
          </h3>
          <div
            className={`cursor-pointer items-center p-1 outer rounded-3xl flex gap-2 ${
              isActive("/projects")
                ? "text-white bg-purple-600"
                : "text-black hover:text-white hover:bg-purple-600"
            }`}
            onClick={() =>
              handleNavigate(`/add-project/${userId}/app/${projectId}`)
            }
          >
            <div className="rounded-full inner flex p-3 relative">
              <div className="w-1 h-1 rounded-full flex justify-center items-center">
                <p>1</p>
              </div>
            </div>
            Projects
          </div>
          <div
            className={`cursor-pointer items-center p-1 outer rounded-3xl flex gap-2 ${
              isActive("/configurations")
                ? "text-white bg-purple-600"
                : "text-black hover:text-white hover:bg-purple-600"
            }`}
            onClick={() =>
              handleNavigate(
                `/add-project/${userId}/app/${projectId}/configurations`
              )
            }
          >
            <div className="rounded-full inner flex p-3 relative">
              <div className="w-1 h-1 rounded-full flex justify-center items-center">
                <p>2</p>
              </div>
            </div>
            Widget Configurations
          </div>
          <div
            className={`cursor-pointer items-center p-1 outer rounded-3xl flex gap-2 ${
              isActive("/deployment")
                ? "text-white bg-purple-600"
                : "text-black hover:text-white hover:bg-purple-600"
            }`}
            // onClick={() => handleNavigate("/app/deployment")}
          >
            <div className="rounded-full inner flex p-3 relative">
              <div className="w-1 h-1 rounded-full flex justify-center items-center">
                <p>3</p>
              </div>
            </div>
            Deployment
          </div>
          <div
            className={`cursor-pointer items-center p-1 outer rounded-3xl flex gap-2 ${
              isActive("/pricing")
                ? "text-white bg-purple-600"
                : "text-black hover:text-white hover:bg-purple-600"
            }`}
            // onClick={() => handleNavigate("/app/pricing")}
          >
            <div className="rounded-full inner flex p-3 relative">
              <div className="w-1 h-1 rounded-full flex justify-center items-center">
                <p>4</p>
              </div>
            </div>
            Pricing
          </div>
        </div>
        <div
          className={`m-2 cursor-pointer items-center rounded-3xl p-2 flex gap-2 border-t-greaytextcolor2 w-full ${
            isActive("/account-settings")
              ? "text-white bg-purple-600"
              : "text-black hover:text-white hover:bg-purple-600"
          }`}
          onClick={() =>
            handleNavigate(
              `/add-project/${userId}/app/${projectId}/account-setting`
            )
          }
        >
          <div className="w-6 h-6 rounded-full flex justify-center bg-gray-300 items-center">
            <IoMdSettings />
          </div>
          Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
