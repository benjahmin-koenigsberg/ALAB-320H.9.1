import List from "./List";
import { v4 as uuidv4 } from "uuid";
import { useReducer, useState } from "react";

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

function Form({toDos, setToDos}) {


const [ state , dispatch] = useReducer(reducer, { id: '' , toDoInput : '' , priority: 'light', isComplete: false });

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
              className="form-control-plaintext border pl-2"
              value={state.toDoInput}
              placeholder=""
              onChange={(e) =>
                dispatch({ type: "userInput", payload: e.target.value })
              }
            />

            <br></br>
            <div className="form-group row m-auto">
              <label className="col-form-label">Priority Level</label>
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
            className="btn-dark"
            onClick={(e) => {
              e.preventDefault();
              setToDos([
                ...toDos,
                {
                  id: uuidv4(),
                  text: state.toDoInput,
                  priority: state.priority,
                  isComplete: state.isComplete,
                },
              ]);
            }}>
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
