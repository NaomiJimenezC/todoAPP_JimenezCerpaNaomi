import React from 'react';
import Todo from "./Todo.jsx";

const Todos = ({todos,delTodo,updateTodo}) => {
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
                        />
                    ))
                }
            </ul>
        </>
    );
};

export default Todos;