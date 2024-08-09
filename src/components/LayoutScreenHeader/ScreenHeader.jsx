// import HomeIcon from "/homeIcon.png";
// import BellIcon from "/bellIcon.png";
// import Photo from "/photo2.jpg";
// import { GoTriangleDown } from "react-icons/go";
// const ScreenHeader = () => {
//   return (
//     <>
//       <header className=" w-full bg-white rounded-lg  px-10 py-6 flex flex-row  justify-between ">
//         <div className="flex gap-2 ">
//           <img src={HomeIcon} alt="" className=" h-6 w-6" />
//           <p className="font-semibold text-greaytextcolor2">
//             Sample/ Path/
//             <span className="text-purple-700 font-semibold "> Upload</span>
//           </p>
//         </div>
//         <div className=" flex gap-6">
//           <div className=" flex gap-2">
//             <GoTriangleDown />
//             <p className=" font-semibold text-greaytextcolor2">EN</p>
//             <img src={Photo} alt="" className=" h-8 w-8 rounded-full " />
//           </div>
//           <img src={BellIcon} alt="" className=" h-8 w-8" />
//         </div>
//       </header>
//     </>
//   );
// };

// export default ScreenHeader;

import HomeIcon from "/homeIcon.png";
import BellIcon from "/bellIcon.png";
import Photo from "/photo2.jpg";
import { GoTriangleDown } from "react-icons/go";
import "./styles.css";

const ScreenHeader = () => {
  return (
    <>
      <header className="header-container">
        <div className="path-container">
          <img src={HomeIcon} alt="" className="icon-small" />
          <p className="path-text">
            Path/app /
            <span className="upload-text"> upload</span>
          </p>
        </div>
        <div className="options-container">
          <div className="language-container">
            <GoTriangleDown />
            <p className="language-text">EN</p>
            <img src={Photo} alt="" className="profile-pic" />
          </div>
          <img src={BellIcon} alt="" className="icon-medium" />
        </div>
      </header>
    </>
  );
};

export default ScreenHeader;
