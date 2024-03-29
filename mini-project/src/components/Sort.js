import React, { useContext, useRef, useState } from 'react'
import { DataContext } from './DataProvider'
export default function Sort() {
    const [todos, setTodos] = useContext(DataContext)
    const handleSort = (e) => {
        const store =JSON.parse(localStorage.getItem("todo"))
        switch (e) {
            case 1:
                setTodos(store.sort((a,b)=>(a.taskName>b.taskName)?1:(a.taskName>b.taskName)?-1:0))
                break;
            case 2:
               setTodos(store.sort((a,b)=>(a.taskName>b.taskName)?-1:(a.taskName>b.taskName)?1:0))
                break;
            case 3:
                setTodos(store.sort((a,b)=>(a.taskLevel-b.taskLevel)))
                break;
            case 4:
                setTodos(store.sort((a,b)=>(b.taskLevel-a.taskLevel)))
                break;
            default:
                break;
        }
    }
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="dropdown">
                <button
                    className="btn btn-default dropdown-toggle"
                    type="button"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                >
                    Sort by <span className="caret" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>
                        <a role="button" onClick={() => handleSort(1)}>Name ASC</a>
                    </li>
                    <li>
                        <a role="button" onClick={() => handleSort(2)} >Name DESC</a>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                        <a role="button" onClick={() => handleSort(3)}>Level ASC</a>
                    </li>
                    <li>
                        <a role="button" onClick={() => handleSort(4)}>Level DESC</a>
                    </li>
                </ul>
                <span className="label label-success label-medium">NAME - DESC</span>
            </div>
        </div>
    )
}
