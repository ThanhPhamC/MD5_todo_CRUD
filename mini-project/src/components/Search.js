import React, { useRef, useContext, useState } from 'react'
import { DataContext } from './DataProvider';
export default function Search() {
    const [store, setStore] = useState(()=>{
        const store =JSON.parse(localStorage.getItem("todo"))
        return store ?? [];
    });
    const [todos, setTodos] = useContext(DataContext);
    const search = useRef("");
    const newTodos =useRef(
        todos
    );
    const handleSearch = () => {
        if (search.current.value !="") {
            console.log("newTodos",newTodos);
            let searchs = todos.filter((todo) => {
                if (todo.taskName.includes(search.current.value)) {
                    return todo
                }
            })
            setTodos(searchs)
        } else {
            setTodos(newTodos.current)
            }
    }
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..." ref={search}
                />
                <span className="input-group-btn">
                    <button className="btn btn-info" type="button" onClick={handleSearch}>
                        Go!
                    </button>
                </span>
            </div>
        </div>
    )
}
