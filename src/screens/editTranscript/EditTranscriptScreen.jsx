import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { dbUri } from "../../utils/Constants";
import "./styles.css";

const EditTranscriptScreen = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [text, setText] = useState(""); // Start with an empty string
  const [inputValue, setInputValue] = useState(""); // Start with an empty string
  const userId = localStorage.getItem("userId");
  const projectId = localStorage.getItem("projectId");
  const fileId = localStorage.getItem("fileId");

  const getFilesDescription = async () => {
    try {
      const response = await axios.get(
        `${dbUri}/api/users/${userId}/projects/${projectId}/files/${fileId}`
      );
      console.log("Files:", response.data.description);
      return response.data.description;
    } catch (error) {
      console.error("Error while getting File information:", error.message);
    }
  };

  const handleEditMode = () => {
    setInputValue(text); // Set the current text to inputValue
    setIsEditMode(true);
  };

  const handleDiscardButton = () => {
    setIsEditMode(false);
    setInputValue(text); // Revert inputValue to the current text
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `${dbUri}/api/users/${userId}/projects/${projectId}/files/${fileId}`,
        { description: inputValue }
      );
      setText(inputValue); // Update text with the new input value
      setIsEditMode(false);
    } catch (error) {
      console.error("Error while saving the file description:", error.message);
    }
    alert("file edited successfully");
  };

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update inputValue with the current input
  };

  useEffect(() => {
    const fetchfiledis = async () => {
      const Description = await getFilesDescription();
      setText(Description);
      setInputValue(Description); // Initialize inputValue with fetched description
    };
    fetchfiledis();
  }, [userId, projectId, fileId]);

  return (
    <>
      <div className="px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-bluetextcolor1 font-bold">
            Edit Transcript
          </h1>
          {isEditMode ? (
            <div className="flex gap-4 items-center">
              <button
                className="border-2 border-red-500 text-red-500 px-4 rounded-md font-bold py-2"
                onClick={handleDiscardButton}
              >
                Discard
              </button>
              <button
                className="bg-black text-white font-bold px-4 rounded-md py-2"
                onClick={handleSave}
              >
                Save & Exit
              </button>
            </div>
          ) : null}
        </div>
        <div className="border-2 border-purple-900 rounded-lg h-full px-8 my-10 py-4 flex flex-col">
          <div className="flex justify-between items-center">
            <button
              className="flex gap-1 justify-center items-center font-semibold text-white bg-gray-800 rounded-2xl px-4 py-1"
              onClick={handleEditMode}
            >
              <GrEdit />
              Edit Mode
            </button>
            <div className="justify-center flex w-6 h-6 rounded-full bg-purple-300 border-2 border-purple-600 cursor-pointer">
              <IoIosSearch />
            </div>
          </div>
          <h3 className="font-bold text-purple-700 text-xl m-2">Speaker</h3>
          <div
            className={`custom-scrollbar h-96 ${
              isEditMode ? "overflow-hidden" : "overflow-auto"
            }`}
          >
            {isEditMode ? (
              <textarea
                value={inputValue}
                onChange={handleChange}
                style={{
                  width: "100%",
                  height: "100%",
                  boxSizing: "border-box",
                  padding: "8px",
                  resize: "none",
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}
              />
            ) : (
              <p>{text}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTranscriptScreen;
