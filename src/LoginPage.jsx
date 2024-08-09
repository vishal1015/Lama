import  { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

//   ------ simple backend login logic without authentication----
//   const url = "http://localhost:5000/user/login";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // actual authentication logic
//     try{
//       const res = await axios.post(url, { email: email, password: password });
//       const validuserdata = res.data;
//       const { email: Email, password: Password } = validuserdata;
//       if (email === Email && password === Password) {
//         console.log('user is valid');
//         // navigate("/add-project");
//       } else {
//         alert("Invalid credentials");
//       }
//     } catch(err){
//         console.log("Errr: ", err.message)
//     }
//   };

const handleSubmit =() =>{
      if (email === 'lama@gmail.com' && password === "12345") {
        navigate("/add-project");
      } else {
        alert("Invalid credentials");
      }
}

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" border border-black "
        />
    
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" border border-black "
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
