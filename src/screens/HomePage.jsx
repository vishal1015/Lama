import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { GlobalContext } from "../GlobalContext";
// import BeatLoader from "react-spinners/BeatLoader";
const Home = () => {
  const navigate = useNavigate();

  const {isLoggedIn, setIsLoggedIn} = useContext(GlobalContext); 

  const handleNavigate = () => {
    navigate("/create-project");
  };

  const handleLoginNavigate = () => {
    navigate("/login");
  };

  const handleRegisterNavigate = () => {
    navigate("/register");
  };

  return (
    <div>
      {/* Header Section */}
      <div className=" bg-purple-400 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Lama.</h1>
        <div>
          {isLoggedIn ? (
            <button
              className="bg-red-600 px-4 py-2 rounded-lg mr-2"
              onClick={() =>{ localStorage.clear(); setIsLoggedIn(false)} } // Log out action
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="bg-blue-600 px-4 py-2 rounded-lg mr-2"
                onClick={handleLoginNavigate}
              >
                Login
              </button>
              <button
                className="bg-green-600 px-4 py-2 rounded-lg"
                onClick={handleRegisterNavigate}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-screen justify-center items-center">
        <div className="absolute bg-purple-500 z-20 w-[60%] h-[80%] ml-20 mt-20 rounded-2xl">
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
