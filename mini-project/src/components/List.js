import React, { useContext } from 'react'
import { DataContext } from './DataProvider'
import Item from './Item';
export default function List() {
    const [todos, setTodos] = useContext(DataContext);
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th style={{ width: "10%" }} className="text-center">
                            #
                        </th>
                        <th>Task</th>
                        <th style={{ width: "20%" }} className="text-center">
                            Level
                        </th>
                        <th style={{ width: "20%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <Item todo={todo} key={todo.idTask} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
