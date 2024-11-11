import React from 'react';

// eslint-disable-next-line react/prop-types
const Todo = ({todo,delTodo,updateTodo,handleEditTodo}) => {
    // eslint-disable-next-line react/prop-types
    const { id, title, description, state, priority } = todo;
    return (
        <>
            <li className="list-group-item">
                <div className="d-flex justify-content-between mb-3">
                    <div>
                        <h5 className={state ? "completada" : undefined}>{title}</h5>
                        <h5 className={state ? "completada" : undefined}>{description}</h5>
                        <div className="d-flex">
                            <button className="btn btn-sm btn-danger"
                                    onClick={() => {
                                        delTodo(id)
                                    }}
                            >Eliminar
                            </button>
                            <button
                                className="btn btn-sm btn-warning"
                                onClick={() => {
                                    updateTodo(id)
                                }}
                            >Actualizar
                            </button>
                            <button
                            className="btn btn-sm btn-dark"
                            onClick={() => {handleEditTodo()}}>
                                Editar
                            </button>
                        </div>
                    </div>
                </div>
                <span className="badge bg-primary ">{priority && "Prioridad"}</span>
            </li>
        </>
    );
};

export default Todo;