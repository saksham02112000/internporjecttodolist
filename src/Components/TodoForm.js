import React, {useState} from "react";


const TodoForm = () =>{


    const [inputValue, setInputValue]= useState('');

    const onSubmit= (event) => {
        setInputValue(event.target.value)
    }
    return(
        <div className="entrydata">
            <form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
                <label className='sr-only'>Name</label>
                <input
                    type='text'
                    className='form-control mb-2 mr-sm-2'
                    placeholder='Add todo...'
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                ></input>

                <button type='submit' className='btn btn-primary mb-2'>
                    Submit
                </button>
            </form>
        </div>
    )
};

export default TodoForm;