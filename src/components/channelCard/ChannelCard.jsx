// import React from "react";

// const ChannelCard = ({ imgSrc, text1, text2 }) => {
//   return (
//     <>
//       <div className="bg-white shadow-md flex flex-row gap-2 relative rounded-2xl border border-gray-300 my-2 mx-6">
//         <div className="p-4 flex items-center justify-center">
//           <img
//             src={imgSrc}
//             alt=""
//             className="w-20 h-20 rounded-full object-cover"
//           />
//         </div>
//         <div className="flex flex-col justify-center gap-2">
//           <h2>{text1}</h2>
//           <h2>{text2}</h2>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ChannelCard;

import "./styles.css"; // Import your vanilla CSS file

const ChannelCard = ({ imgSrc, text1, text2 ,onClick}) => {
  return (
    <div className="channel-card-container" onClick={onClick}>
      <div className="channel-card-image-container">
        <img src={imgSrc} alt="" className="channel-card-image" />
      </div>
      <div className="channel-card-text-container">
        <h2>{text1}</h2>
        <h2>{text2}</h2>
      </div>
    </div>
  );
};

export default ChannelCard;
