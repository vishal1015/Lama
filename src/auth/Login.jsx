import { useState , useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../GlobalContext";
import { PulseLoader } from "react-spinners";
import { dbUri } from "../utils/Constants";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setIsLoggedIn } = useContext(GlobalContext);
  const [isLoading ,setIsLoading]= useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
      setIsLoading(true);
    try {
      const response = await axios.post(
        `${dbUri}/api/users/login`,
        {
          email,
          password,
        }
      );

      console.log("User logged in successfully:", response.data);
      localStorage.setItem("userId", response.data.user._id);
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("password", password);
      setIsLoggedIn(true);
      setIsLoading(false);
      navigate(`/`);
    } catch (err) {
      setIsLoading(false);
      setError(err.response?.data?.message || "Invalid credentials");
      navigate(`/login`);
    }
  };

  if (isLoading) {
    return (
      <div className=" justify-center items-center ">
        <PulseLoader />
      </div>
    );
  } else {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?
            <a href="/register" className="text-indigo-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    );
  }

  
};

export default LoginPage;
