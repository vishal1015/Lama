
// import Homeicon from "/homeIcon.png";
// import lemaIcon from "/lamaIcon.png";
// import settingIcon from "/settingIcon.png";
// import notificatoinIcon from "/bellIcon.png";
// import { useNavigate } from "react-router";

// const HomeHeader = () => {
//   const navigate = useNavigate();
  
//    const goBack = ()=>{
//       navigate("/");
//    }
//   return (
//     <>
//       <div className=" flex  flex-row px-4 justify-between items-center">
//         <div className=" flex flex-row gap-1">
//           <img src={lemaIcon} alt="" className="w-10 h-10 " />
//           <h1 className=" text-4xl font-bold text-bluetextcolor1">LAMA.</h1>
//         </div>
//         <div className="flex flex-row gap-1 p-4 justify-center items-center">
//           <img src={settingIcon} alt="" className="w-10 h-10" />
//           <img src={notificatoinIcon} alt="" className="w-10 h-10" />
//         </div>
//       </div>
//       <div className="ml-40">
//         <button className=" flex flex-row gap-2 rounded-3xl items-center justify-center p-1 shadow-lg border border-black w-36" onClick={goBack}>
//           <img src={Homeicon} alt="" className=" w-5 " />
//           Back To Home
//         </button>
//       </div>
//     </>
//   );
// };

// export default HomeHeader;

import Homeicon from "/homeIcon.png";
import lemaIcon from "/lamaIcon.png";
import settingIcon from "/settingIcon.png";
import notificatoinIcon from "/bellIcon.png";
import { useNavigate } from "react-router";
import * as constants from "../../utils/Constants";
import "./styles.css"; // Import your vanilla CSS file

const HomeHeader = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <div className="home-header-container">
        <div className="logo-container">
          <img src={lemaIcon} alt="Lama Logo" className="logo-icon" />
          <h1 className="logo-text">{constants.lamaText}</h1>
        </div>
        <div className="header-icons-container">
          <img src={settingIcon} alt="Settings Icon" className="header-icon" />
          <img
            src={notificatoinIcon}
            alt="Notification Icon"
            className="header-icon"
          />
        </div>
      </div>
      <div className="back-button-container">
        <button className="back-button" onClick={goBack}>
          <img src={Homeicon} alt="Home Icon" className="back-button-icon" />
          {constants.backToHomeText}
        </button>
      </div>
    </>
  );
};

export default HomeHeader;

