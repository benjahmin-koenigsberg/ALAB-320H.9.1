import { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function List({ toDos, setToDos }) {

const [editTodo, setEditTodo] = useState({});

  useEffect(() => {
    // setToDos(JSON.parse(localStorage.getItem("Tasks")))
    // const tasks = JSON.parse(localStorage.getItem("Tasks"))
    // console.log(tasks)

    //   async function getJsonData() {
    //     await axios
    //       .get("https://jsonplaceholder.typicode.com/todos")
    //       .then((response) => {
    //         //console.log(response.data);
    //         setToDos( [ ...response.data.slice(0, 7)]);
    //       })
    //       .catch((err) => console.log(err));
    //   }
    //   getJsonData();
    // }, []);

  }, [toDos]);


const handleComplete = (e) => {
const toDo = toDos.find( todo => todo.id == e.target.id);
console.log(e.target.id)
console.log(toDo)
toDo.completed = true;
setToDos([...toDos])
  toast.success("Task completed! 🏁", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

}


  const handleDelete = (e) => {
    const updatedArray = toDos.filter( item => item.id != e.target.id);
    setToDos(updatedArray);
      toast.warn("Task deleted! ❌", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  };


  const handleEdit = (e) => {
const toDo = toDos.find((todo) => todo.id == e.target.id);
   //console.log(toDo);
    setEditTodo(toDo);
    const updatedArray = toDos.filter((item) => item.id !== e.target.id);
    // setToDos(updatedArray);
  };


  return toDos.length >= 1 ? (
    <>
      <h4 className="mt-4 container">Task List</h4>
      <div className="border rounded border-2 p-z bg-white shadow-lg">
        {toDos?.map((toDo) => (
          <ul className="list-group m-auto" key={toDo.id}>
            <li
              className={`list-group-item fw-bold p-2`}
              style={{ backgroundColor: `${toDo.priority}` }}>
               {toDo.title}
            </li>
            <div className="d-flex justify-content-evenly m-2 ">
              <button
                type="button"
                className="btn btn-dark"
                data-toggle="modal"
                data-target="#modal"
                id={toDo.id}
                  onClick={ (e) => {
                  e.preventDefault()
                  handleEdit(e)
                  }}
                >
                📝
              </button>

              { toDo.completed ? (
                <button
                  className="btn btn-dark"
                  id={toDo.id}
                  onClick={(e) => {
                  handleDelete(e)}
                  }>
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
      </div>
      <Modal
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        setToDos={setToDos}
        toDos={toDos}
      />
      <ToastContainer />
    </>
  ) : (
    ""
    // <p className="mt-4">No tasks</p>
  );
}
export default List;
