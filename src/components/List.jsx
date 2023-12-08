import { useEffect, useState } from "react";
import Modal from "./Modal";

function List({ toDos, setToDos }) {

const [editTodo, setEditTodo] = useState({});


const handleComplete = (e) => {
const toDo = toDos.find((todo) => todo.id === e.target.id);
toDo.isComplete = true;
setToDos([...toDos])
}


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
    <>
      <h4 className="mt-4">Task List</h4>
      <div className="border rounded border-2 p-z">
        {toDos?.map((toDo) => (
          <ul className="list-group m-auto" key={toDo.id}>
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

                {toDo.isComplete ? (
                  <button
                    className="btn btn-dark"
                    id={toDo.id}
                    onClick={(e) => handleDelete(e)}>
                    ❌
                  </button>
                ) : (
                  <button
                    className="btn btn-dark"
                    id={toDo.id}
                    onClick={(e) => handleComplete(e)}>
                    ✅
                  </button>
                )}
              </div>
          </ul>
        ))}

        <Modal
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          setToDos={setToDos}
          toDos={toDos}
        />
      </div>
    </>
  );
}
export default List;
