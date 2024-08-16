import photo from "/photo2.jpg";

import { FileContext } from "./Upload";
import { useContext } from "react";

const FileUploadDialogBox = () => {
  const {
    handleCloseDialog,
    fileName,
    setFileName,
    fileDiscription,
    setfileDiscription,
    errorMessage,
    handleUpload,
  } = useContext(FileContext);
   console.log(handleCloseDialog,fileName);
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex
       justify-center items-center z-50 "
    >
      <div className="bg-white px-8 py-4 rounded-md w-[45%] gap-2 ">
        <div className=" flex flex-row justify-between items-center gap-4 ">
          <div className=" flex flex-row items-center gap-4">
            <img src={photo} alt="" className=" rounded-full w-10 h-10 " />
            <h1 className=" text-2xl font-bold "> Upload from Youtube</h1>
          </div>
          <button
            onClick={handleCloseDialog}
            className="bg-white hover:bg-gray-100 font-bold py-2 px-4  text-gray-500 rounded"
          >
            X
          </button>
        </div>
        <h2>Name</h2>
        <input
          type="text"
          placeholder="Enter project name"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="border border-gray-300 rounded w-full p-2 "
        />
        <h2>Discription</h2>
        <input
          type="text"
          placeholder="Input Link"
          value={fileDiscription}
          onChange={(e) => setfileDiscription(e.target.value)}
          className="border border-gray-300 rounded w-full p-2 "
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleUpload}
            className="bg-black hover:bg-slate-900 text-white
           font-bold py-2 px-6 rounded  ml-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUploadDialogBox;
