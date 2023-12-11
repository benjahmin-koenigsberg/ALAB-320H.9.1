
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function Modal({ editTodo, setEditTodo, toDos, setToDos}) {

  return (
    <div
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      id="modal"
      aria-hidden="true"
      aria-labelledby="exampleModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Task</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action="">
              <div className="form-group row">
                <label className="col-form-label">
                  {/* <h2>Add Task</h2> */}
                  <h6>Task</h6>
                </label>

                <input
                  type="text"
                  className="form-control border p-2"
                  // value={  editTodo.title ? editTodo.ttitle : editTodo.text }
                  value={ editTodo.title }
                  onChange={(e) =>
                    setEditTodo({
                      ...editTodo,
                      title: e.target.value,
                    })
                  }
                />

                <br></br>
                <div className="form-group row">
                  <label htmlFor="priority " className="col-form-label">
                    Priority 🔽
                  </label>
                  <select
                    className="form-control"
                    id="priority"
                    value={editTodo.priority}
                    onChange={(e) =>
                      setEditTodo({
                        ...editTodo,
                        priority: e.target.value,
                      })
                    }>
                    <option value="grey">Low</option>
                    <option value="lightblue">Moderate</option>
                    <option value="yellow">High</option>
                    <option value="red">Urgent</option>
                  </select>
                </div>
              </div>
              <br></br>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => {
                // setToDos([...toDos, editTodo]);
                    const updatedArray = toDos.filter(
                      item => item.id !== editTodo.id
                    );

                // setToDos(updatedArray);
                setToDos([...updatedArray, editTodo]);

                toast("Task saved! 📝", {
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
              Save changes
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Modal;
