
// import { useContext } from "react";
// import { ProjectContext } from "./ProjectHomeScreen";

// const DialogBox = () => {
//   const {
//     currentProjectName,
//     errorMessage,
//     handleCloseDialog,
//     handleSubmit,
//     setCurrentProjectName,
//   } = useContext(ProjectContext);

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-white p-8 rounded-md w-[40%]">
//         <h2 className="text-lg font-bold mb-4">Create Project</h2>
//         <input
//           type="text"
//           placeholder="Enter project name"
//           value={currentProjectName}
//           onChange={(e) => setCurrentProjectName(e.target.value)}
//           className="border border-gray-300 rounded w-full p-2 mt-2"
//         />
//         {errorMessage && <p className="text-red-500">{errorMessage}</p>}
//         <div className="flex justify-end mt-4">
//           <button
//             onClick={handleCloseDialog}
//             className="bg-white hover:bg-gray-100 font-bold py-2 px-4 text-red-500 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded ml-2"
//           >
//             Create
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DialogBox;

import { useContext } from "react";
import { ProjectContext } from "./ProjectHomeScreen";
import * as projectConstants from "../../utils/Constants";
import "./styles.css";

const DialogBox = () => {
  const {
    currentProjectName,
    errorMessage,
    handleCloseDialog,
    handleSubmit,
    setCurrentProjectName,
  } = useContext(ProjectContext);

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <h2 className="dialog-title">{projectConstants.createProjectText}</h2>
        <input
          type="text"
          placeholder={projectConstants.enterProjectNameText}
          value={currentProjectName}
          onChange={(e) => setCurrentProjectName(e.target.value)}
          className="dialog-input"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="dialog-buttons">
          <button onClick={handleCloseDialog} className="cancel-button">
            {projectConstants.cancelText}
          </button>
          <button onClick={handleSubmit} className="create-button">
            {projectConstants.createText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
