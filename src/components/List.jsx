/** @format */

import { useEffect, useState } from "react";
import Modal from "./Modal";

function List({ toDos, setToDos }) {
  const [editTodo, setEditTodo] = useState({});

  const handleDelete = (e) => {
    const updatedArray = toDos.filter((item) => item.id !== e.target.id);
    setToDos(updatedArray);
  };

  const handleEdit = (e) => {
    const toDo = toDos.find((todo) => todo.id === e.target.id);
    console.log(toDo.text);
    setEditTodo(toDo);
    const updatedArray = toDos.filter((item) => item.id !== e.target.id);
    setToDos(updatedArray);
  };

  useEffect(() => {

  }, [toDos]);

  return (

    <div className="container border rounded border-2 p-2">
      <h2>To Do List</h2>
      <ul className="list-group m-auto ">
        {toDos?.map((toDo) => (
          <div key={toDo.id}>
            <li
              className={`list-group-item fw-bold p-2`}
              style={{ backgroundColor: `${toDo.priority}` }}>
              {toDo.text}
            </li>
            <div className="d-flex justify-content-evenly m-2">
              <button
                type="button"
                className="btn btn-dark"
                data-toggle="modal"
                data-target="#modal"
                id={toDo.id}
                onClick={(e) => handleEdit(e)}>
                📝
              </button>
              <button
                className="btn btn-dark"
                id={toDo.id}
                onClick={(e) => handleDelete(e)}>
                ❌
              </button>
            </div>
          </div>
        ))}
      </ul>
      <Modal
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        setToDos={setToDos}
        toDos={toDos}
      />
    </div>
  )
}
export default List;
