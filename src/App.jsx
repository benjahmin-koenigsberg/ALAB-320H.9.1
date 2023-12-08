import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);

  return (
    <div className="container">
      <Form setToDos={setToDos} toDos={toDos} />
      <List setToDos={setToDos} toDos={toDos} />
    </div>
  );
}

export default App;
