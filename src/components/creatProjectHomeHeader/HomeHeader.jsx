
import Homeicon from "/homeIcon.png";
import lemaIcon from "/lamaIcon.png";
import settingIcon from "/settingIcon.png";
import notificatoinIcon from "/bellIcon.png";
import { useNavigate } from "react-router";
import * as constants from "../../utils/Constants";
import "./styles.css"; 

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

