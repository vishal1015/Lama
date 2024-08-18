import { useNavigate } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useContext } from "react";
import { FileContext } from "../../screens/uploadFLowScreen/Upload";
import { PulseLoader } from "react-spinners";
import { dbUri } from "../../utils/Constants";
const TableComponent = () => {
  const { files, onFileUpdate , isLoading ,setIsLoading } = useContext(FileContext);
 
  const navigate = useNavigate();
     const userId = localStorage.getItem("userId");
     const projectId = localStorage.getItem("projectId");

  const deleteFile = async (fileId) => {
    setIsLoading(true);
    try {
      const response = await axios.delete(
        `${dbUri}/api/users/${userId}/projects/${projectId}/files/${fileId}`
      );
      console.log(`File deletion message: ${response}`);
      onFileUpdate(); // Re-fetch the files after deletion
      
    } catch (error) {
      console.log(`Error in deleting file: ${error}`);
    }
    setIsLoading(false);
  };

  const handleEdit = (fileId) => {
    localStorage.setItem("fileId", fileId);
    navigate(`/sample-project/transcript`);
    console.log(`${fileId} went to edit page`);
  };

  if(files.length === 0 && isLoading === false ) return <h1>no files avialble pease add</h1>
  if(isLoading) return (
    <div className=" justify-center items-center ">
      <PulseLoader />
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Uploaded Date & Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((item) => (
              <tr key={item._id}>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.updatedAt}</td>
                <td className="py-2 px-4 border-b">Done</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="text-black px-2 py-1 rounded-s border-gray-300 border"
                    onClick={() => handleEdit(item._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 px-2 py-1 rounded-e border-gray-300 border"
                    onClick={() => deleteFile(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
