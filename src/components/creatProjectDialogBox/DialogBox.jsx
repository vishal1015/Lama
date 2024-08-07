import { useState } from "react";

const DialogBox = () => {
  const [projectName, setProjectName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleCloseDialog = () => {
    setProjectName("");
    setErrorMessage("");
  };

  const handleSubmit = () => {
    if (projectName.trim() === "") {
      setErrorMessage("Please enter a project name");
    } else {
      // Handle project creation logic here, e.g., save projectName to state or send to API
      console.log("Project name:", projectName);
      handleCloseDialog();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-lg font-bold">Create Project</h2>
        <input
          type="text"
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          className="border border-gray-300 rounded w-full p-2 mt-2"
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleCloseDialog}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded   
 ml-2"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default DialogBox;
