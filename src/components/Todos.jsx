import React from 'react';
import Todo from "./Todo.jsx";

const Todos = ({todos,delTodo,updateTodo,editTodo}) => {
    return (
        <>
            <h2> Lista de tareas</h2>
            <ul className="list-group">
                {
                    // eslint-disable-next-line react/prop-types
                    todos.map((todo)=>(
                        <Todo key={todo.id}
                              todo={todo}
                              delTodo={delTodo}
                              updateTodo = {updateTodo}
                              handleEditTodo={editTodo}
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default Todos;