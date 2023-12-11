import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";



import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);



    async function getJsonData() {
        await axios
          .get("https://jsonplaceholder.typicode.com/todos")
          .then((response) => {
            //console.log(response.data);
            setToDos( response.data.slice(0,10));
          })
          .catch((err) => console.log(err));
      }

  return (
    <div>
      <Header id="header" />
      <Form setToDos={setToDos} toDos={toDos} id="form" />
      <List setToDos={setToDos} toDos={toDos} id="list" />
      <div className="mt-4 d-flex gap-5 ">
        <button
          className="btn btn-dark "
          onClick={() => {
            localStorage.setItem("Tasks", JSON.stringify(toDos));
          }}>
          Save to 🗄️
        </button>
        <button
          className="btn btn-dark"
          onClick={() => {
            setToDos([...toDos, ...JSON.parse(localStorage.getItem("Tasks"))]);
          }}>
          Restore from 🗄️
        </button>
        <button className="btn btn-dark font-monospace" onClick={getJsonData}>
          JSON placeholder
        </button>
      </div>
    </div>
  );
}

export default App;
