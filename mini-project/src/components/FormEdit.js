import React, { useContext, useRef,useState } from 'react'
import { DataContext } from './DataProvider';
export default function FormEdit(props) {
  const [todosStore, setTodosStore] = useState(()=>{
    const store =JSON.parse(localStorage.getItem("todo"))
    return store ?? [];
});
  const [todos, setTodos] = useContext(DataContext);
  const [todo, setTodo] = props.todoUpdate
  const task_level = useRef();
  const task_name = useRef();
  const handleUpdate=()=>{
    const editTodos=todosStore.map((todonew)=>{
      if (todonew.idTask === todo.idTask) {
        todonew.taskName = task_name.current.value;
        todonew.taskLevel = task_level.current.value;
      }
      return todonew;  
    })
   setTodos(editTodos); 
   const jsonTodos = JSON.stringify(editTodos);
        localStorage.setItem("todo", jsonTodos);
        props.handleHideFormEdit();
  }
  return (
    <tr>
      <td className="text-center">{todo.idTask}</td>
      <td>
        <input className="form-control" placeholder="Task Name" type="text" defaultValue={todo.taskName} 
        ref={task_name}/>
      </td>
      <td className="text-center">
        <select
          name="ds"
          id="inputDs"
          className="form-control"
          defaultValue={todo.taskLevel}
          ref={task_level}
        >
          Small
          <option value={1}>Small</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>

        </select>
      </td>
      <td>
        <button type="button" className="btn btn-success" onClick={handleUpdate}  >
          Save
        </button>
      </td>
    </tr>
  )
}
