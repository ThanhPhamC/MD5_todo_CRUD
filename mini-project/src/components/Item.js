import React, { useState, useContext } from 'react'
import { DataContext } from './DataProvider';
import FormEdit from './FormEdit';
export default function Item(props) {
    const [todos, setTodos] = useContext(DataContext);
    const { idTask, taskName, taskLevel } = props.todo;
    const [show, setShow] = useState(false);
    const [todoUpdate, setTodoUpdate]= useState({});
    const handleUpdate=(id)=>{
        setShow(true);
        setTodoUpdate(todos.filter((todo)=>{
            if(todo.idTask==id){
              return todo
            }
          })) 
    }
    const handleDelete=(id)=>{
        const store =JSON.parse(localStorage.getItem("todo"))
       const newTodos =store.filter((todo)=>{
        if (todo.idTask!=id) {
            return todo
        }
       })
       setTodos(newTodos)
       const json=JSON.stringify(newTodos)
       localStorage.setItem("todo",json)
       
    }
    const handleHideFormEdit=()=>{
        setShow(false);
    }
    if(show){
        return <FormEdit todoUpdate={todoUpdate} handleHideFormEdit={handleHideFormEdit} />
    }else{
        return (
            <tr>
                <td className="text-center">{idTask}</td>
                <td>
                    {taskName}
                </td>
                <td className="text-center">
                    <span className={(taskLevel == 1) ? "label label-default" : (taskLevel == 2) ? "label label-info" : "label label-danger"}>{(taskLevel == 1) ? "Small" : (taskLevel == 2) ? "Medium" : "Hight"} </span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning"  onClick={()=>handleUpdate(idTask)} >
                        Edit
                    </button>
                    <button type="button" className="btn btn-danger" onClick={()=>handleDelete(idTask)} >
                        Delete
                    </button>
                </td>
            </tr>
        )
    }
   
}
