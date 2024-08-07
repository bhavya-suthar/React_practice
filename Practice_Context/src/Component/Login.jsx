import React,{useState,useContext} from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [userName, SetUserName] = useState("");
  console.log("🚀 ~ Login ~ userName:", userName)
  const [password, SetPassword] = useState("");
  console.log("🚀 ~ Login ~ password:", password)

  const {setUser} = useContext(UserContext)

  const handleSunbmit = (e) => {
    e.preventDefault()
    setUser({userName,password})
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => 
         SetUserName( e.target.value)
        }
        placeholder="enter your name"
      />
      <input type="password" value={password} onChange={(e)=>SetPassword(e.target.value)} placeholder="enter your password" />
      <button onClick={handleSunbmit}>Submit</button>
    </div>
  );
};

export default Login;
