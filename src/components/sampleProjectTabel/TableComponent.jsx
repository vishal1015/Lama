import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";
import { useContext } from "react";
import { FileContext } from "../../screens/uploadFLowScreen/Upload";

const TableComponent = () => {
  const { files, onFileUpdate } = useContext(FileContext);
 
  const navigate = useNavigate();
  // const { userId, projectId } = useParams();
     const userId = localStorage.getItem("userId");
     const projectId = localStorage.getItem("projectId");

  const deleteFile = async (fileId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/users/${userId}/projects/${projectId}/files/${fileId}`
      );
      console.log(`File deletion message: ${response}`);
      onFileUpdate(); // Re-fetch the files after deletion
    } catch (error) {
      console.log(`Error in deleting file: ${error}`);
    }
  };

  const handleEdit = (fileId) => {
    localStorage.setItem("fileId", fileId);
    navigate(`/sample-project/transcript`);
    console.log(`${fileId} went to edit page`);
  };

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
