import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);

  return (
    <div className="container d-flex flex-row w-100 gap-5">
      <Form setToDos={setToDos} toDos={toDos} />
      <List setToDos={setToDos} toDos={toDos} />
    </div>
  );
}

export default App;
