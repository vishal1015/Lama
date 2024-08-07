
import Homeicon from "/homeIcon.png";
import lemaIcon from "/lamaIcon.png";
import settingIcon from "/settingIcon.png";
import notificatoinIcon from "/bellIcon.png";
import { useNavigate } from "react-router";

const HomeHeader = () => {
  const navigate = useNavigate();
  
   const goBack = ()=>{
      navigate("/");
   }
  return (
    <>
      <div className=" flex  flex-row px-4 justify-between items-center">
        <div className=" flex flex-row gap-1">
          <img src={lemaIcon} alt="" className="w-10 h-10 " />
          <h1 className=" text-4xl font-bold text-bluetextcolor1">LAMA.</h1>
        </div>
        <div className="flex flex-row gap-1 p-4 justify-center items-center">
          <img src={settingIcon} alt="" className="w-10 h-10" />
          <img src={notificatoinIcon} alt="" className="w-10 h-10" />
        </div>
      </div>
      <div className="ml-40">
        <button className=" flex flex-row gap-2 rounded-3xl items-center justify-center p-1 shadow-lg border border-black w-36" onClick={goBack}>
          <img src={Homeicon} alt="" className=" w-5 " />
          Back To Home
        </button>
      </div>
    </>
  );
};

export default HomeHeader;
