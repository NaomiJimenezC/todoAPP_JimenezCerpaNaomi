import React from 'react';
import Swal from "sweetalert2";
import todo from "./Todo.jsx";


const EditForm = ({updateTodo, setCurrentTodo, currentTodo, setEdit,})=> {
    return (
        <>
            <form onSubmit={updateTodo}>
                <input
                    placeholder="Enter todos here"
                    onChange={(e) => {
                        setCurrentTodo(e.target.value);
                    }}
                    type="text"
                    value={currentTodo}
                />
                <button className="btn" type="submit" onClick={updateTodo}>
                    Save Todo
                </button>
                <button
                    className="btn"
                    type="submit"
                    onClick={() => {
                        setCurrentTodo("");
                        setEdit(false);
                    }}
                >
                    Cancel
                </button>
            </form>
        </>
    );
}

export default EditForm;