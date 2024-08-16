import { useLocation, useNavigate, useParams } from "react-router-dom";
import LamaIcon from "/lamaIcon.png";
import { IoMdSettings } from "react-icons/io";
import "./styles.css";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const { userId, projectId } = useParams();
  const userId = localStorage.getItem("userId");
  const projectId = localStorage.getItem("projectId");

  const isActive = (path) => location.pathname === path;

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
            className={`cursor-pointer items-center p-1 outer rounded-3xl flex gap-2 
              ${
                isActive(`/sample-project/upload`)
                  ? "text-white bg-purple-700 shadow-md"
                  : "text-black hover:text-white hover:bg-purple-600"
              }`}
            onClick={() => handleNavigate(`/sample-project/upload`)}
          >
            <div className="rounded-full inner bg-black text-white flex p-3 relative">
              <div className="w-1 h-1 rounded-full flex justify-center items-center">
                <p>1</p>
              </div>
            </div>
            Projects
          </div>
          <div
            className={`cursor-pointer items-center p-1 outer rounded-3xl flex gap-2 ${
              isActive(`/sample-project/widget-configuration`)
                ? "text-white bg-purple-700 shadow-md"
                : "text-black hover:text-white hover:bg-purple-600"
            }`}
            onClick={() =>
              handleNavigate(`/sample-project/widget-configuration`)
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
              isActive(`/sample-project/deployment`)
                ? "text-white bg-purple-700 shadow-md"
                : "text-black hover:text-white hover:bg-purple-600"
            }`}
          >
            <div className="rounded-full inner flex p-3 relative">
              <div className="w-1 h-1 rounded-full flex justify-center bg-red-300 items-center">
                <p>3</p>
              </div>
            </div>
            Deployment
          </div>
          <div
            className={`cursor-pointer items-center p-1 outer rounded-3xl flex gap-2 ${
              isActive(`/sample-project/pricing`)
                ? "text-white bg-purple-700 shadow-md"
                : "text-black hover:text-white hover:bg-purple-600"
            }`}
          >
            <div className="rounded-full inner flex p-3 relative">
              <div className="w-1 h-1 rounded-full flex justify-center items-center">
                <p>4</p>
              </div>
            </div>
            Pricing
          </div>
          <div className="border-[1px] w-full  border-greaytextcolor2 mt-2"></div>
        </div>
        <div className="w-full  justify-center items-center ">
          <div className="border-[1px] w-full  border-greaytextcolor2 mb-3"></div>
          <div
            className={` cursor-pointer items-center rounded-3xl p-2 flex  gap-2 border-t-greaytextcolor2  ${
              isActive(`/account-settings`)
                ? "text-white bg-purple-700 shadow-md"
                : "text-black hover:text-white hover:bg-purple-600"
            }`}
            onClick={() => handleNavigate(`/account-settings`)}
          >
            <div className="w-6 h-6 rounded-full flex justify-center  bg-black text-white items-center">
              <IoMdSettings />
            </div>
            Settings
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
