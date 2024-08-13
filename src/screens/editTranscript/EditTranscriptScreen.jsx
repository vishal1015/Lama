import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { IoIosConstruct, IoIosSearch } from "react-icons/io";
import { useParams } from "react-router";
import axios from "axios";
import "./styles.css"; 

const EditTranscriptScreen = () => {

    const [isEditMode, setIsEditMode] = useState(false);
     const [text, setText] = useState("Your initial text here");
     const [inputValue, setInputValue] = useState(text);
     const { userId, projectId, fileId } = useParams();

     const getFilesDescription = async () => {
       try {
         const response = await axios.get(
           `http://localhost:5000/api/users/${userId}/projects/${projectId}/files/${fileId}`
         );
         console.log("Files:", response.data.description);
         console.log(typeof response.data.description);
         return response.data.description;
       } catch (error) {
         console.error("Error while getting File information:", error.message);
       }
     };

    //  const updatetext = async () => {
    //    try {
    //      const response = await axios.delete(
    //        `http://localhost:5000/api/users/${userId}/projects/${projectId}/files/${fileId}`
    //      );
    //      console.log(`file deletion mess ${response}`);
    //    } catch (error) {
    //      console.log(`error in deleting file ${error}`);
    //    }
    //  };

    const handleEditMode  = ()=>{
        setIsEditMode(true);
    }
    const handleDiscardButton = ()=>{
        setIsEditMode(false);
    }
    const handleSave = () =>{
         setText(inputValue);
         setIsEditMode(false);
    }
      const handleChange = (e) => {
        setInputValue(e.target.value);
      };
    useEffect(()=>{
      const fetchfiledis = async() =>{
        const Description = await getFilesDescription();
        setText(Description);
      }
       fetchfiledis();
    })
  return (
    <>
      <div className="px-8">
        <div className=" flex justify-between items-center">
          <h1 className=" text-4xl text-bluetextcolor1 font-bold ">
            Edit Transcript
          </h1>
          {isEditMode ? (
            <div className=" flex gap-4 items-center">
              <button
                className=" border-2 border-red-500 text-red-500 px-4 rounded-md font-bold py-2 "
                onClick={handleDiscardButton}
              >
                DisCard
              </button>
              <button
                className=" bg-black text-white  font-bold px-4 rounded-md
               py-2 "
                onClick={handleSave}
              >
                Save & exit
              </button>
            </div>
          ) : null}
        </div>
        <div className=" border-2 border-purple-900 rounded-lg h-full px-8 my-10 py-4 flex flex-col ">
          <div className=" flex justify-between items-center ">
            <button
              className=" flex gap-1 justify-center items-center font-semibold text-white bg-gray-800 rounded-2xl px-4 py-1 "
              onClick={handleEditMode}
            >
              <GrEdit />
              edit mode
            </button>
            <div className=" justify-center flex w-6 h-6 rounded-full bg-purple-300 border-2 border-purple-600  cursor-pointer">
              <IoIosSearch />
            </div>
          </div>
          <h3 className=" font-bold text-purple-700  text-xl m-2">Speaker</h3>
          {/* <div className=" custom-scrollbar h-96 "> */}
          <div className=
            {`custom-scrollbar h-96 ${
              isEditMode ? "overflow-hidden" : "overflow-auto"
            }`}>
            {isEditMode ? (
              <>
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
              </>
            ) : (
              <>
                <p>{text}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default EditTranscriptScreen;
