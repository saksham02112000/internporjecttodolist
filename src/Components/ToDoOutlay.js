import React from "react";


const handleDeleteClick= ()=>{


};


const ToDoOutlay=()=>{
    return(
        <li className={`list-group-item ${completed && 'list-group-item-success'}`}>
            <div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
                        type='checkbox'
                        className='mr-3'
                        onClick={handleCheckboxClick}
                        checked={completed}
                    ></input>
                    {title}
				</span>
                <button onClick={handleDeleteClick} className='btn btn-danger'>
                    Delete
                </button>
            </div>
        </li>
    )
};

export default ToDoOutlay;