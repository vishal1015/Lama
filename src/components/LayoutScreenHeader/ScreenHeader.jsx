
import HomeIcon from "/homeIcon.png";
import BellIcon from "/bellIcon.png";
import Photo from "/photo2.jpg";
import { GoTriangleDown } from "react-icons/go";
import "./styles.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext";
const ScreenHeader = () => {

  return (
    <>
      <header className="header-container">
        <div className="path-container">
          <img src={HomeIcon} alt="" className="icon-small" />
          <p className="path-text">
            Path/app /<span className="upload-text"> upload</span>
          </p>
        </div>
        <div className="options-container">
          <div className="language-container">
            <SingleSelectDropdown />
            <img src={Photo} alt="" className="profile-pic" />
          </div>
          <img src={BellIcon} alt="" className="icon-medium" />
        </div>
      </header>
    </>
  );
};

export default ScreenHeader;



const SingleSelectDropdown = () => {
 
  const {selectedLang, setSelectedLang} = useContext(GlobalContext)
  const [isOpen, setIsOpen] = useState(false);

  // Options to display in the dropdown
  const options = ['EN', 'HI', 'FR', 'SP'];

  // Handler for toggling dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handler for selecting an option
  const handleSelectOption = (option) => {
    setSelectedLang(option); // Set the selected option
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className=" flex gap-4 ">
      <GoTriangleDown onClick={toggleDropdown} />
      <div className="language-text"> {selectedLang || "EN"}</div>
      {isOpen && (
        <ul className="absolute mt-6 bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
              onClick={() => handleSelectOption(option)} // Handle option click
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


