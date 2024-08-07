import  { useState } from "react";
import {
  useNavigate,
} from "react-router-dom";
// import EditScreen from "./EditScreen";
import './styles.css'
const initialData = [
  {
    id: 1,
    name: "Project A",
    uploadDateTime: "2024-08-06 12:00",
    status: "Done",
  },
  {
    id: 2,
    name: "Project B",
    uploadDateTime: "2024-08-06 13:00",
    status: "Done",
  },
  {
    id: 3,
    name: "Project c",
    uploadDateTime: "2024-08-06 13:00",
    status: "Done",
  },
  {
    id: 4,
    name: "Project D",
    uploadDateTime: "2024-08-06 13:00",
    status: "Done",
  },
  {
    id: 5,
    name: "Project E",
    uploadDateTime: "2024-08-06 13:00",
    status: "Done",
  },
  {
    id: 6,
    name: "Project F",
    uploadDateTime: "2024-08-06 13:00",
    status: "Done",
  },
  {
    id: 7,
    name: "Project G",
    uploadDateTime: "2024-08-06 13:00",
    status: "Done",
  },
  {
    id: 8,
    name: "Project F",
    uploadDateTime: "2024-08-06 13:00",
    status: "Done",
  },
  // Add more initial data as needed
];

const TableComponent = () => {
  const [data, setData] = useState(initialData);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleEdit = (id) => {
    navigate(`/app/edit-transcript`);
    console.log(` ${id} went to edit page`);
  };

  return (
    // <div className="container mx-auto border-2 border-gray-400 shadow-lg rounded-lg overflow-auto h-80">
    //   <table className="min-w-full bg-white">
    //     <thead>
    //       <tr>
    //         <th className="py-2  border-b">Name</th>
    //         <th className="py-2 px-4 border-b">Uploaded Date & Time</th>
    //         <th className="py-2 px-4 border-b">Status</th>
    //         <th className="py-2 px-4 border-b">Action</th>
    //       </tr>
    //     </thead>
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
          {data.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.uploadDateTime}</td>
              <td className="py-2 px-4 border-b">{item.status}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className=" text-black px-2 py-1 rounded-s  border-gray-300 border"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className=" text-red-500 px-2 py-1 rounded-e border-gray-300 border"
                  onClick={() => handleDelete(item.id)}
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
