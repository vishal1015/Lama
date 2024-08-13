import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/add-project");
  };

  return (
    <div>
      <div className="relative h-screen bg-purple-500 justify-center items-center">
        <div className="absolute bg-white z-20 w-[60%] h-[80%] ml-20 mt-20 rounded-2xl">
          <h1 className="text-4xl font-bold text-bluetextcolor1 m-10">
            Home Page 
          </h1>
          <button
            className="bg-purple-700 px-6 py-4 font-bold text-white rounded-lg border-2 border-black"
            onClick={handleNavigate}
          >
            Go To Project Screen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
