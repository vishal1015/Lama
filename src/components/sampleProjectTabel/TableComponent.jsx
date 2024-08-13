import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import EditScreen from "./EditScreen";
import "./styles.css";
import axios from "axios";

// const initialfiles = [
//   {
//     id: 1,
//     name: "Project A",
//     uploadDateTime: "2024-08-06 12:00",
//     status: "Done",
//   },
//   {
//     id: 2,
//     name: "Project B",
//     uploadDateTime: "2024-08-06 13:00",
//     status: "Done",
//   },
//   {
//     id: 3,
//     name: "Project c",
//     uploadDateTime: "2024-08-06 13:00",
//     status: "Done",
//   },
//   {
//     id: 4,
//     name: "Project D",
//     uploadDateTime: "2024-08-06 13:00",
//     status: "Done",
//   },
//   {
//     id: 5,
//     name: "Project E",
//     uploadDateTime: "2024-08-06 13:00",
//     status: "Done",
//   },
//   {
//     id: 6,
//     name: "Project F",
//     uploadDateTime: "2024-08-06 13:00",
//     status: "Done",
//   },
//   {
//     id: 7,
//     name: "Project G",
//     uploadDateTime: "2024-08-06 13:00",
//     status: "Done",
//   },
//   {
//     id: 8,
//     name: "Project F",
//     uploadDateTime: "2024-08-06 13:00",
//     status: "Done",
//   },
//   Add more initial files as needed
// ];


const TableComponent = () => {
  const [files, setfiles] = useState([]);
  const navigate = useNavigate();
  const { userId, projectId } = useParams();

  const getFiles = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/users/${userId}/projects/${projectId}/files`
      );
      console.log("Files:", response.data);
      // setProjectNames(response.data);
      return response.data;
    } catch (error) {
      console.error("Error while getting Files:", error.message);
    }
  };

  const deletFile = async (fileId) =>{
    try{
       const response = await axios.delete(
         `http://localhost:5000/api/users/${userId}/projects/${projectId}/files/${fileId}`
       );
       console.log(`file deletion mess ${response}`)
    }catch(error){
      console.log(`error in deleting file ${error}`)
    }
  }

useEffect(() => {
  const fetchFiles = async () => {
    const fetchedFiles = await getFiles();
    setfiles(fetchedFiles);
  };
  fetchFiles();
}, []);

  console.log(files);

  const handleDelete = async(fileId) => {
      await deletFile(fileId);
      const newfiles = await  getFiles();
      setfiles(newfiles);
  };

  const handleEdit = (fileId) => {
    navigate(`/add-project/${userId}/app/${projectId}/edit-transcript/${fileId}`);
    console.log(` ${fileId} went to edit page`);
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
                    className=" text-black px-2 py-1 rounded-s  border-gray-300 border"
                    onClick={() => handleEdit(item._id)}
                  >
                    Edit
                  </button>
                  <button
                    className=" text-red-500 px-2 py-1 rounded-e border-gray-300 border"
                    onClick={() => handleDelete(item._id)}
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
