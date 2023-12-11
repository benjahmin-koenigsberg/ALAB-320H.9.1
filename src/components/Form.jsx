import List from "./List";
import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const reducer = (state, action) => {
  switch (action.type) {
    case "userInput":
      return { ...state, toDoInput: action.payload };
    case "priority":
      return { ...state, priority: action.payload };
    default:
      throw new Error();
  }
};

function Form({ toDos, setToDos }) {
  const [state, dispatch] = useReducer(reducer, {
    id: "",
    toDoInput: "",
    priority: "light",
    completed: false,
  });

  return (
    <div className="container ">
      <div className="flex-container">
        <form action="">
          <div className="form-group row">
            <label className="col-form-label">
              <h4>Add Task</h4>
            </label>

            <input
              type="text"
              id="task"
              className="form-control border pl-2 bg-white"
              value={state.toDoInput}
              placeholder=""
              onChange={(e) =>
                dispatch({ type: "userInput", payload: e.target.value })
              }
            />

            <br></br>
            <div className="form-group row m-auto">
              <label className="col-form-label">
                <h4>Priority Level</h4>
              </label>
              <select
                className="form-select form-control-md"
                id="priority"
                onChange={(e) => {
                  dispatch({ type: "priority", payload: e.target.value });
                }}>
                <option value="grey">Low</option>
                <option value="lightblue">Moderate</option>
                <option value="yellow">High</option>
                <option value="red">Urgent!</option>
              </select>
            </div>
          </div>
          <br></br>
          <button
            className="btn-dark btn mb-4"
            onClick={(e) => {
              e.preventDefault();
                dispatch({ type: "userInput", payload: '' });

              setToDos([
                ...toDos,
                {
                  id: uuidv4(),
                  title: state.toDoInput,
                  priority: state.priority,
                  completed: state.completed,
                },
              ]);
              // localStorage.setItem("Tasks", JSON.stringify(toDos));
              toast("Task added! 📓", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }}>
            Add Task
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Form;
