/** @format */

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [toDos, setToDos] = useState([]);

  return (
    <div>
      <Header  id="header" />
      <Form setToDos={setToDos} toDos={toDos} id="form" />
      <List setToDos={setToDos} toDos={toDos} id="list" />
    </div>
  );
}

export default App;
