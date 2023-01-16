import React, { useRef, useContext } from 'react'
import { DataContext } from './DataProvider';
export default function Form() {
  const [todos, setTodos] = useContext(DataContext);
  const task_level = useRef();
  const task_name = useRef();
  const idTask = useRef(0);
  const handleSubmit = (e) => {
    if (task_name.current.value != "") {
      let idMax=0;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].idTask>idMax) {
          idMax=todos[i].idTask
        }
      }
      idTask.current = idMax + 1;
      setTodos(() => {
        const newTodos = [...todos, {
          idTask: idTask.current,
          taskName: task_name.current.value,
          taskLevel: parseInt(task_level.current.value),
        }];
        const jsonTodos = JSON.stringify(newTodos);
        localStorage.setItem("todo", jsonTodos);
        task_name.current.value = "";
        return newTodos;
      });
    } else {
      e.preventDefault();
    }
  }
  const handleCancel = () => {
    task_name.current.value = "";
  }
  return (
    <div className="row">
      <div className="col-md-offset-7 col-md-5">
        <form action="" method="POST" className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <input
              id='taskName'
              type="text"
              className="form-control"
              placeholder="Task Name"
              ref={task_name}
            />
          </div>
          <div className="form-group">
            <label className="sr-only" htmlFor="">
              label
            </label>
            <select
              name="ds"
              id="inputDs"
              className="form-control"
              required="required"
              ref={task_level}
            >
              Small
              <option value={1}>Small</option>
              <option value={2}>Medium</option>
              <option value={3}>High</option>

            </select>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" className="btn btn-default" onClick={handleCancel} >
            Cancel
          </button>
        </form>
      </div>
    </div>
  )
}
