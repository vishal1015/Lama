import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { dbUri } from "../utils/Constants";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUri}/api/users`, {
        username,
        email,
        password,
      });

      console.log("User registered successfully:", response.data);
      setIsLoading(false);
      // Redirect to login page after successful registration
      navigate("/login");
    } catch (err) {
      setIsLoading(false);
      setError(err.response?.data?.message || "Something went wrong");
    }
  };
  if (isLoading) {
    return (
      <div className=" justify-center items-center ">
        <PulseLoader />
      </div>
    );
  } else
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
              Register
            </button>
          </form>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    );
};

export default RegisterPage;
