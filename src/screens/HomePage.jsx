import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { GlobalContext } from "../GlobalContext";
import lemaIcon from "/lamaIcon.png";
const Home = () => {
  const navigate = useNavigate();

  const {isLoggedIn, setIsLoggedIn} = useContext(GlobalContext); 

  const handleNavigate = () => {
   if (!isLoggedIn) {navigate("/login");}
   else navigate("/create-project");
  };

  const handleLoginNavigate = () => {
    navigate("/login");
  };

  const handleRegisterNavigate = () => {
    navigate("/register");
  };

  return (
    <div>
      <div className=" text-purple-700 bg-white p-4 flex justify-between shadow-md items-center">
        <h1 className="text-2xl font-bold flex ">
          {" "}
          <img src={lemaIcon} className=" w-10 h-10" />
          Lama.
        </h1>
        <div>
          {isLoggedIn ? (
            <button
              className="bg-red-700 text-white font-bold px-4 py-2 rounded-lg mr-2"
              onClick={() => {
                localStorage.clear();
                setIsLoggedIn(false);
              }} // Log out action
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className=" bg-purple-700 text-white font-bold border-2 border-black px-4  py-2 rounded-lg mr-2"
                onClick={handleLoginNavigate}
              >
                Login
              </button>
              <button
                className=" bg-purple-700 text-white font-bold border-2 border-black px-4 py-2 rounded-lg"
                onClick={handleRegisterNavigate}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-screen bg-purple-600 justify-center items-center">
        <div className="absolute bg-white z-20 w-[60%] h-[80%] mx-[20%] my-[2%] rounded-2xl justify-center text-center background-image bg-gradient-to-b from-white to-purple-700 ">
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
