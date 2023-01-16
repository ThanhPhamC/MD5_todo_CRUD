import React, { useContext, useRef } from 'react'
import { DataContext } from './DataProvider';
import Search from './Search';
import Sort from './Sort';
export default function Control() {

  return (
    <div className="row">
      {/* SEARCH : START */}
      <Search />
      {/* SEARCH : END */}
      {/* SORT : START */}
      <Sort />
      {/* SORT : END */}
      {/* ADD : START */}
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button type="button" className="btn btn-info btn-block">
          Add Task
        </button>
      </div>
      {/* ADD : END */}
    </div>
  )
}
