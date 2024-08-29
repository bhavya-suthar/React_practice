import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
const API ="https://jsonplaceholder.typicode.com"

function App() {
  const [myData, setMyData] = useState([]);
  console.log("🚀 ~ App ~ myData:", myData);
  const [isError, setIsError] = useState("");
  console.log("🚀 ~ App ~ isError:", isError);

  // using Promises
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => setMyData(res.data))
  //   .catch((error) => setIsError(error.message))
  //  }, []);

  //  using async-await

  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <h1>AXIOS</h1>
      {isError !== " " && <h2>{isError}</h2>}
      <div className="grid">
        {myData.slice(0, 12).map((post) => {
          const { id, title, body } = post;
          return (
            <div className="cards" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 150)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
