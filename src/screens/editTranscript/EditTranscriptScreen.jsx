import { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import "./styles.css"; 

const EditTranscriptScreen = () => {

    const [isEditMode, setIsEditMode] = useState(false);

    const handleEditMode  = ()=>{
        setIsEditMode(true);
    }
    const handleDiscardButton = ()=>{
        setIsEditMode(false);
    }
  return (
    <>
      <div className=" px-8 ">
        <div className=" flex justify-between items-center">
          <h1 className=" text-4xl text-bluetextcolor1 font-bold ">
            {" "}
            Edit Transcript{" "}
          </h1>
          {isEditMode ? (
            <div className=" flex gap-4 items-center">
              <button
                className=" border-2 border-red-500 text-red-500 px-4 rounded-md font-bold py-2 "
                onClick={handleDiscardButton}
              >
                DisCard
              </button>
              <button className=" bg-black text-white  font-bold px-4 rounded-md py-2 ">
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
          <div className="  custom-scrollbar h-96">
            <p className="  text-lg  leading-relaxed cursor-text ">
              {Array(1000).fill("This is a long paragraph. ").join("")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default EditTranscriptScreen;
